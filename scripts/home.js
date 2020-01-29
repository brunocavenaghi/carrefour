var picture, video;

$(function(){ 


  // LIKE COUNTER
  $('.posts-holder').on('click', '.like-button', function(){

    let $this = $(this);
    let counter = $('.like-count', $(this).parent());
    let count = Number(counter.text());

    if(!$this.hasClass('liked')){
      $this.addClass('liked');
      ++count;
    }else{
      $this.removeClass('liked');
      --count;
    }
    
    counter.text(count);
    
  });


  // POST COMMENT

  $('.posts-holder').on('click', '.post-comment', function(){

    let text = $('.insert-comment', $(this).parent()).val();
    let postHolder = $('.comments-holder', $(this).closest('.comments'));

    let comment = `
    <div class="row comment">
      <div class="col-2 col-md-1">
        <div class="avatar mini" style="background-image: url('images/profile-pic.png');"> </div>
      </div>
      <div class="col-10 col-md-3">
        <p class="user-name">Marina Santos</p>
      </div>
      <div class="col-md-8">
        <p class="comment-text">
          ${text}
        </p>
      </div>
    </div>
    `;

    postHolder.append(comment);

  });

  // INSERT POST

  $('.insert-post').click(function(){

    let text = $('.post-text', $(this).parent()).val();
    let postHolder = $('.posts-holder', $(this).closest('.feed-holder'));

    let imgHolder = ``;

    if(picture != undefined) {
      imgHolder = `
      <div class="media-holder">
        <img src="${picture}" alt="">
      </div>
      `;
    }

    let videoHolder = ``;

    if(video != undefined){
      videoHolder = `
      <div class="media-holder">
        <video controls>
          <source src="${video}" id="video-holder">
            O seu navegador não consegue exibir esse vídeo.
        </video>
      </div>`;
    }

    let post = `
    <div class="post">
      <div class="row">
        <div class="col-md-12">
          <div class="card-default">
            ${imgHolder}
            ${videoHolder}
            <!-- POST HEADER -->
            <div class="post-header">
              <div class="row">
                <div class="col-4 col-md-2">
                  <div class="avatar medium" style="background-image: url('images/profile-pic.png');"> </div>
                </div>
                <div class="col-8 col-md-7 info-holder">
                  <p class="user-name">Marina Santos</p>
                  <p class="post-date">${formatDate()}</p>
                </div>
                <div class="col-md-3 like-holder">
                  <span class="like-count">0</span>
                  <button class="like-button"></button>
                </div>
              </div>
            </div>
            <!-- END POST HEADER -->
            <!-- POST CONTENT -->
            <div class="post-content">
              <div class="row">
                <div class="col-md-12">
                  <p class="post-text">
                    ${text}
                  </p>
                </div>
              </div>
            </div>
            <!-- END POST CONTENT -->

            <!-- COMMENTS -->
            <div class="comments">
              <div class="row">
                <div class="col-md-12">
                  <p class="comment-title">Comnetários</p>
                </div>
              </div>

              <div class="row">
                <div class="col-md-12">
                  <div class="form-group m-0">
                    <input class="form-control insert-comment" type="text" placeholder="Deixe um comentário...">
                    <button class="btn btn-arrow post-comment"></button>
                  </div>
                </div>
              </div>
              <div class="comments-holder"> </div>
            </div>
            <!-- END COMMENTS -->

          </div>
        </div>
      </div>

    </div>
    `;

    postHolder.prepend(post);
    if(video != undefined)
      $('#video-holder').parent()[0].load();

    $('.post-text').val('');
    $('.post-holder').empty();
    picture = undefined;
    video = undefined;

  });

  $('.btn-foto').click(function(){
    $('.picture').click();
  });

  $(".picture").change(function(){

    input = this;

    if (input.files && input.files[0]) {
      var reader = new FileReader();
      
      reader.onload = function (e) {
        //  console.log(e.target.result);
        let img = $('<img>');
        img.addClass('post-pic');
        img.attr('src', e.target.result);

        $('.post-holder').append(img).show();
        picture = e.target.result;

      }
      
      reader.readAsDataURL(input.files[0]);
    }

  });

  $('.btn-video').click(function(){
    $('.video').click();
  });

  $('.video').change(function(){
   
    video = URL.createObjectURL(this.files[0]);
    let videoL = $('<video>');
    let source = $('<source>');
    videoL.attr('controls', 'true');
    source.attr('src',video);
    videoL.append(source);

    $('.post-holder').append(videoL).show();

  });

 });