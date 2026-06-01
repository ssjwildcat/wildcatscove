document.addEventListener("DOMContentLoaded", function () {
  // Page has finished loading. Now, do things.
  loadLayoutByPetraPixel();

  // Add any custom JavaScript code here...
});

function loadLayoutByPetraPixel() {
  const mainEl = document.querySelector("main");
  if (!mainEl) return;
  mainEl.insertAdjacentHTML("beforebegin", headerHTML());
  mainEl.insertAdjacentHTML("afterend", footerHTML());
  giveActiveClassToCurrentPage();
}

const nesting = getNesting();

function headerHTML() {
  // ${nesting} outputs "./" or "../" depending on current page depth.
  // You can use it to refer to images etc.
  // Example: <img src="${nesting}img/logo.png"> might output <img src="../img/logo.png">

  return `
  
      <!-- =============================================== -->
      <!-- HEADER -->
      <!-- =============================================== -->

      <header>

        <div class="header-content">
	        <div class="header-title"><img src="https://file.garden/aWWU1egoWxmNHEDn/headerdivider.png"> Wildcat's Cove <img src="https://file.garden/aWWU1egoWxmNHEDn/headerdivider.png"></div>
        
          <div class="header-title">
          <span class="frutiger-aero-button small"><a href="/index">Home</a></span>
          <span class="frutiger-aero-button small"><a href="/about/aboutme">About Me</a></span>
          <span class="frutiger-aero-button small"><a href="/graphics">Graphics</a></span>
          <span class="frutiger-aero-button small"><a href="/writing">Writing</a></span>
          <span class="frutiger-aero-button small"><a href="/world">Cosmotalia</a></span>
          <span class="frutiger-aero-button small"><a href="/ocs">Characters</a></span>
          </div>

          </div>
        
      </header>

	  
        
      <!-- =============================================== -->
      <!-- LEFT SIDEBAR -->
      <!-- =============================================== -->

      <aside class="left-sidebar">

      <iframe src="https://petracoding.github.io/neocities/widgets/statuscafe?center=1&marquee=0&font-family=Courier New&font-size=15px&color=#110321&linkColor=#3aff61&width=200px&height=100px&username=saturnianwildcat&hideUsername=0" frameborder="0" title="Status.Cafe Status"></iframe>
      </div>
      <hr>

      <center><p style="text-shadow: -1px -1px 0 #000, 1px -1px 0 #000,
          -1px 1px 0 #000, 1px 1px 0 #000; color: cyan;">Link my site!</p>
      <img src="/img/sitebutton.gif">
      <textarea><a href="https://wwww.wildcatscove.neocities.com"><img src="https://www.wildcatscove.neocities.com/img/sitebutton.gif"></textarea>
      Hotlinking is a-ok!</center>
      <hr>

      <div class="results" style="width: 200px;background-color: #8095a2;color: #000;display: block;padding: 10px;border: 1px solid;margin: 0 auto;font-family: 'times';font-size: '15pt';">
      <p style="margin: 0">This page is protected by a</p>
      <h1 class="title" style="margin: 0">DOLPHIN</h1>
      <img class="image" style="max-width: 160px;border: 1px solid" alt="DOLPHIN" src="https://i.ibb.co/zr1qMd7/dolphin.png">
      <p class="description">There are currently 42 species of dolphins.</p>
      <small>
        <a href="https://hekate.neocities.org">Want your own? Visit hekate.neocities.org!</a>
      </small>
    </div>

      </aside>
	
	  
      <!-- =============================================== -->
      <!-- RIGHT SIDEBAR -->
      <!-- =============================================== -->

      <aside class="right-sidebar">

      <img width="88px" src="/graphics/buttons/asexuals_now.gif">
      <img width="88px" src="/graphics/buttons/hatems.gif">
      <img width="88px" src="/graphics/buttons/internetprivacy.gif">
      <img width="88px" src="/graphics/buttons/thissiteisgay.gif">
      <img width="88px" src="/graphics/buttons/b-computer.png">
      <img width="88px" src="/graphics/buttons/getpussy.gif">
      <center><a href="/graphics/buttons">More Buttons</a></center>
      <hr>

      <img width="99px" src="/graphics/stamps/hellovaporwave.png">
      <img width="99px" src="/graphics/stamps/seasidevaporwave.png">
      <img width="99px" src="/graphics/stamps/fijivaporwave.png">
      <img width="99px" src="/graphics/stamps/computervaporwave.png">
      <img width="99px" src="/graphics/stamps/sidewalkvaporwave.png">
      <img width="99px" src="/graphics/stamps/streetlightvaporwave.png">
      <img width="99px" src="/graphics/stamps/dolphinaero.png">
      <img width="99px" src="/graphics/stamps/tvaesthetic.png">
      <center><a href="/graphics/stamps">More Stamps</a></center>
      <hr>

      <img src="/graphics/blinkies/iheartdragons.gif">
      <img width="145px" src="/graphics/blinkies/firefox.gif">
      <img src="/graphics/blinkies/cathonor.gif">
      <img src="/graphics/blinkies/internetloser.gif">
      <img src="/graphics/blinkies/lavalamp.gif">
      <img src="/graphics/blinkies/netsurfer.webp">
      <center><a href="/graphics/blinkies">More Blinkies</a></center>
      <hr>

      <center><a href="https://petrapixel.neocities.org/" target="_blank"><img src="https://cdn.jsdelivr.net/gh/petracoding/petrapixel.neocities.org@latest/assets/img/linkback.gif" alt="petrapixel"></a>
      <a href="https://ne0nbandit.neocities.org/" target="_blank"><img src="https://ne0nbandit.github.io/assets/img/btn/mine/nbbanner.png"></a>
      <a href='https://blinkies.cafe' target='_blank'><img src='https://blinkies.cafe/b/display/blinkiesCafe-badge.gif' alt='blinkies.cafe | make your own blinkies!'></a>
      <a href="https://hekate.neocities.org/" target="_blank"><img src="/graphics/sitebuttons/hekate.png" alt="hekate Neocities"></a>
      <p><a href="/about/links">More Sites</a></p></center>

      </aside>
      `;
}

function footerHTML() {
  // ${nesting} outputs "./" or "../" depending on current page depth.
  // You can use it to refer to images etc.
  // Example: <img src="${nesting}img/logo.png"> might output <img src="../img/logo.png">

  return `


      <!-- =============================================== -->
      <!-- FOOTER -->
      <!-- =============================================== -->

      <footer>
            <div>© 2026 SaturnianWildcat // 
            <a href="https://neocities.org/site/wildcatscove"><img src="/graphics/buttons/neocities2.gif"></a> // <a href="https://wildcatscove.nekoweb.org/"><img src="/graphics/buttons/nekoweb.webp"></a> // <a href="/sitemap">sitemap</a></div>
      </footer>`;
}

/* Do not edit anything below this line unless you know what you're doing. */

function giveActiveClassToCurrentPage() {
  const els = document.querySelectorAll("nav a");
  [...els].forEach((el) => {
    const href = el.getAttribute("href").replace(".html", "").replace("#", "");
    const pathname = window.location.pathname.replace("/", "");
    const currentHref = window.location.href.replace(".html", "") + "END";

	/* Homepage */
    if (href == "/" || href == "/index.html") {
      if (pathname == "/") {
        el.classList.add("active");
      }
    } else {
      /* Other pages */
      if (currentHref.includes(href + "END")) {
        el.classList.add("active");

        /* Subnavigation: */
		
        if (el.closest("details")) {
          el.closest("details").setAttribute("open", "open");
          el.closest("details").classList.add("active");
        }

        if (el.closest("ul")) {
          if (el.closest("ul").closest("ul")) {
          	el.closest("ul").closest("ul").classList.add("active");
          }
        }
      }
    }
  });
}

function getNesting() {
  const numberOfSlashes = window.location.pathname.split("/").length - 1;
  if (numberOfSlashes == 1) return "./";
  return "../".repeat(numberOfSlashes - 1);
}