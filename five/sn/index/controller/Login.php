<?php
namespace app\index\controller;
use think\Controller;
use think\Db;
use think\Session;
class Login extends Controller{
    public function index(){
        if (request()->isPost()){
            $code=input('code');
            if (!captcha_check($code)){
                $this->error('验证码错误',true);
                return;
            }
            $name=input('name');
            $password=input('password');
            $user=Db::name('user')->where('name','=',$name)->find();
            if(!$user){
                $this->error('用户不存在',true);
                return;
            }
            if ($user['password'] != $password){
                $this->error('登录密码错误');
                return;//密码错误
            }
            $uuid=mt_rand(10000,99999)+time();
            Session::set('user',$user);
            Session::set('uuid',$uuid);
            $data=array(
                'name'=>$user['name'],
                'level'=>$user['powertext'],
                'uuid'=>$uuid
            );
            $this->success('你成功了',true,$data);
            return;
        };
        $this->error('非正常请求',true);
    }
}







