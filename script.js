function toggleMode(){
    const html = document.documentElement;
    
    html.classList.toggle('light')




    /* é a mesma coisa
    if(html.classList.contains('light')){
        html.classList.remove('light')
    }else{
        html.classList.add('light')
    }*/
}