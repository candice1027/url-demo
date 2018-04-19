
var keyList = [
    ['Q','W','E','R','T','Y','U','I','O','P'],
    ['A','S','D','F','G','H','J','K','L'],
    ['Z','X','C','V','B','N','M'],
]
var ulrAddress ={
    'Q':'qq.com',
    'W':'',
    'E': 'ele.me',
    'R': '',
    'T': 'mp.toutiao.com',
    'Y': 'youtube.com',
    'U': 'cn.udacity.com',
    'I': 'iqiyi.com',
    'O': 'Opera.com',
    'P': '',
    'A': 'alpha.wallhaven.cc',
    'S': '',
    'D': '',
    'F': '',
    'G': 'google.com',
    'H': '',
    'J': 'juejin.im',
    'K': '',
    'L': '',
    'Z': 'zhihu.com',
    'X': '',
    'C': '',
    'V': 'v.qq.com',
    'B': 'baidu.com',
    'N': '',
    'M': 'meituan.com'
}
//创建标签
function createTag(tagName) {
    return document.createElement(tagName);
}
addDiv()
//添加键盘按钮
function addDiv() {
    var main = document.getElementById('main');
    for (var i = 0; i < keyList.length; i++) {
        var div = createTag('div');
        for (var j = 0; j < keyList[i].length; j++) {
            var currLetter = keyList[i][j],
                kbd = createTag('kbd'),
                icon = getIcon(currLetter),
                edit = getEdit();
                
                kbd.textContent = currLetter;
                kbd.appendChild(icon);
                kbd.appendChild(edit);
            div.appendChild(kbd);
            div.className = "row";
            
        }
        main.appendChild(div); 
    }       
}

//获取icon 
function getIcon(letter) {
    var domain = ulrAddress[letter];
    var imgIcon = createTag('img');
    if (domain) {
        imgIcon.src = 'http://'+ domain+'/favicon.ico';
    } else {
        imgIcon.src = '';
    }
    imgIcon.onerror = function() {
        imgIcon.src = '';
    }
    return imgIcon;
}

//编辑按钮
function getEdit(){
    var editBtn = createTag('button');
        editBtn.textContent = '';
    return editBtn;
}

//监听用户输入
document.onkeypress = function(e) {
    var keyValue = e.key.toUpperCase(),
        url = ulrAddress[keyValue];
    window.open('http://'+url)
}