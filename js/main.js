// 等 HTML 載入完成
$(function(){
    
    // 載入動畫 1 秒
    setTimeout(function(){
        $('.loading').fadeOut();
    }, 1000);

    // 音符 (空弦 + 21 格)
    let notes_array = [
        ['3', '4', '#4/b5', '5', '#5/b6', '6', '#6/b7', '7', '1', '#1/b2', '2', '#2/b3', '3', '4', '#4/b5', '5', '#5/b6', '6', '#6/b7', '7', '1', '#1/b2'], // 第一弦
        ['7', '1', '#1/b2', '2', '#2/b3', '3', '4', '#4/b5', '5', '#5/b6', '6', '#6/b7', '7', '1', '#1/b2', '2', '#2/b3', '3', '4', '#4/b5', '5', '#5/b6'], // 第二弦
        ['5', '#5/b6', '6', '#6/b7', '7', '1', '#1/b2', '2', '#2/b3', '3', '4', '#4/b5', '5', '#5/b6', '6', '#6/b7', '7', '1', '#1/b2', '2', '#2/b3', '3'], // 第三弦
        ['2', '#2/b3', '3', '4', '#4/b5', '5', '#5/b6', '6', '#6/b7' ,'7', '1', '#1/b2', '2', '#2/b3', '3', '4', '#4/b5', '5', '#5/b6', '6', '#6/b7', '7'], // 第四弦
        ['6', '#6/b7', '7', '1', '#1/b2', '2', '#2/b3', '3', '4', '#4/b5', '5', '#5/b6', '6', '#6/b7', '7', '1', '#1/b2', '2', '#2/b3', '3', '4', '#4/b5'], // 第五弦
        ['3', '4', '#4/b5', '5', '#5/b6', '6', '#6/b7', '7', '1', '#1/b2', '2', '#2/b3', '3', '4', '#4/b5', '5', '#5/b6', '6', '#6/b7', '7', '1', '#1/b2']  // 第六弦
    ]

    //  C  D  E  F  G  A  B
    // do re mi fa sol la si
    //  1  2  3  4  5  6  7
    let notes_array_2 = [
        ['E5', 'F5', '#F5/bG5', 'G5', '#G5/bA5', 'A5', '#A5/bB5', 'B5', 'C6', '#C6/bD6', 'D6', '#D6/bE6', 'E6', 'F6', '#F6/bG6', 'G6', '#G6/bA6', 'A6', '#A6/bB6', 'B6', 'C7', '#C7/bD7'], // 第一弦
        ['B4', 'C5', '#C5/bD5', 'D5', '#D5/bE5', 'E5', 'F5', '#F5/bG5', 'G5', '#G5/bA5', 'A5', '#A5/bB5', 'B5', 'C6', '#C6/bD6', 'D6', '#D6/bE6', 'E6', 'F6', '#F6/bG6', 'G6', '#G6/bA6'], // 第二弦
        ['G4', '#G4/bA4', 'A4', '#A4/bB4', 'B4', 'C5', '#C5/bD5', 'D5', '#D5/bE5', 'E5', 'F5', '#F54/bG5', 'G5', '#G5/bA5', 'A5', '#A5/bB5', 'B5', 'C6', '#C6/bD6', 'D6', '#D6/bE6', 'E6'], // 第三弦
        ['D4', '#D4/bE4', 'E4', 'F4', '#F4/bG4', 'G4', '#G4/bA4', 'A4', '#A4/bB4' ,'B4', 'C5', '#C5/bD5', 'D5', '#D5/bE5', 'E5', 'F5', '#F5/bG5', 'G5', '#G5/bA5', 'A5', '#A5/bB5', 'B5'], // 第四弦
        ['A3', '#A3/bB3', 'B3', 'C4', '#C4/bD4', 'D4', '#D4/bE4', 'E4', 'F4', '#F4/bG4', 'G4', '#G4/bA4', 'A4', '#A4/bB4', 'B4', 'C5', '#C5/bD5', 'D5', '#D5/bE5', 'E5', 'F5', '#F5/bG5'], // 第五弦
        ['E3', 'F3', '#F3/bG3', 'G3', '#G3/bA3', 'A3', '#A3/bB3', 'B3', 'C4', '#C4/bD4', 'D4', '#D4/bE4', 'E4', 'F4', '#F4/bG4', 'G4', '#G4/bA4', 'A4', '#A4/bB4', 'B4', 'C5', '#C5/bD5']  // 第六弦
    ]

    // color
    let notes_array_3 = [
        ['5', '5', '5', '5', '5', '5', '5', '5', '6', '6', '6', '6', '6', '6', '6', '6', '6', '6', '6', '6', '7', '7'], // 第一弦
        ['4', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '6', '6', '6', '6', '6', '6', '6', '6', '6'], // 第二弦
        ['4', '4', '4', '4', '4', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '6', '6', '6', '6', '6'], // 第三弦
        ['4', '4', '4', '4', '4', '4', '4', '4', '4' ,'4', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5'], // 第四弦
        ['3', '3', '3', '4', '4', '4', '4', '4', '4', '4', '4', '4', '4', '4', '4', '5', '5', '5', '5', '5', '5', '5'], // 第五弦
        ['3', '3', '3', '3', '3', '3', '3', '3', '4', '4', '4', '4', '4', '4', '4', '4', '4', '4', '4', '4', '5', '5']  // 第六弦
    ]

    let $note_panel = $('.note-panel');
    let $add_line_btn = $('.add');

    /* build note line */
    function addNoteLine() {
        // add line to panel
        $note_panel.append(`<div class="line"><div class="button del">刪除</div></div>`);
        let $line = $('.line').last();

        // add note groups to line
        for (let i=0 ; i < 20 ; i++) {
            $line.append(`<div class="note-wrap"></div>`);
            let $cur_note_wrap = $line.find('.note-wrap').last();

            // add contents to note group
            for (let j=0 ; j < 6 ; j++) {
                let class_name = (j < 3) ? 'treble' : 'bass'; // 高音弦:低音弦
                let content_html = `<div data-chord="${j+1}" class="chord ${class_name}"><div class="grid"></div><div class="menu">第${j+1}弦<select name="note"></select><div class="ok">V</div><div class="cancel">X</div></div></div>`;
                $cur_note_wrap.append(content_html);

                // add options to select
                let $cur_select = $cur_note_wrap.find('.menu select').last();
                $cur_select.append('<option value="none">無音符</option>');
                for (let k=0 ; k < 22 ; k++) {
                    let text = (k != 0) ? `第${k}格` : '空弦';
                    let option_html = `<option class="note-${notes_array_3[j][k]}" value="${k}">${text}</option>`;
                    $cur_select.append(option_html);
                }
            }
        }

        /* Event Binding */
        $('.grid').each(function(index){
            /* grid */
            $(this).on('click', function(event){
                // open the menu
                $('.menu').removeClass('active');
                $(this).siblings('.menu').addClass('active');
                
                // add grid selected style
                $('.grid').removeClass('selected');
                $(this).addClass('selected');
            });

            /* menu - ok */
            $(this).siblings('.menu').find('.ok').on('click', function(event){
                // get option's value of select
                let grid = $(this).siblings('select').val();
                
                // remove note
                $(this).parents('.menu').siblings('.grid').find('.note').remove();

                // check
                if (grid != "none") {
                    let chord = $(this).parents('.chord').attr('data-chord');
                    let note_s = notes_array[chord - 1][grid];
                    let note_t = notes_array_2[chord - 1][grid];
                    let note_color = notes_array_3[chord - 1][grid];

                    $(this).parents('.menu').siblings('.grid').append(`<span class="note note-${note_color}" data-note="${note_t}">${note_s}</span>`);
                }
                
                // closed the menu
                $(this).parents('.menu').removeClass('active');

                // remove grid selected style
                $(this).parents('.menu').siblings('.grid').removeClass('selected');
            });

            /* menu - cancel */
            $(this).siblings('.menu').find('.cancel').on('click', function(event){
                // closed the menu
                $(this).parents('.menu').removeClass('active');

                // remove grid selected style
                $(this).parents('.menu').siblings('.grid').removeClass('selected');
            });
        });

        /* del line btn */
        $line.find('.del').on('click', function(event){
            // check
            if ($note_panel.find('.line').length > 1) {
                $(this).parents('.line').remove();
            }
        });
    }

    /* modify song name */
    $('.title').on('dblclick', function(event){
        var pre_name = $('.title').html(); // 預設值為上次輸入的歌名
        var decodeHtml = htmlDecode(pre_name); //用浏览器内部转换器实现html解码
        var song_name = prompt('請輸入歌名：', decodeHtml);
        
        if(song_name == null){
            song_name = decodeHtml;
        }
        $('.title').text(song_name); // 顯示新歌名
    });

    /* initialization */
    addNoteLine(); // build line

    /* event binding: add line btn */
    $add_line_btn.on('click', function(event){
        addNoteLine(); // build line
    });

    //---------------------------------------------
    // 用浏览器内部转换器实现html解码
    // 來源: https://www.cnblogs.com/xdp-gacl/p/3722642.html
    //---------------------------------------------
    function htmlDecode(text){
        //1.首先动态创建一个容器标签元素，如DIV
        var temp = document.createElement("div");
        //2.然后将要转换的字符串设置为这个元素的innerHTML(ie，火狐，google都支持)
        temp.innerHTML = text;
        //3.最后返回这个元素的innerText(ie支持)或者textContent(火狐，google支持)，即得到经过HTML解码的字符串了。
        var output = temp.innerText || temp.textContent;
        temp = null;
        return output;
    }
});