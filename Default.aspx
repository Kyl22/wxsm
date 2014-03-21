<%@ page language="C#" masterpagefile="~/Site.master" autoeventwireup="true" inherits="_Default, App_Web_qhm4drew" %>


<asp:Content ID="Content1" ContentPlaceHolderID="ContentPlaceHolder1" runat="server">
<div id="mainbody">
  <div class="info">
    <img src="IMG/temp.jpg"  alt="error"/>
    <div class="card">
      <h1>名片</h1>
      <p>blabla</p>
      <p>blabla</p>
      <p>blabla</p>
      <p>blabla</p>
      <ul class="linkmore">
        <li><a href="Default.aspx" class="talk" title="给我留言"></a></li>
        <li><a href="Default.aspx" class="address" title="联系地址"></a></li>
        <li><a href="Default.aspx" class="email" title="给我写信"></a></li>
        <li><a href="Default.aspx" class="more" title="更多"></a></li>
        <li><a href="Default.aspx" class="heart" title="关注我"></a></li>
      </ul>
    </div>
  </div>
  
  <div class="blogs">
    <ul class="bloglist">
      <li>
        <div class="arrow_box">
          
          <h2 class="title"><a href="Default.aspx">blabla</a></h2>
          
           
            <p>blabla</p>
          
          <ul class="details">
            <li class="likes">10</li>
            <li class="comments">34</li>
            <li class="icon-time">2013-8-7</li>
          </ul>
        </div>
        <!--arrow_box end--> 
      </li>
      <li>
        <div class="arrow_box">
          <h2 class="title"><a href="Default.aspx">blabla</a></h2>
          <ul class="textinfo">
            <p>blabla</p>
          </ul>
          <ul class="details">
            <li class="likes">102</li>
            <li class="comments">58</li>
            <li class="icon-time">2013-8-7</li>
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
        <div class="notice">
        <h2>公告</h2>
        <p>正在完善主页。</p>
        <time>3.21.2012</time>
        </div>
      <div class="click">
        <h2>点击</h2>
        <ol>
          <li><span>0<strong>1</strong></span><a href="Default.aspx">blabla</a></li>
          <li><span>0<strong>2</strong></span><a href="Default.aspx">blabla</a></li>
          <li><span>0<strong>3</strong></span><a href="Default.aspx">blabla</a></li>
          <li><span>0<strong>4</strong></span><a href="Default.aspx">blabla</a></li>
          <li><span>0<strong>5</strong></span><a href="Default.aspx">blabla</a></li>
          <li><span>0<strong>6</strong></span><a href="Default.aspx">blabla</a></li>
          <li><span>0<strong>7</strong></span><a href="Default.aspx">blabla</a></li>
          <li><span>0<strong>8</strong></span><a href="Default.aspx">blabla</a></li>
          <li><span>0<strong>9</strong></span><a href="Default.aspx">blabla</a></li>
        </ol>
      </div>
      <div class="visitors">
      <h2>最新评论</h2>
      <dl>
       
        <dd>blabla
          <time>49分钟前</time>
        </dd>
        <dd>在 <a href="Default.aspx" class="title">blabla</a>中评论：</dd>
        <dd>blabla</dd>
      </dl>
      <dl>
        
        <dd>blabla
          <time>2小时前</time>
        </dd>
        <dd>在 <a href="Default.aspx" class="title">blabla</a>中评论：</dd>
        <dd>blabla</dd>
      </dl>
      <dl>
        
        <dd>blabla
          <time>8月7日</time>
        </dd>
        <dd>在 <a href="Default.aspx" class="title">blabla</a>中评论：</dd>
        <dd>blabla</dd>
      </dl>
    </div> 
      
      
      
    </aside>
  </div>
  <!--blogs end--> 
</div>
<!--mainbody end-->


</asp:Content>