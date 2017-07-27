<?php
namespace app\index\controller;
use think\Controller;
use think\Db;
class Intendant extends Controller{
   public function add(){
       if (!request()->isPost()){
           $this->error('非正常请求',true);
           return;
       }
       $uuid=session('uuid');
       $postuuid=input('uuid');
       if ($uuid != $postuuid){
           $this->error('登录过期，正在刷新页面，请重新登登录',true,10006);
           return;
       };
       $session_user=session('user');
       if($session_user['power']!='admin'){
           $this->error('您的账号没有权利新建账号',true);
           return;
       };
       $name=input('name');
       $power=input('power');
       $powertext=input('powertext');
       $password=input('password');
       $user=Db::name('user');
       if($user->where('name',$name)->find()){
           $this->error('此账号已存在',true);
           return;
       };
       $data=[
           'name'=>$name,
           'power'=>$power,
           'powertext'=>$powertext,
           'password'=>$password
       ];
       $respond=$user->data($data)->insert();
       if($respond){
           $this->success('添加成功',true);
       }else{
           $this->error('出现了问题，请重试',true);
       }
   }
   public function alluser(){
        $alluser=db('user')->field('id,name,power,powertext')->select();
        if ($alluser){
            $this->success('数据查询成功',true,$alluser);
        }else{
            $this->error('出现了问题，请重试',true);
        }
   }
   public function delete(){
       $uuidget=input('uuid');
       $id=input('id');
       $uuid=session('uuid');
       if ($uuid != $uuidget){
           $this->error('登录已经过期，正在刷新页面。。。。。',true,10006);
           return;
       };
       $power=input('power');
       if ($power=='admin'){
           $this->error('(⊙o⊙)？您没有删除[一级管理员]的权限。。。。',true);
           return;
       }
       $session_user=session('user');
        if ($session_user['power']=='visitor'){
            $this->error('(⊙o⊙)？您没有任何管理权限。。。。',true);
            return;
        }
        $result=db('user')->where('id',$id)->delete();
        if ($result){
            $this->success('删除成功',true);
            return;
        }else{
            $this->error('(⊙o⊙)遇到了未知问题，请重试。。。。',true);
            return;
        }

   }
}






