<?php
namespace app\index\controller;
use think\Controller;
use think\Db;
use think\Session;
// class Index
// {
//     public function index()
//     {
//         return '<style type="text/css">*{ padding: 0; margin: 0; } .think_default_text{ padding: 4px 48px;} a{color:#2E5CD5;cursor: pointer;text-decoration: none} a:hover{text-decoration:underline; } body{ background: #fff; font-family: "Century Gothic","Microsoft yahei"; color: #333;font-size:18px} h1{ font-size: 100px; font-weight: normal; margin-bottom: 12px; } p{ line-height: 1.6em; font-size: 42px }</style><div style="padding: 24px 48px;"> <h1>:)</h1><p> ThinkPHP V5<br/><span style="font-size:30px">十年磨一剑 - 为API开发设计的高性能框架</span></p><span style="font-size:22px;">[ V5.0 版本由 <a href="http://www.qiniu.com" target="qiniu">七牛云</a> 独家赞助发布 ]</span></div><script type="text/javascript" src="http://tajs.qq.com/stats?sId=9347272" charset="UTF-8"></script><script type="text/javascript" src="http://ad.topthink.com/Public/static/client.js"></script><thinkad id="ad_bd568ce7058a1091"></thinkad>';
//     }
// }
// CREATE TABLE IF NOT EXISTS think_user(
//     id INT PRIMARY KEY AUTO_INCREMENT,
//     name VARCHAR(20),
//     power VARCHAR(20),
//     password CHAR(20)
// )ENGINE INNODB;
// INSERT think_user(name,power,password) VALUES('大脸猫','admin','123');
class Index extends Controller{
    public function index(){
//         $user=Db::name('user');
//         $data=$user->select();
//         print_r($data);
//         $this->assign('title','后台首页');
//         return $this->fetch();
           $user = Db::table('think_user');
           $data=$user->select();
           print_r($data);
           echo '<hr />';
           if (Session::get('user')){

           }else{
               $this->error('您还没有登陆','login/index');//如果没有登陆就去登陆
           }

    }
}







