
export function hasClass(ele,className) {
  var reg = new RegExp('(^|\\s)' + className + '(\\s|$)');
  return reg.test(ele.className);
}

export function addClass(ele,className) {
  if(!hasClass(ele,className)){
    var classNames = ele.className.split(' ');
    classNames.push(className);
    classNames = classNames.join(' ');
    ele.className = classNames;
  }
}
