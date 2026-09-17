      function openTab(evt, tabName) {
        var i, tabpane, tabbtns;
        
        tabpane = document.getElementsByClassName("tab-pane");
        for (i = 0; i < tabpane.length; i++) {
          tabpane[i].classList.remove("active");
        }
        
        tabbtns = document.getElementsByClassName("tab-btn");
        for (i = 0; i < tabbtns.length; i++) {
          tabbtns[i].classList.remove("active");
        }
        
        document.getElementById(tabName).classList.add("active");
        evt.currentTarget.classList.add("active");
      }
