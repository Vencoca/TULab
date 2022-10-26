<template>
  <header id = "navigation" class="header" :class="{'scrolled-nav' : scrolledNav}">
    <nav>
      <a class="color-change" @click='scroll("Home");'><img src="@/assets/logo.svg" alt="" srcset=""></a>
      <input class="menu-btn" type="checkbox" id="menu-btn" />
      <label class="menu-icon color-change" for="menu-btn">
        <span class="navicon"></span>
      </label>
      <ul class="menu">
        <li><a class="link active color-change" onclick="event.preventDefault()" @click='scroll("Home");' href="#Home">Domů</a></li>
        <li><a class="link color-change" onclick="event.preventDefault()" @click='scroll("Technology");' href="#Technology">Technologie</a></li>
        <li><a class="link color-change" onclick="event.preventDefault()" @click='scroll("Calendar");' href="#Calendar">Kalendář</a></li>
        <li><a class="link color-change" onclick="event.preventDefault()" @click='scroll("Kontakt");' href="#Kontakt">Kontakt</a></li>
      </ul>
    </nav>
  </header>
</template>

<script>
let SECTIONS;
export default {
  name: "navigation",
  data() {
    return{
      scrolledNav: null,
    };
  },

  mounted(){
    document.getElementById("menu-btn").addEventListener('change', this.showMenu);
    window.addEventListener('scroll', this.updateScroll);
  },
  created () {
    console.log(document.getElementsByTagName('section'));
    this.SECTIONS = document.getElementsByTagName('section');

    console.log("jsem jajo");
    for (let element of this.SECTIONS) {
      console.log(element.id);
    }
  },
  methods: {
    scroll(element){ 
      document.getElementById(element).scrollIntoView(true);
      if (document.getElementById("menu-btn").checked){
        document.getElementById("menu-btn").click();
      }
    },
    showMenu(){
      if(document.getElementById("menu-btn").checked){
        document.getElementById("navigation").style.backgroundColor = "var(--blue-color)";
        document.querySelectorAll('.dark').forEach(function(element){
              element.classList.remove('dark');
        })
      } else {
        document.getElementById("navigation").style.backgroundColor = "";
        const scrollPosition = window.scrollY
        if (document.getElementById("Team").offsetTop <= scrollPosition) {
          document.querySelectorAll('.color-change').forEach(function(element){
              element.classList.add('dark');
          })
        }
      }
    },
    updateScroll() {
      const scrollPosition = window.scrollY
      for (let element of this.SECTIONS) {
        if (element.offsetTop <= scrollPosition) {
          document.querySelectorAll('.active').forEach(function(element){
            element.classList.remove('active');
          })
          document.querySelectorAll('a[href*=' + element.id + ']').forEach(function(element) {
            element.setAttribute('class', element.getAttribute('class')+' active');
          })
          if(element.id == "Team"){
            if(!document.getElementById("menu-btn").checked){
              document.querySelectorAll('.color-change').forEach(function(element){
              })
            }
          } else {
          }
        } else if (element.id == "Newsletter"){
          if (element.offsetTop <= scrollPosition + 75) {
            document.querySelectorAll('.active').forEach(function(element){
              element.classList.remove('active');
            })
            document.querySelectorAll('a[href*=' + element.id + ']').forEach(function(element) {
              element.setAttribute('class', element.getAttribute('class')+' active');
            })
          }
        }
      };
      if(scrollPosition > 50){
        this.scrolledNav = true;
        return;
      }
      this.scrolledNav = false;
      return;
    },
  }
};
</script>

<style lang="scss" scoped>
.dark{
  color:var(--blue-color) !important; 
  span {
    background: var(--blue-color) !important;
  }
  span::before{
    background: var(--blue-color) !important;
  }
  span::after{
    background: var(--blue-color) !important;
  } 
  img{
    filter: invert(1);
  }
}

.active{
  cursor: pointer;
  font-size: 14px;
  color: var(--red-color) !important;
  border-color: var(--red-color) !important;
}

.header {
  background-color: var(--blue-color);
  position: fixed;
  width: 100%;
  z-index: 99;
  transition: transform 0.5s ease all;
  padding: 14px 0;
}

.scrolled-nav {
  background-color: transparent;
  padding: 10px 0;
  nav{
    img{
      margin-top: 5px;
      width: 40px;
    }
  }
}

.header nav{
  flex-direction: row;
  width: 100%;
  margin: 0px auto;
  user-select: none;  
  @media(min-width: 1140px) {
    max-width: 1140px;
  }
}

.header img{
  width: var(--logo-size);
  margin-left: 5px;
  cursor: pointer;
  transition: 0.5s ease all;
}



.link{
  font-weight: 500;
  color: #fff;
  list-style: none;
  text-decoration: none;
  font-size: 14px;
  transition: 0.5 ease all;
  padding-bottom: 4px;
  border-bottom: 1px solid transparent;

  &:hover{
    cursor: pointer;
    color: var(--red-color);
    border-color: var(--red-color);
  }
}  

.header ul {
  margin: 0;
  padding: 0;
  list-style: none;
  overflow: hidden;
  background-color: transparent;
}

.header li {
  text-transform: uppercase;
  display: block;
  padding: 15px 20px;
  text-decoration: none;
}


.header .logo {
  display: block;
  float: left;
  font-size: 2em;
  padding: 10px 20px;
  text-decoration: none;
}

/* menu */



.header .menu {
  clear: both;
  max-height: 0;
  transition: max-height .5s ease all;
}

/* menu icon */

.header .menu-icon {
  cursor: pointer;
  float: right;
  padding: 28px 20px;
  position: relative;
  user-select: none;
}

.header .menu-icon .navicon {
  background: var(--white-color);
  display: block;
  height: 2px;
  position: relative;
  width: 20px;
}

.header .menu-icon .navicon:before,
.header .menu-icon .navicon:after {
  background: var(--white-color);
  content: '';
  display: block;
  height: 100%;
  position: absolute;
  transition: transform .2s ease-out;
  width: 100%;
}

.header .menu-icon .navicon:before {
  top: 5px;
}

.header .menu-icon .navicon:after {
  top: -5px;
}

/* menu btn */

.header .menu-btn {
  display: none;
}

.header .menu-btn:checked ~ .menu {

  max-height: 240px;
}

.header .menu-btn:checked ~ .menu-icon .navicon {
  background: transparent;
}

.header .menu-btn:checked ~ .menu-icon .navicon:before {
  transform: rotate(-45deg);
}

.header .menu-btn:checked ~ .menu-icon .navicon:after {
  transform: rotate(45deg);
}

.header .menu-btn:checked ~ .menu-icon:not(.steps) .navicon:before,
.header .menu-btn:checked ~ .menu-icon:not(.steps) .navicon:after {
  top: 0;
}



/* 48em = 768px */

@media (min-width: 48em) {
  .header li {
    float: left;
  }
  .header li {
    padding:  12px 22px 14px 22px;
  }
  .header .menu {
    clear: none;
    float: right;
    max-height: none;
  }
  .header .menu-icon {
    display: none;
  }
}
</style>
