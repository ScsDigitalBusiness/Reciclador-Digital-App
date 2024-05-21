
for (let i = 0; i < 10; i++) {
    document.getElementById("feed").innerHTML += ` <div class="post">
    <div class="user-info">
      <div class="user-img"></div> 
      
      <div class="user-name">
        <p>thiago_duarte</p>
      </div>
    </div>
    <div class="post-content"></div>
    <div class="interactions">
      <ul class="interact">
        <li id="like-${i}"><img id="likeImg-${i}" src="" alt="" /><img src="assets/utilites/like-icon.svg" alt=""></li>

        <li id="comnent"><img src="" alt="" /><img src="assets/utilites/cmmnet-icon.svg" alt=""></li>

        <li id="share"><img src="" alt="" /><img src="assets/utilites/share-icon.svg" alt=""></li>

        <li id="save"><img src="" alt="" /><img src="assets/utilites/save-icon.svg" alt=""></li>
      </ul>
      <small class="likes-count"><span>2.000</span> Likes</small>
      <div class="legend"> 
        <small id="User-name" class="User-name">thiago_duarte</small> 

        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id quam corporis laborum, </p>
      </div>
    </div>
  </div>` 
  document.getElementById("like-"+i).addEventListener("click", (e) => {
    e.preventDefault(); 
    document.getElementById("likeImg-"+i).setAttribute("src","assets/utilites/liked-icon.svg")
});  
}