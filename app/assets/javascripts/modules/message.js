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

  $('.Form').on('submit', function(e){
    e.preventDefault();
    let formData = new FormData(this);
    let url = $(this).attr('action');
    $.ajax({
      url: url,
      type: "POST",
      data: formData,
      dataType: 'json',
      processData: false,
      contentType: false
    })
    .done(function(data){
      let html = buildHTML(data);
      $('.Message-folder').append(html);
      $('form')[0].reset();
      $('.Message-folder').animate({ scrollTop: $('.Message-folder')[0].scrollHeight});
      $('.submit-btn').prop('disabled', false);
    })
    .fail(function() {
      alert("メッセージ送信に失敗しました");
      $('.Form__submit').prop("disabled", false);
    });
  });
});