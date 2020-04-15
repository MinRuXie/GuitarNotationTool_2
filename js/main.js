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

    let notes_array_3 = [
        ['5', '5', '5', '5', '5', '5', '5', '5', '6', '6', '6', '6', '6', '6', '6', '6', '6', '6', '6', '6', '7', '7'], // 第一弦
        ['4', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '6', '6', '6', '6', '6', '6', '6', '6', '6'], // 第二弦
        ['4', '4', '4', '4', '4', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '6', '6', '6', '6', '6'], // 第三弦
        ['4', '4', '4', '4', '4', '4', '4', '4', '4' ,'4', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5'], // 第四弦
        ['3', '3', '3', '4', '4', '4', '4', '4', '4', '4', '4', '4', '4', '4', '4', '5', '5', '5', '5', '5', '5', '5'], // 第五弦
        ['3', '3', '3', '3', '3', '3', '3', '3', '4', '4', '4', '4', '4', '4', '4', '4', '4', '4', '4', '4', '5', '5']  // 第六弦
    ]

    let $note_panel = $('.note-panel');

    // 軌道
    let line_html = `<div class="line"></div>`;

    // 格子組
    let note_group_html = `<div class="note-wrap"></div>`;

    // 選單
    let menu_html = `<div class="grid"></div><div class="menu"><select name="note"></select><div class="ok">V</div><div class="cancel">X</div></div>`;
    
    /* 建立軌道 */
    function addNoteLine() {
        // 面版加入軌道
        $note_panel.append(line_html);
        let $line = $('.line').last();

        // 軌道加入音符組
        for (let i=0 ; i < 20 ; i++) {
            $line.append(note_group_html);
            let $cur_note_wrap = $line.find('.note-wrap').last();

            // 音符組加入內容
            for (let j=0 ; j < 6 ; j++) {
                if (j < 3) {
                    $cur_note_wrap.append(`<div class="chord treble">${menu_html}</div>`);
                } else {
                    $cur_note_wrap.append(`<div class="chord bass">${menu_html}</div>`);
                }

                // 選單中加入選項
                let $cur_select = $cur_note_wrap.find('.menu select').last();
                $cur_select.append('<option data-chord="none" value="none">none</option>');
                for (let k=0 ; k < 22 ; k++) {
                    $cur_select.append(`<option data-chord="${j+1}" data-note="${notes_array_2[j][k]}" class="note-${notes_array_3[j][k]}" value="${notes_array[j][k]}">${k}</option>`);
                }
            }
        }
    }

    /* 初始化 */
    addNoteLine(); // 建立軌道


    /* Event Binding */
    $('.grid').each(function(index){
        /* grid */
        $(this).on('click', function(event){
            // open the menu
            $('.menu').removeClass('active');
            $(this).siblings('.menu').addClass('active');
        });

        /* menu - ok */
        $(this).siblings('.menu').find('.ok').on('click', function(event){
            // closed the menu
            $(this).parents('.menu').removeClass('active');
        });

        /* menu - cancel */
        $(this).siblings('.menu').find('.cancel').on('click', function(event){
            // closed the menu
            $(this).parents('.menu').removeClass('active');
        });
    });
});