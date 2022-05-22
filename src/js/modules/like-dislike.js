import $ from "jquery";

export function likeDislike() {

  const like = document.querySelector('[like]');
  const dislike = document.querySelector('[dislike]');

  let like_count = like.querySelector('[count]');
  let dislike_count = dislike.querySelector('[count]');

  like.addEventListener('click', (e) => {
    if (!like.classList.contains("liked")) {
      like.classList.add("liked");
      $(like_count).html(parseInt(like_count.innerHTML) + 1);

      if (dislike.classList.contains("disliked")) {
        dislike.classList.remove("disliked");
        $(dislike_count).html(parseInt(dislike_count.innerHTML) - 1);
      };
    } else {
      like.classList.remove("liked");
      $(like_count).html(parseInt(like_count.innerHTML) - 1);
    }
  })

  dislike.addEventListener('click', (e) => {
    if (!dislike.classList.contains("disliked")) {
      dislike.classList.add("disliked");
      $(dislike_count).html(parseInt(dislike_count.innerHTML) + 1);

      if (like.classList.contains("liked")) {
        like.classList.remove("liked");
        $(like_count).html(parseInt(like_count.innerHTML) - 1);
      };
    } else {
      dislike.classList.remove("disliked");
      $(dislike_count).html(parseInt(dislike_count.innerHTML) - 1);
    }
  })
}