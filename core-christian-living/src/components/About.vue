<template>
  <div>
    <h1 class="title">Core Christian Living Blog</h1>
    <div class="rout-box">
      <RouterLink class="nav-link route homenavtag" to="/"> Home </RouterLink>
      <RouterLink class="nav-link route selected" to="/About"> About </RouterLink>
      <RouterLink class="nav-link route gospelnavtag" to="/gospel-playlists">
        Gospel Playlists
      </RouterLink>
      <RouterLink class="nav-link route biblenavtag" to="/bible-evidence">
        Bible Evidence
      </RouterLink>
    </div>
  </div>
  <div class="hero-img1">
    <h1 class="hero-text">
      Core Christian Living Blog is a place where we share the gospel of Christ
    </h1>
  </div>
  <div class="hero-img2">
    <h1 class="hero-text">We talk about core topics and issues of the bible.</h1>
  </div>
  <div class="hero-img3">
    <h1 class="hero-text">We grow and we learn together</h1>
  </div>
  <div class="hero-img4">
    <h1 class="hero-text">
      We help families learn how to live for Christ, as we walk with him together
    </h1>
  </div>

  <div class="author-flex">
    <h2 class="meet">Meet The Authors</h2>
    <div class="profile-flex">
      <img class="profile" alt="Picture of Paul" src="../resources/paul.png" />
      <h2 class="names">Paul Racisz</h2>
    </div>
    <p class="info">
      Paul is a software engineer, admin, and builder of the site. He has a passion for using new
      technology to improve the lives of those around him. He gave his life to Christ in 2019 and
      has since learned a lot about what it means to be a christian, what it means to be a man, a
      husband, and a father. He is non-denominational, and believes that we should look towards the
      scriptures for any beliefs that we have regarding spirtual matters. His wife is Destoni.
    </p>
  </div>
  <div class="author-flex">
    <div class="profile-flex">
      <img class="profile" alt="Picture of Destoni" src="../resources/destoni.jpg" />
      <h2 class="names">Destoni Racisz</h2>
    </div>
    <p class="info">
      Destoni is a loving mother and wife. She grew up in the church and has extensive knowledge of
      scriptures and teachings of the bible. She is a nursing assistant that has a passion for
      helping people who are sick or need patient care. Her husband is Paul.
    </p>
  </div>
  <RouterLink id="back-home" class="about-back" to="/"> Back To Home </RouterLink>
  <div class="credit-div"><p class="credit-text">Website Created By Paul Racisz © 2023</p></div>
</template>


<style>
/* media queries */
@media only screen and (max-width: 600px) {
  .hero-text {
    -webkit-text-stroke-width: 0px !important;
    -webkit-text-stroke-color: black;
    background-color: rgba(0, 0, 0, 0.508);
  }
}

/* classes */
.about-back {
  margin: 15px;
}

.selected {
  color: #ffd60a;
}

.info {
  color: white;
  -webkit-text-stroke-width: 0px;
  font-weight: bold;
  width: 50%;
  font-size: 1.5em;
}

.profile {
  width: 15em;
  max-width: 15em;
  max-height: 15em;
  object-fit: cover;
  margin: 15px;
  border: 2px solid white;
  border-radius: 50%;
}

.profile-flex {
  display: flex;
  justify-content: center;
  align-items: center;
}

.names {
  -webkit-text-stroke-width: 0px;
  font-weight: bold;
  font-size: 2.5em;
}

.meet {
  font-size: 3em;
  -webkit-text-stroke-width: 0px;
  font-weight: bold;
}

.author-flex {
  height: 100%;
  width: 100%;
  flex-direction: column;
  margin: 0;
  font-weight: bold;
  margin-top: 0;
  padding: 25px;
  background-color: rgba(26, 26, 26, 0.5);
  -webkit-text-stroke-width: 2px;
  -webkit-text-stroke-color: black;
  display: flex;
  justify-content: center;
  align-items: center;
}

.hero-text {
  color: white;
  font-size: 3em;
  font-weight: bold;
  -webkit-text-stroke-width: 2px;
  -webkit-text-stroke-color: black;
}

.hero-img1,
.hero-img2,
.hero-img3,
.hero-img4 {
  width: 100vw;
  height: 100vh;
  padding: 15px;
  margin-bottom: 0px;
  margin-top: 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
}

.hero-img1 {
  background-image: url('../resources/gospel.jpg');
}

.hero-img2 {
  background-image: url('../resources/bible.jpg');
}

.hero-img3 {
  background-image: url('../resources/plant.jpg');
}

.hero-img4 {
  background-image: url('../resources/family.jpg');
}
</style>
