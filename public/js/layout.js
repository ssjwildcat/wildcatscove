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
	        <div class="header-title"><img src="https://i.postimg.cc/Wb1Fdh7z/headerdivider.png alt="A divider composed of pixel art of hibiscus flowers, dolphins and surfboards"> Wildcat's Cove <img src="https://i.postimg.cc/Wb1Fdh7z/headerdivider.png alt="A divider composed of pixel art of hibiscus flowers, dolphins and surfboards""></div>
        </div>
      </header>

	  
        
      <!-- =============================================== -->
      <!-- LEFT SIDEBAR -->
      <!-- =============================================== -->

      <aside class="left-sidebar">
	  
        
        <!-- NAVIGATION -->
        <nav>
          <div class="sidebar-title">Navigation</div>
          <ul>
          <li><a href="/index">Home</a></li>
          </ul>

          <details>
          <summary><strong>Website</strong></summary>
          <ul>
          <li><a href="/about/aboutme">About Me</a></li>
          <li><a href="/about/why">Site Manifesto</a></li>
          <li><a href="/about/credits">Credits</a></li>
          <li><a href="/changelog">Changelog</a></li>
          </ul>
          </details>

          <details>
          <summary><strong>Projects</strong></summary>
          <ul>
          <li><a href="/writing">Writing Hub</a></li>
          <li><a href="/world">Cosmotalia</a></li>
          </ul>
          </details>

          <ul>
          <li><a href="/ocs">Characters</a></li>
          </ul>
        </nav>
        

      </aside>
	
	  
      <!-- =============================================== -->
      <!-- RIGHT SIDEBAR -->
      <!-- =============================================== -->

      <aside class="right-sidebar">

      <img width="76px" src="/graphics/buttons/asexuals_now.gif">
      <img width="76px" src="/graphics/buttons/hatems.gif">
      <img width="76px" src="/graphics/buttons/internetprivacy.gif">
      <img width="76px" src="/graphics/buttons/thissiteisgay.gif">
      <center><a href="/graphics/buttons">More Buttons</a></center>
      <hr>

      <img width="76px" src="/graphics/stamps/hellovaporwave.png">
      <img width="76px" src="/graphics/stamps/seasidevaporwave.png">
      <img width="76px" src="/graphics/stamps/fijivaporwave.png">
      <img width="76px" src="/graphics/stamps/computervaporwave.png">
      <img width="76px" src="/graphics/stamps/sidewalkvaporwave.png">
      <img width="76px" src="/graphics/stamps/streetlightvaporwave.png">
      <center><a href="/graphics/stamps">More Stamps</a></center>
      <hr>

      <img src="/graphics/blinkies/iheartdragons.gif">
      <center><a href="/graphics/blinkies">More Blinkies</a></center>
      <hr>

      <center><h4 style="text-shadow: -1px -1px 0 #000, 1px -1px 0 #000,
          -1px 1px 0 #000, 1px 1px 0 #000; color: cyan;">Link my site!</h4>
      <img src="/img/sitebutton.gif">
      <textarea><a href="https://wwww.wildcatscove.neocities.com"><img src="https://wwww.wildcatscove.neocities.com/img/sitebutton.gif"></textarea></center>
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
            <div>© 2026 SaturnianWildcat // <a href="https://neocities.org/site/wildcatscove">follow me on neocities!</a> // <a href="/sitemap">sitemap</a></div>
      </footer>`;
}

/* Do not edit anything below this line unless you know what you're doing. */

function giveActiveClassToCurrentPage() {
  const els = document.querySelectorAll("nav a");
  [...els].forEach((el) => {
    const href = el.getAttribute("href").replace(".html", "").replace("#", "");
    const pathname = window.location.pathname.replace("/public/", "");
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