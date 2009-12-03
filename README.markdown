# jQuery Resiglet

By Jared Grippe by heavily inspired by John Resig's http://ejohn.org/blog/javascript-micro-templating

## Why another templating plugin for jQuery?
I needed a lightweight plugin that supported more then just replacing tokens

## Example

     <script type="text/html" id="item_tmpl">
       <div id="<%=id%>" class="<%=(i % 2 == 1 ? " even" : "")%>">
         <div class="grid_1 alpha right">
           <img class="righted" src="<%=profile_image_url%>"/>
         </div>
         <div class="grid_6 omega contents">
           <p><b><a href="/<%=from_user%>"><%=from_user%></a>:</b> <%=text%></p>
         </div>
       </div>
     </script>
 
     <div id="results"></div>
 
     <script type="text/javascript" charset="utf-8">
       var results = document.getElementById("results");
       var data = {
         id: 123456789,
         i: 1,
         from_user: 'jresig',
         text: 'hello from a template inspired by John Resig',
         profile_image_url: 'https://secure.gravatar.com/avatar/b3e04a46e85ad3e165d66f5d927eb609?s=30&d=https%3A%2F%2Fgithub.com%2Fimages%2Fgravatars%2Fgravatar-30.png'
       };
       results.innerHTML = $.resiglet($("#item_tmpl").html(), data);
     </script>