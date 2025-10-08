//your JS code here. If required.
 function removeSelectedColor() {
      const select = document.getElementById("colorSelect");
      const selectedIndex = select.selectedIndex;

      // Only remove if something is selected
      if (selectedIndex !== -1) {
        select.remove(selectedIndex);
      }
    }
