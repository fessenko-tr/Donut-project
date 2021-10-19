function tab(but_tab, hidden_block_tab, icon_tab, text_block, before_text, after_text) {
    but_tab.addEventListener("click", function() {
        if(hidden_block_tab.classList.contains('hidden_block')) {
            hidden_block_tab.classList.remove('hidden_block');
            hidden_block_tab.classList.add('visible_block');

            if(icon_tab) {
                icon_tab.classList.remove('fa-chevron-down');
                icon_tab.classList.add('fa-chevron-up');
            }
            /*Делаем проверку на заполненность переменной*/
            if(text_block) {
                /*Переписываем текст внутри элемента*/
                text_block.innerHTML= after_text;
            }
        }
        else if(hidden_block_tab.classList.contains('visible_block')) {
            hidden_block_tab.classList.remove('visible_block');
            hidden_block_tab.classList.add('hidden_block');

            if(icon_tab) {
                icon_tab.classList.remove('fa-chevron-up');
                icon_tab.classList.add('fa-chevron-down');
            }
            if(text_block) {
                text_block.innerHTML= before_text;
            }
        }
    }); 
}

var download_more = document.querySelector('.container_for_tab .read-more-btn');
var hidden_list = document.querySelector('.container_for_tab .tab_content');
var icon_more = document.querySelector('.container_for_tab .icon_more');
/*добавим переменную с элементом в котором нужно менять текст*/
var more_text = document.querySelector('.container_for_tab .text_more');

tab(download_more, hidden_list, icon_more, more_text, "Read more", "Less");