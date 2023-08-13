if (confirm("Do you love me?")) {
    window.onload = function () {
        var d = document;
        
        // Fade In/animasi
        function feedin(feed, speed) {
            var filter = 0;
            feed.style.opacity = 0;
            feed.style.MozOpacity = 0;
            var timer = setInterval(function () {
                filter++;
                feed.style.opacity = filter / 10;
                feed.style.MozOpacity = filter / 10;
                if (filter === 10) {
                    clearInterval(timer);
                } 
            }, speed);
        }
        
        // I LOVE YOU
        var str = [
            [47, 48, 49, 83, 118, 153, 187, 188, 189], //i
            [52, 87, 122, 157, 192, 193, 194], //l
            [196, 161, 126, 91, 56, 57, 58, 93, 128, 163, 198, 197], //o
            [60, 95, 130, 165, 201, 202, 168, 133, 98, 63], //v
            [65, 66, 67, 100, 135, 170, 205, 136, 137, 206, 207], //e            
            [70, 105, 140, 141, 142, 107, 72, 176, 211], //y
            [214, 179, 144, 109, 74, 75, 76, 111, 146, 181, 216, 215], //o
            [78, 113, 148, 183, 218, 219, 220, 185, 150, 115, 80] //u                     
        ];
        
        //Tampilan Blok
        for (var i = 0; i < 245; i++) {
            var box = d.createElement('div');
            with (d.body.appendChild(box).style) {
                if (i % 35 === 0) { clear = 'both'; }
                border = 'solid #222 1px';
                width = '20px';
                height = '20px';
                margin = '2px';
                float = 'left';
            }   
        }
        
        // Menampilkan Pesan
        var mess = d.getElementsByTagName('div');
        var i = 0, j = 0;
        var timer = setInterval(function () {
            feedin(mess[str[i][j]], 25);
            mess[str[i][j]].style.background = '#F39';
            j++;
            if (i === str.length) { clearInterval(timer); }
            if (j === str[i].length) { i++; j = 0; }
        }, 50);
    };
} else {
    alert("What the hell, let's try again");
    location.reload();
}
