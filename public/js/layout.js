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

          <strong>Website</strong>
          <ul>
          <li><a href="/about/aboutme">About Me</a></li>
          <li><a href="/about/aboutthesite">About the Site</a></li>
          <li><a href="/changelog">Changelog</a></li>
          </ul>

          <ul>
          <strong>Worldbuilding</strong>
          <li><a href="/world/cosmotalia">Cosmotalia</a></li>
          </ul>
        </nav>
        

      </aside>
	
	  
      <!-- =============================================== -->
      <!-- RIGHT SIDEBAR -->
      <!-- =============================================== -->

      <aside class="right-sidebar">

      <img width="76px" src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/2ee9e56d-c6ee-41e6-830d-e2954d0a5e2b/dbjawqk-1d2b10f0-ac3a-4b61-abf3-6b1baaea4629.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiIvZi8yZWU5ZTU2ZC1jNmVlLTQxZTYtODMwZC1lMjk1NGQwYTVlMmIvZGJqYXdxay0xZDJiMTBmMC1hYzNhLTRiNjEtYWJmMy02YjFiYWFlYTQ2MjkucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.6MtVFie6tMWvJ7ZrJhPKaQrW5VTWxyGFzmdEAa_Zzz8">
      <img width="76px" src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/2ee9e56d-c6ee-41e6-830d-e2954d0a5e2b/dbiyjc2-761bebc1-5cc0-45b3-b300-fd8be320227a.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiIvZi8yZWU5ZTU2ZC1jNmVlLTQxZTYtODMwZC1lMjk1NGQwYTVlMmIvZGJpeWpjMi03NjFiZWJjMS01Y2MwLTQ1YjMtYjMwMC1mZDhiZTMyMDIyN2EucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.mRRICl3DuCgxcKNWLhDT8CzmOX81OqTbNYKMwWtyxMQ">
      <img width="76px" src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/2ee9e56d-c6ee-41e6-830d-e2954d0a5e2b/dbiy42i-40e62323-5733-4d88-9548-6eb25d044e02.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiIvZi8yZWU5ZTU2ZC1jNmVlLTQxZTYtODMwZC1lMjk1NGQwYTVlMmIvZGJpeTQyaS00MGU2MjMyMy01NzMzLTRkODgtOTU0OC02ZWIyNWQwNDRlMDIucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.shtbTfDxSNbSe3ZpVI1o2VSAzN_tvX7nL5rdDBzAcG8">
      <img width="76px" src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/8cb2184f-fe95-4552-aeb0-f3a30b7ab67f/dautmmd-b5ffd710-eb92-45dd-909e-5a36a1cbd580.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiIvZi84Y2IyMTg0Zi1mZTk1LTQ1NTItYWViMC1mM2EzMGI3YWI2N2YvZGF1dG1tZC1iNWZmZDcxMC1lYjkyLTQ1ZGQtOTA5ZS01YTM2YTFjYmQ1ODAucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.UyM_2JcW8xfUuugYig0DhEier3oeAWdoSCPob6YozdI">
      <img width="76px" src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/62be36f0-067b-44cb-98b1-c386a08072b6/da3x6c1-62b17861-9249-46bc-adb0-c893591f48b9.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiIvZi82MmJlMzZmMC0wNjdiLTQ0Y2ItOThiMS1jMzg2YTA4MDcyYjYvZGEzeDZjMS02MmIxNzg2MS05MjQ5LTQ2YmMtYWRiMC1jODkzNTkxZjQ4YjkucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.36IriVLLgkmAKbWAawWmCj56ygFy-u9igq5evN_oofY">
      <img width="76px" src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/2ee9e56d-c6ee-41e6-830d-e2954d0a5e2b/dbh0j0n-434125d9-7151-47af-a1c9-f688e405c82f.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiIvZi8yZWU5ZTU2ZC1jNmVlLTQxZTYtODMwZC1lMjk1NGQwYTVlMmIvZGJoMGowbi00MzQxMjVkOS03MTUxLTQ3YWYtYTFjOS1mNjg4ZTQwNWM4MmYucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.YFblTarCnTHIeS5kbQRvZUx1O2-bBsra5zXk3DtKQ_4">
    
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