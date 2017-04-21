var dogs = [{
  id: 1,
  count: 0,
  stage1: "Rawrrr",
  stage2: "Hssss",
  img: "http://static.wixstatic.com/media/feb6f36ac702ed57786cf20403470c28.png_256"
}, {
  id: 2,
  count: 0,
  stage1: "Woff",
  stage2: "Grrrrr",
  img: "https://is3-ssl.mzstatic.com/image/thumb/Purple20/v4/4b/9f/1f/4b9f1f55-149e-d720-9c18-47a4657813dd/source/256x256bb.jpg"
}, {
  id: 3,
  count: 0,
  stage1: "Woff",
  stage2: "Grrrrr",
  img: "https://static-s.aa-cdn.net/img/ios/1034197315/98546f507caa5a015484f78d8c8b6ea1"
}, {
  id: 4,
  count: 0,
  stage1: "Woff",
  stage2: "Grrrrr",
  img: "https://images-na.ssl-images-amazon.com/images/I/61AT2giKTVL._SL256_.jpg"
}, {
  id: 5,
  count: 0,
  stage1: "Woff",
  stage2: "Grrrrr",
  img: "http://myhswm.org/images/sized/images/animals/annabelle-256x256.jpg"
}, {
  id: 6,
  count: 0,
  stage1: "Woff",
  stage2: "Grrrrr",
  img: "http://myhswm.org/images/sized/images/animals/Norisadog_-_Copy-256x256.jpg"
}, {
  id: 7,
  count: 0,
  stage1: "Woff",
  stage2: "Grrrrr",
  img: "https://pbs.twimg.com/profile_images/707293435011575808/P_0lUm1R.jpg"
}, {
  id: 8,
  count: 0,
  stage1: "Woff",
  stage2: "Grrrrr",
  img: "https://is4-ssl.mzstatic.com/image/thumb/Purple7/v4/c3/93/8b/c3938bca-5695-276e-57ed-8bab9454f0fe/source/256x256bb.jpg"
}, {
  id: 9,
  count: 0,
  stage1: "Woff",
  stage2: "Grrrrr",
  img: "https://is1-ssl.mzstatic.com/image/thumb/Purple91/v4/21/d2/b3/21d2b3b7-349e-a85d-fc25-3b7697bb5f74/source/256x256bb.jpg"
}]


function pet(petId) {
  var petCount = document.getElementById("petCount" + petId)
  var petStats = document.getElementById("petStats" + petId)
  var petButton = document.getElementById("petButton" + petId)
  var petImg = document.getElementById("petImg" + petId)
  var getDog = getDogs(petId)


  getDog.count++
  petCount.innerHTML = getDog.count
  if (getDog.count > 4) {
    petStats.innerHTML = "Rarhhhhh"
  }
  if (getDog.count == 9) {
    petStats.innerHTML = "Hssssss"
  }
  if (getDog.count == 10) {
    petButton.disabled = true
    petImg.src = ''
  }
}

function getDogs(petId) {
  for (var i = 0; i < dogs.length; i++) {
    var dog = dogs[i];
    if (dog.id == petId) {
      return dog
    }
  }
}

function reset(petId) {
  var petCount = document.getElementById("petCount" + petId)
  var petStats = document.getElementById("petStats" + petId)
  var petButton = document.getElementById("petButton" + petId)
  var petImg = document.getElementById("petImg" + petId)
  var getDog = getDogs(petId)

  getDog.count = 0
  petStats.innerHTML = ''
  petCount.innerHTML = 0
  petButton.disabled = false
  petImg.src = ''
}


function drawDog() {

  var template = ''
  for (var i = 0; i < dogs.length; i++) {
    var dog = dogs[i];
    template += `
    <div id="third">
    <img src="${dog.img}" alt="" id="petImg" width="95%"><br>
    <button onclick="pet(${dog.id})" id="petButton${dog.id}">PET</button>
    <button onclick="reset(${dog.id})" id="resetButton${dog.id}">RESET</button><br>
    <h1 id="petCount${dog.id}">0</h1>
    <h1 id="petStats${dog.id}"></h1>
    </div>`
  }

  document.getElementById("draw").innerHTML = template
}

drawDog()