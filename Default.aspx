<%@ page language="C#" masterpagefile="~/Site.master" autoeventwireup="true" inherits="_Default, App_Web_34zt0gzy" %>


<asp:Content ID="Content1" ContentPlaceHolderID="ContentPlaceHolder1" runat="server">
<div id="mainbody">
  <div class="info">
    <img src="images/home.jpg"  alt="error"/>
    <div class="card">
      <h1>名片</h1>
      <p>blabla</p>
      <p>blabla</p>
      <p>blabla</p>
      <p>blabla</p>
      <ul class="linkmore">
        <li><a href="/" class="talk" title="给我留言"></a></li>
        <li><a href="/" class="address" title="联系地址"></a></li>
        <li><a href="/" class="email" title="给我写信"></a></li>
        <li><a href="/" class="more" title="更多"></a></li>
        <li><a href="/" class="heart" title="关注我"></a></li>
      </ul>
    </div>
  </div>
  
  <div class="blogs">
    <ul class="bloglist">
      <li>
        <div class="arrow_box">
          
          <h2 class="title"><a href="/" target="_blank">blabla</a></h2>
          
           
            <p>blabla</p>
          
          <ul class="details">
            <li class="likes"><a href="#">10</a></li>
            <li class="comments"><a href="#">34</a></li>
            <li class="icon-time"><a href="#">2013-8-7</a></li>
          </ul>
        </div>
        <!--arrow_box end--> 
      </li>
      <li>
        <div class="arrow_box">
          <h2 class="title"><a href="/" target="_blank">blabla</a></h2>
          <ul class="textinfo">
            <p>blabla</p>
          </ul>
          <ul class="details">
            <li class="likes"><a href="#">102</a></li>
            <li class="comments"><a href="#">58</a></li>
            <li class="icon-time"><a href="#">2013-8-7</a></li>
          </ul>
        </div>
        <!--arrow_box end-->  
      </li>
    </ul>
    <!--bloglist end-->
    <aside>
        <div class="search">
        <asp:TextBox class="textbox" runat="server" ID="search"/>
        </div>
      <div class="click">
        <h2>点击</h2>
        <ol>
          <li><span>0<strong>1</strong></span><a href="/">blabla</a></li>
          <li><span>0<strong>2</strong></span><a href="/">blabla</a></li>
          <li><span>0<strong>3</strong></span><a href="/">blabla</a></li>
          <li><span>0<strong>4</strong></span><a href="/">blabla</a></li>
          <li><span>0<strong>5</strong></span><a href="/">blabla</a></li>
          <li><span>0<strong>6</strong></span><a href="/">blabla</a></li>
          <li><span>0<strong>7</strong></span><a href="/">blabla</a></li>
          <li><span>0<strong>8</strong></span><a href="/">blabla</a></li>
          <li><span>0<strong>9</strong></span><a href="/">blabla</a></li>
        </ol>
      </div>
      <div class="visitors">
      <h2>最新评论</h2>
      <dl>
       
        <dd>blabla
          <time>49分钟前</time>
        </dd>
        <dd>在 <a href="/" class="title">blabla</a>中评论：</dd>
        <dd>blabla</dd>
      </dl>
      <dl>
        
        <dd>blabla
          <time>2小时前</time>
        </dd>
        <dd>在 <a href="/" class="title">blabla</a>中评论：</dd>
        <dd>blabla</dd>
      </dl>
      <dl>
        
        <dd>blabla
          <time>8月7日</time>
        </dd>
        <dd>在 <a href="/" class="title">blabla</a>中评论：</dd>
        <dd>blabla</dd>
      </dl>
    </div> 
      
      
      
    </aside>
  </div>
  <!--blogs end--> 
</div>
<!--mainbody end-->


</asp:Content>