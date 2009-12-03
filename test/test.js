test("simple interpilation", function() {
  equals('love', $.resiglet('<%=feeling%>',{feeling:'love'}));
});


test("for loops", function() {
  var users = [
    {name: 'Jared', url: 'http://jaredgrippe.com'},
    {name: 'Katz',  url: 'http://yehudakatz.com'},
    {name: 'Jon',   url: 'http://ejohn.org'}
  ];

  var html = $.resiglet(
    '<% for ( var i = 0; i < users.length; i++ ) { %>'+
      '<li><a href="<%=users[i].url%>"><%=users[i].name%></a></li>'+
    '<% } %>',
    {users:users}
  );

  equals('<li><a href="http://jaredgrippe.com">Jared</a></li><li><a href="http://yehudakatz.com">Katz</a></li><li><a href="http://ejohn.org">Jon</a></li>', html);
});

test("creating resiglet", function(){
  
  var resiglet = $.resiglet(
    '<div id="<%=id%>" class="<%=(i % 2 == 1 ? " even" : "")%>">'+
      '<div class="grid_1 alpha right">'+
        '<img class="righted" src="<%=profile_image_url%>"/>'+
      '</div>'+
      '<div class="grid_6 omega contents">'+
        '<p><b><a href="/<%=from_user%>"><%=from_user%></a>:</b> <%=text%></p>'+
      '</div>'+
    '</div>'
  );
    
  equals(
    '<div id="123456789" class=" even">'+
      '<div class="grid_1 alpha right">'+
        '<img class="righted" src="/images/profile.jpg"/>'+
      '</div>'+
      '<div class="grid_6 omega contents">'+
        '<p><b><a href="/deadlyicon">deadlyicon</a>:</b> hello from the template</p>'+
      '</div>'+
    '</div>',
    resiglet.evaluate({
      id: 123456789,
      i: 1,
      from_user: 'deadlyicon',
      text: 'hello from the template',
      profile_image_url: '/images/profile.jpg'
    })
  );

});