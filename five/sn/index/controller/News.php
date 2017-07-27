<?php
namespace app\index\controller;
use think\Controller;
class News extends Controller{
    public function add(){
        $title=input('title');
        $abstract=input('abstract');
        $content=input('content');
        $news=db('news');
        $field=array(
            'title'=>$title,
            'abstract'=>$abstract,
            'content'=>$content
        );
        $result=$news->data($field)->insert();
        if ($result){
            $this->success('数据新增成功',true);
        }else{
            $this->error('未知错误，请重试',true);
        }
    }
}