<%@ page language="C#" masterpagefile="~/Site.master" autoeventwireup="true" inherits="_Default, App_Web_xjtijlxg" %>


<asp:Content ID="Content1" ContentPlaceHolderID="ContentPlaceHolder1" runat="server">
<div class="mainbody">
  <div class="info">
    <div style="border-radius: 6px;float:left;overflow: hidden;display:inline;">
    <img src="IMG/temp.jpg"  alt="error"/>
    </div>
    <div class="card">
      <h1>名片</h1>
      <p>blabla</p>
      <p>blabla</p>
      <p>blabla</p>
      <p>blabla</p>
      <ul class="linkmore">
        <li><a href="Default.aspx" class="talk" title="留言"></a></li>
        <li><a href="Default.aspx" class="address" title="地址"></a></li>
        <li><a href="Default.aspx" class="email" title="写信"></a></li>
        <li><a href="Default.aspx" class="more" title="更多"></a></li>
        <li><a href="Default.aspx" class="heart" title="关注"></a></li>
      </ul>
    </div>
  </div>
  
  <div style="width: 1000px;margin: 0 auto;" >
    <ul style="width: 666px; float: left;" >
      <li style="padding-bottom:20px">
        <div class="blogbox">
          
          <h2 class="title"><a href="Default.aspx">blabla</a></h2>
          
           
            <p>QAZWSXEDCRFVTGBYHNUJMIKOLPqazwsxedcrfvtgbyhnujmikolp</p>
          
          <ul class="blogbox_details">
            <li class="blogbox_likes">10</li>
            <li class="blogbox_comments">34</li>
            <li class="blogbox_time">2013-8-7</li>
          </ul>
        </div>
        <!--arrow_box end--> 
      </li>
      <li style="padding-bottom:20px">
        <div class="blogbox">
          <h2 class="title"><a href="Default.aspx">blabla</a></h2>
          <ul class="textinfo">
            <p>blabla</p>
          </ul>
          <ul class="blogbox_details">
            <li class="blogbox_likes">102</li>
            <li class="blogbox_comments">58</li>
            <li class="blogbox_time">2013-8-7</li>
          </ul>
        </div>
        <!--arrow_box end-->  
      </li>
      <li style="padding-bottom:20px">
        <div class="blogbox">
          <h2 class="title"><a href="Default.aspx">blabla</a></h2>
          <ul class="textinfo">
            <p>blabla</p>
          </ul>
          <ul class="blogbox_details">
            <li class="blogbox_likes">102</li>
            <li class="blogbox_comments">58</li>
            <li class="blogbox_time">2013-8-7</li>
          </ul>
        </div>
        <!--arrow_box end-->  
      </li>
    </ul>
    <!--bloglist end-->
    <aside>
        <div>
        <asp:TextBox class="searchTextbox" runat="server" ID="search"/>
        <asp:Button class="searchButton" ID="Button1" runat="server" text="Go"/>
        </div>
        <div class="notice">
        <h2>公告</h2>
        <p>正在完善主页。</p>
        <time>2012-3-21</time>
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
      <h2>动态</h2>
      <dl>
       
        <dd>blabla
          
        </dd>
        <dd>在 <a href="Default.aspx" class="title">blabla</a>中评论：</dd>
        <dd style="color:#00AEAE">blabla</dd>
        <time>49分钟前</time>
      </dl>
      <dl>
        
        <dd>blabla
          
        </dd>
        <dd>在 <a href="Default.aspx" class="title">blabla</a>中评论：</dd>
        <dd style="color:#00AEAE">blabla</dd>
        <time>2小时前</time>
      </dl>
      <dl>
        
        <dd>blabla
          
        </dd>
        <dd>在 <a href="Default.aspx" class="title">blabla</a>中评论：</dd>
        <dd style="color:#00AEAE">blabla</dd>
        <time>8月7日</time>
      </dl>
    </div> 
      
      
      
    </aside>
  </div>
  <!--blogs end--> 
</div>
<!--mainbody end-->


</asp:Content>