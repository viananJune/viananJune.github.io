function   checkIntersection (a, b) {
      var ax = a.offsetLeft;

      var ay = a.offsetTop;

      var aw = a.offsetWidth;

      var ah = a.offsetHeight;

      var bx = b.offsetLeft;

      var by = b.offsetTop;

      var bw = b.offsetWidth;

      var bh = b.offsetHeight;
      return (Math.abs((bx + bw) - (aw + ax)) + Math.abs(bx - aw) < (aw + bw) &&
        Math.abs((by + bh) - (ah + ay)) + Math.abs(by - ah) < (ah + bh));
    },