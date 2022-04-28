/**
 * Created by victor-one on 2022.04.27
 */

function getElem(id) {
    return document.getElementById(id);
}

/**
 * 功能：给定元素查找他的第一个元素子节点，并返回
 * @param ele
 * @returns {Element|*|Node}
 */

function getFirstNode(ele) {
    return(ele.firstElementChild || ele.firstChild);
}

/**
 * 功能：给定元素查找他的最后一个元素子节点，并返回
 * @param ele
 * @returns {Element|*|Node}
 */

function getLastNode(ele) {
    return(ele.lastElementChild || ele.lastChile);
}

/**
 * 功能：给定元素查找他的下一个元素兄弟节点，并返回
 * @param ele
 * @returns {Element|*|Node}
 */

function getNextNode(ele) {
    return (ele.nextElementSibling || ele.nextSibling);
}

/**
 * 功能：给定元素查找他的上一个兄弟元素节点，并返回
 * @param ele
 * @returns {Element|*|Node}
 */

function getPrevNode(ele) {
    return (ele.previousElementSibling || ele.previousSibling);
}

/**
 * 功能：给定元素和索引值查找指定索引值的兄弟元素节点，并返回
 * @param ele 元素节点
 * @param index 索引值
 * @returns {*|HTMLElement}
 */

function getElemOfIndex(ele, index) {
    return (ele.parentNode.children[index]);
}

/**
 * 功能：给定元素查找他的所有兄弟元素，并返回数组
 * @param ele
 * @returns {Array}
 */

function getAllSiblings(ele) {
    var newArr = [];
    var arr = ele.parentNode.children;
    for (var i = 0;i < arr.length;i++) {
        if (arr[i] != ele) {
            newArr.push(arr[i]);
        }
    }
    return newArr;
}

