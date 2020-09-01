$(function(){
  function buildHTML(message){
    if ( message.image ) {
      let html =
        `<div class="Message-folder__parent" data-message-id=${message.id}>
          <div class="Message-folder__parent__name_box">
            <div class="Message-folder__parent__name_box__left">
              <div class="Message-folder__parent__name_box__left--user">
                ${message.user_name}
              </div>
              <div class="Message-folder__parent__name_box__right">
                ${message.created_at}
              </div>
            </div>
          </div>
            <div class="Message-folder__parent__comment_box">
              <div class="Message-folder__parent__comment_box__cmt">
                ${message.content}
              </div> 
              <img class="Message__image" src="${message.image}">
            </div>
        </div>`
        return html;
      } else {
        let html =
        `<div class="Message-folder__parent" data-message-id=${message.id}>
          <div class="Message-folder__parent__name_box">
            <div class="Message-folder__parent__name_box__left">
              <div class="Message-folder__parent__name_box__left--user">
                ${message.user_name}
              </div>
              <div class="Message-folder__parent__name_box__right">
                ${message.created_at}
              </div>
            </div>
          </div>
          <div class="Message-folder__parent__comment_box">
            <div class="Message-folder__parent__comment_box__cmt">
              ${message.content}
            </div> 
          </div>
        </div>`
      return html;
    };
  }

  let reloadMessages = function() {
    let last_message_id = $('.Message-folder__parent:last').data("message-id") || 0;
    $.ajax({
      url: "api/messages",
      type: 'get',
      dataType: 'json',
      data: {id: last_message_id}
    })
    .done(function(messages) {
      if (messages.length !== 0) {
        let insertHTML = '';
        $.each(messages, function(i, message) {
          insertHTML += buildHTML(message)
        });
        $('.Message-folder').append(insertHTML);
        $('.Message-folder').animate({ scrollTop: $('.Message-folder')[0].scrollHeight});
      }
    })
    .fail(function() {
      alert('error');
    });
  };
  setInterval(reloadMessages, 7000);
});
