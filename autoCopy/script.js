window.isMobile = !1;
if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
    window.isMobile = !0
}
window.isiOS = !1;
if (/iPhone|iPad|iPod/i.test(navigator.userAgent)) {
    window.isiOS = !0
}
window.isiOSVersion = '';
if (window.isiOS) {
    var version = (navigator.appVersion).match(/OS (\d+)_(\d+)_?(\d+)?/);
    if (version !== null) {
        window.isiOSVersion = [parseInt(version[1], 10), parseInt(version[2], 10), parseInt(version[3] || 0, 10)]
    }
}
window.isSafari = !1;
if (/^((?!chrome|android).)*safari/i.test(navigator.userAgent)) {
    window.isSafari = !0
}
window.isSafariVersion = '';
if (window.isSafari) {
    var version = (navigator.appVersion).match(/Version\/(\d+)\.(\d+)\.?(\d+)? Safari/);
    if (version !== null) {
        window.isSafariVersion = [parseInt(version[1], 10), parseInt(version[2], 10), parseInt(version[3] || 0, 10)]
    }
}
function t_throttle(fn, threshhold, scope) {
    var last;
    var deferTimer;
    threshhold || (threshhold = 250);
    return function() {
        var context = scope || this;
        var now = +new Date();
        var args = arguments;
        if (last && now < last + threshhold) {
            clearTimeout(deferTimer);
            deferTimer = setTimeout(function() {
                last = now;
                fn.apply(context, args)
            }, threshhold)
        } else {
            last = now;
            fn.apply(context, args)
        }
    }
}
function t228__init(recid) {
    var rec = document.getElementById('rec' + recid);
    if (!rec)
        return;
    var menuBlock = rec.querySelector('.t228');
    var mobileMenu = rec.querySelector('.t228__mobile');
    var menuSubLinkItems = rec.querySelectorAll('.t-menusub__link-item');
    var rightBtn = rec.querySelector('.t228__right_buttons_but .t-btn');
    var mobileMenuPosition = mobileMenu ? mobileMenu.style.position || window.getComputedStyle(mobileMenu).position : '';
    var mobileMenuDisplay = mobileMenu ? mobileMenu.style.display || window.getComputedStyle(mobileMenu).display : '';
    var isFixedMobileMenu = mobileMenuPosition === 'fixed' && mobileMenuDisplay === 'block';
    var overflowEvent = document.createEvent('Event');
    var noOverflowEvent = document.createEvent('Event');
    overflowEvent.initEvent('t228_overflow', !0, !0);
    noOverflowEvent.initEvent('t228_nooverflow', !0, !0);
    if (menuBlock) {
        menuBlock.addEventListener('t228_overflow', function() {
            t228_checkOverflow(recid)
        });
        menuBlock.addEventListener('t228_nooverflow', function() {
            t228_checkNoOverflow(recid)
        })
    }
    rec.addEventListener('click', function(e) {
        var targetLink = e.target.closest('.t-menusub__target-link');
        if (targetLink && window.isMobile && window.innerWidth <= 980) {
            if (targetLink.classList.contains('t-menusub__target-link_active')) {
                if (menuBlock)
                    menuBlock.dispatchEvent(overflowEvent)
            } else {
                if (menuBlock)
                    menuBlock.dispatchEvent(noOverflowEvent)
            }
        }
        var currentLink = e.target.closest('.t-menu__link-item:not(.tooltipstered):not(.t-menusub__target-link):not(.t794__tm-link):not(.t966__tm-link):not(.t978__tm-link):not(.t978__menu-link)');
        if (currentLink && mobileMenu && isFixedMobileMenu)
            mobileMenu.click()
    });
    Array.prototype.forEach.call(menuSubLinkItems, function(linkItem) {
        linkItem.addEventListener('click', function() {
            if (mobileMenu && isFixedMobileMenu)
                mobileMenu.click()
        })
    });
    if (rightBtn) {
        rightBtn.addEventListener('click', function() {
            if (mobileMenu && isFixedMobileMenu)
                mobileMenu.click()
        })
    }
    if (menuBlock) {
        menuBlock.addEventListener('showME601a', function() {
            var menuLinks = rec.querySelectorAll('.t966__menu-link');
            Array.prototype.forEach.call(menuLinks, function(menuLink) {
                menuLink.addEventListener('click', function() {
                    if (mobileMenu && isFixedMobileMenu)
                        mobileMenu.click()
                })
            })
        })
    }
}
function t228_checkOverflow(recid) {
    var rec = document.getElementById('rec' + recid);
    var menu = rec ? rec.querySelector('.t228') : null;
    if (!menu)
        return;
    var mobileContainer = document.querySelector('.t228__mobile_container');
    var mobileContainerHeight = t228_getFullHeight(mobileContainer);
    var windowHeight = document.documentElement.clientHeight;
    var menuPosition = menu.style.position || window.getComputedStyle(menu).position;
    if (menuPosition === 'fixed') {
        menu.classList.add('t228__overflow');
        menu.style.setProperty('height', (windowHeight - mobileContainerHeight) + 'px', 'important')
    }
}
function t228_checkNoOverflow(recid) {
    var rec = document.getElementById('rec' + recid);
    if (!rec)
        return !1;
    var menu = rec.querySelector('.t228');
    var menuPosition = menu ? menu.style.position || window.getComputedStyle(menu).position : '';
    if (menuPosition === 'fixed') {
        if (menu)
            menu.classList.remove('t228__overflow');
        if (menu)
            menu.style.height = 'auto'
    }
}
function t228_setWidth(recid) {
    var rec = document.getElementById('rec' + recid);
    if (!rec)
        return;
    var menuCenterSideList = rec.querySelectorAll('.t228__centerside');
    Array.prototype.forEach.call(menuCenterSideList, function(menuCenterSide) {
        menuCenterSide.classList.remove('t228__centerside_hidden')
    });
    if (window.innerWidth <= 980)
        return;
    var menuBlocks = rec.querySelectorAll('.t228');
    Array.prototype.forEach.call(menuBlocks, function(menu) {
        var maxWidth;
        var centerWidth = 0;
        var paddingWidth = 40;
        var leftSide = menu.querySelector('.t228__leftside');
        var rightSide = menu.querySelector('.t228__rightside');
        var menuList = menu.querySelector('.t228__list');
        var mainContainer = menu.querySelector('.t228__maincontainer');
        var leftContainer = menu.querySelector('.t228__leftcontainer');
        var rightContainer = menu.querySelector('.t228__rightcontainer');
        var centerContainer = menu.querySelector('.t228__centercontainer');
        var centerContainerLi = centerContainer ? centerContainer.querySelectorAll('li') : [];
        var leftContainerWidth = t228_getFullWidth(leftContainer);
        var rightContainerWidth = t228_getFullWidth(rightContainer);
        var mainContainerWidth = mainContainer ? mainContainer.offsetWidth : 0;
        var dataAlign = menu.getAttribute('data-menu-items-align');
        var isDataAlignCenter = dataAlign === 'center' || dataAlign === null;
        maxWidth = leftContainerWidth >= rightContainerWidth ? leftContainerWidth : rightContainerWidth;
        maxWidth = Math.ceil(maxWidth);
        Array.prototype.forEach.call(centerContainerLi, function(li) {
            centerWidth += t228_getFullWidth(li)
        });
        if (mainContainerWidth - (maxWidth * 2 + paddingWidth * 2) > centerWidth + 20) {
            if (isDataAlignCenter) {
                if (leftSide)
                    leftSide.style.minWidth = maxWidth + 'px';
                if (rightSide)
                    rightSide.style.minWidth = maxWidth + 'px'
            }
        } else {
            if (leftSide)
                leftSide.style.minWidth = maxWidth + '';
            if (rightSide)
                rightSide.style.minWidth = maxWidth + ''
        }
        if (menuList && menuList.classList.contains('t228__list_hidden'))
            menuList.classList.remove('t228__list_hidden')
    })
}
function t228_getFullWidth(el) {
    if (!el)
        return 0;
    var marginLeft = el.style.marginLeft || window.getComputedStyle(el).marginLeft;
    var marginRight = el.style.marginRight || window.getComputedStyle(el).marginRight;
    marginLeft = parseInt(marginLeft, 10) || 0;
    marginRight = parseInt(marginRight, 10) || 0;
    return el.offsetWidth + marginLeft + marginRight
}
function t228_getFullHeight(el) {
    if (!el)
        return 0;
    var marginTop = el.style.marginTop || window.getComputedStyle(el).marginTop;
    var marginBottom = el.style.marginBottom || window.getComputedStyle(el).marginBottom;
    marginTop = parseInt(marginTop, 10) || 0;
    marginBottom = parseInt(marginBottom, 10) || 0;
    return el.offsetHeight + marginTop + marginBottom
}
function t923_init(recId) {
    var rec = document.getElementById('rec' + recId);
    if (!rec)
        return;
    var container = rec.querySelector('.t923');
    if (!container)
        return;
    t923_unifyHeights(recId);
    window.addEventListener('resize', t_throttle(function() {
        t923_unifyHeights(recId)
    }));
    container.addEventListener('displayChanged', function() {
        t923_unifyHeights(recId)
    });
    window.addEventListener('load', function() {
        t923_unifyHeights(recId)
    });
    t_onFuncLoad('t_card__moveClickOnCard', function() {
        t_card__moveClickOnCard(recId)
    });
    t_onFuncLoad('t_card__addFocusOnTab', function() {
        t_card__addFocusOnTab(recId)
    })
}
function t923_unifyHeights(recId) {
    var rec = document.getElementById('rec' + recId);
    if (!rec)
        return;
    var container = rec.querySelector('.t923');
    if (!container)
        return;
    var cols = rec.querySelectorAll('.t923__col');
    var img = container.querySelector('.t923__imgwrapper');
    var imgHeight = img ? img.offsetHeight : 0;
    var maxContentHeight = 0;
    for (var i = 0; i < cols.length; i++) {
        var col = cols[i];
        var colWrapper = col.closest('.t-card__col');
        var isInactive = !1;
        if (colWrapper.classList.contains('t-slds__item-innactive')) {
            colWrapper.classList.remove('t-slds__item-innactive');
            isInactive = !0
        }
        var colText = col.querySelector('.t923__textwrapper');
        var colBtn = col.querySelectorAll('.t-card__btn-wrapper, .t-card__btntext-wrapper')[0];
        var colContentHeight = colText.offsetHeight + (colBtn ? colBtn.offsetHeight : 0);
        if (isInactive) {
            colWrapper.classList.add('t-slds__item-innactive');
            isInactive = !1
        }
        if (colContentHeight > maxContentHeight)
            maxContentHeight = colContentHeight
    }
    for (var i = 0; i < cols.length; i++) {
        cols[i].querySelector('.t923__content').style.height = 0
    }
    for (var i = 0; i < cols.length; i++) {
        var image = cols[i].querySelector('.t923__imgwrapper');
        var contentHeight = image ? maxContentHeight : maxContentHeight + imgHeight;
        cols[i].querySelector('.t923__content').style.height = contentHeight + 'px'
    }
    t_onFuncLoad('t_slds_updateSlider', function() {
        t_slds_updateSlider(recId)
    })
}
function t390_initPopup(recId) {
    var rec = document.getElementById('rec' + recId);
    if (!rec)
        return;
    var container = rec.querySelector('.t390');
    if (!container)
        return;
    rec.setAttribute('data-animationappear', 'off');
    rec.style.opacity = 1;
    var popup = rec.querySelector('.t-popup');
    var popupTooltipHook = popup.getAttribute('data-tooltip-hook');
    var analitics = popup.getAttribute('data-track-popup');
    var popupCloseBtn = popup.querySelector('.t-popup__close');
    var hrefs = rec.querySelectorAll('a[href*="#"]');
    var escapeEvent = t390_escClosePopup.bind(this, recId);
    if (popupTooltipHook) {
        t_onFuncLoad('t_popup__addAttributesForAccessibility', function() {
            t_popup__addAttributesForAccessibility(popupTooltipHook)
        });
        document.addEventListener('click', function(event) {
            var target = event.target;
            var href = target.closest('a[href="' + popupTooltipHook + '"]') ? target : !1;
            if (!href)
                return;
            event.preventDefault();
            t390_showPopup(recId, escapeEvent);
            t_onFuncLoad('t_popup__resizePopup', function() {
                t_popup__resizePopup(recId)
            });
            t390__lazyLoad();
            if (analitics && window.Tilda) {
                Tilda.sendEventToStatistics(analitics, popupTooltipHook)
            }
        });
        t_onFuncLoad('t_popup__addClassOnTriggerButton', function() {
            t_popup__addClassOnTriggerButton(document, popupTooltipHook)
        })
    }
    popup.addEventListener('scroll', t_throttle(function() {
        t390__lazyLoad()
    }));
    popup.addEventListener('click', function(event) {
        if (event.target === this)
            t390_closePopup(recId, escapeEvent)
    });
    popupCloseBtn.addEventListener('click', function() {
        t390_closePopup(recId, escapeEvent)
    });
    for (var i = 0; i < hrefs.length; i++) {
        hrefs[i].addEventListener('click', function() {
            var url = this.getAttribute('href');
            if (!url || url.substring(0, 7) != '#price:') {
                t390_closePopup(recId, escapeEvent);
                if (!url || url.substring(0, 7) == '#popup:') {
                    setTimeout(function() {
                        if (typeof t_triggerEvent === 'function')
                            t_triggerEvent(document.body, 'popupShowed');
                        document.body.classList.add('t-body_popupshowed')
                    }, 300)
                }
            }
        })
    }
    var curPath = window.location.pathname;
    var curFullPath = window.location.origin + curPath;
    var isAndroid = /(android)/i.test(navigator.userAgent);
    if (isAndroid) {
        var selects = 'a[href^="#"]:not([href="#"]):not([href^="#price"]):not([href^="#popup"]):not([href^="#prodpopup"]):not([href^="#order"]):not([href^="#!"]),' + 'a[href^="' + curPath + '#"]:not([href*="#!/tproduct/"]):not([href*="#!/tab/"]):not([href*="#popup"]),' + 'a[href^="' + curFullPath + '#"]:not([href*="#!/tproduct/"]):not([href*="#!/tab/"]):not([href*="#popup"])';
        var selectors = rec.querySelectorAll(selects);
        for (var i = 0; i < selectors.length; i++) {
            selectors[i].addEventListener('click', function(event) {
                var hash = this.hash.trim();
                if (window.location.hash) {
                    setTimeout(function() {
                        window.location.href = hash
                    }, 50)
                }
            })
        }
    }
    function t390_escClosePopup(recId) {
        if (arguments[1].key === 'Escape')
            t390_closePopup(recId, escapeEvent)
    }
}
function t390_showPopup(recId, escapeEvent) {
    var rec = document.getElementById('rec' + recId);
    if (!rec)
        return;
    var container = rec.querySelector('.t390');
    if (!container)
        return;
    var windowWidth = window.innerWidth;
    var screenMin = rec.getAttribute('data-screen-min');
    var screenMax = rec.getAttribute('data-screen-max');
    if (screenMin && windowWidth < parseInt(screenMin, 10))
        return;
    if (screenMax && windowWidth > parseInt(screenMax, 10))
        return;
    var popup = rec.querySelector('.t-popup');
    var documentBody = document.body;
    t_onFuncLoad('t_popup__showPopup', function() {
        t_popup__showPopup(popup)
    });
    if (typeof t_triggerEvent === 'function')
        t_triggerEvent(document.body, 'popupShowed');
    documentBody.classList.add('t-body_popupshowed');
    documentBody.classList.add('t390__body_popupshowed');
    document.addEventListener('keydown', escapeEvent)
}
function t390_closePopup(recId, escapeEvent) {
    var rec = document.getElementById('rec' + recId);
    var popup = rec.querySelector('.t-popup');
    var popupActive = document.querySelector('.t-popup.t-popup_show');
    if (popup === popupActive) {
        if (typeof t_triggerEvent === 'function')
            t_triggerEvent(document.body, 'popupHidden');
        document.body.classList.remove('t-body_popupshowed');
        document.body.classList.remove('t390__body_popupshowed')
    }
    popup.classList.remove('t-popup_show');
    t_onFuncLoad('t_popup__addFocusOnTriggerButton', function() {
        t_popup__addFocusOnTriggerButton()
    });
    setTimeout(function() {
        var popupHide = document.querySelectorAll('.t-popup:not(.t-popup_show)');
        for (var i = 0; i < popupHide.length; i++) {
            popupHide[i].style.display = 'none'
        }
    }, 300);
    document.removeEventListener('keydown', escapeEvent)
}
function t390_sendPopupEventToStatistics(popupName) {
    var virtPage = '/tilda/popup/';
    var virtTitle = 'Popup: ';
    if (popupName.substring(0, 7) == '#popup:') {
        popupName = popupName.substring(7)
    }
    virtPage += popupName;
    virtTitle += popupName;
    if (window.Tilda && typeof Tilda.sendEventToStatistics == 'function') {
        Tilda.sendEventToStatistics(virtPage, virtTitle, '', 0)
    } else {
        if (ga) {
            if (window.mainTracker != 'tilda') {
                ga('send', {
                    hitType: 'pageview',
                    page: virtPage,
                    title: virtTitle
                })
            }
        }
        if (window.mainMetrika && window[window.mainMetrika]) {
            window[window.mainMetrika].hit(virtPage, {
                title: virtTitle,
                referer: window.location.href
            })
        }
    }
}
function t390__lazyLoad() {
    var allRecords = document.getElementById('allrecords');
    if (window.lazy === 'y' || (allRecords && allRecords.getAttribute('data-tilda-lazy') === 'yes')) {
        t_onFuncLoad('t_lazyload_update', function() {
            t_lazyload_update()
        })
    }
}
function t1014_initPopup(recId) {
    var rec = document.getElementById('rec' + recId);
    if (!rec)
        return;
    var container = rec.querySelector('.t1014');
    if (!container)
        return;
    rec.setAttribute('data-animationappear', 'off');
    rec.setAttribute('data-popup-subscribe-inited', 'y');
    rec.style.opacity = 1;
    var documentBody = document.body;
    var hrefs = rec.querySelectorAll('a[href*="#"]');
    var popup = rec.querySelector('.t-popup');
    var popupCloseBtn = popup.querySelector('.t-popup__close');
    var popupTooltipHook = popup.getAttribute('data-tooltip-hook');
    var analitics = popup.getAttribute('data-track-popup');
    if (popupTooltipHook) {
        t_onFuncLoad('t_popup__addAttributesForAccessibility', function() {
            t_popup__addAttributesForAccessibility(popupTooltipHook)
        });
        document.addEventListener('click', function(event) {
            var target = event.target;
            var href = target.closest('a[href="' + popupTooltipHook + '"]') ? target : !1;
            if (!href)
                return;
            event.preventDefault();
            t1014_createPopup(recId);
            t_onFuncLoad('t_popup__resizePopup', function() {
                t_popup__resizePopup(recId)
            });
            t1014__lazyLoad();
            if (analitics && window.Tilda) {
                Tilda.sendEventToStatistics(analitics, popupTooltipHook)
            }
        });
        t_onFuncLoad('t_popup__addClassOnTriggerButton', function() {
            t_popup__addClassOnTriggerButton(document, popupTooltipHook)
        })
    }
    popup.addEventListener('scroll', t_throttle(function() {
        t1014__lazyLoad()
    }));
    popup.addEventListener('click', function(event) {
        if (event.target === this)
            t1014_closePopup()
    });
    popupCloseBtn.addEventListener('click', t1014_closePopup);
    for (var i = 0; i < hrefs.length; i++) {
        hrefs[i].addEventListener('click', function() {
            var url = this.getAttribute('href');
            if (!url || (url.substring(0, 7) != '#price:' && url.substring(0, 7) != '#order:')) {
                t1014_closePopup();
                if (!url || url.substring(0, 7) == '#popup:') {
                    setTimeout(function() {
                        if (typeof t_triggerEvent === 'function')
                            t_triggerEvent(document.body, 'popupShowed');
                        documentBody.classList.add('t-body_popupshowed')
                    }, 300)
                }
            }
        })
    }
}
function t1014_lockScroll() {
    var documentBody = document.body;
    if (!documentBody.classList.contains('t-body_scroll-locked')) {
        var bodyScrollTop = typeof window.pageYOffset !== 'undefined' ? window.pageYOffset : (document.documentElement || documentBody.parentNode || documentBody).scrollTop;
        documentBody.classList.add('t-body_scroll-locked');
        documentBody.style.top = '-' + bodyScrollTop + 'px';
        documentBody.setAttribute('data-popup-scrolltop', bodyScrollTop)
    }
}
function t1014_unlockScroll() {
    var documentBody = document.body;
    if (documentBody.classList.contains('t-body_scroll-locked')) {
        var bodyScrollTop = documentBody.getAttribute('data-popup-scrolltop');
        documentBody.classList.remove('t-body_scroll-locked');
        documentBody.style.top = null;
        documentBody.removeAttribute('data-popup-scrolltop');
        document.documentElement.scrollTop = parseInt(bodyScrollTop)
    }
}
function t1014_createPopup(recId) {
    var rec = document.getElementById('rec' + recId);
    if (!rec)
        return;
    var container = rec.querySelector('.t1014');
    if (!container)
        return;
    var popup = rec.querySelector('.t-popup');
    var documentBody = document.body;
    t_onFuncLoad('t_popup__showPopup', function() {
        t_popup__showPopup(popup)
    });
    if (typeof t_triggerEvent === 'function')
        t_triggerEvent(document.body, 'popupShowed');
    documentBody.classList.add('t-body_popupshowed');
    documentBody.classList.add('t1014__body_popupshowed');
    if (/iPhone|iPad|iPod/i.test(navigator.userAgent) && !window.MSStream) {
        setTimeout(function() {
            t1014_lockScroll()
        }, 500)
    }
    document.addEventListener('keydown', t1014_escClosePopup)
}
function t1014_escClosePopup(event) {
    if (event.key === 'Escape')
        t1014_closePopup()
}
function t1014_closePopup() {
    var popupAll = document.querySelectorAll('.t-popup');
    if (typeof t_triggerEvent === 'function')
        t_triggerEvent(document.body, 'popupHidden');
    document.body.classList.remove('t-body_popupshowed');
    document.body.classList.remove('t1014__body_popupshowed');
    for (var i = 0; i < popupAll.length; i++) {
        popupAll[i].classList.remove('t-popup_show')
    }
    if (/iPhone|iPad|iPod/i.test(navigator.userAgent) && !window.MSStream) {
        t1014_unlockScroll()
    }
    t_onFuncLoad('t_popup__addFocusOnTriggerButton', function() {
        t_popup__addFocusOnTriggerButton()
    });
    setTimeout(function() {
        var popupHide = document.querySelectorAll('.t-popup:not(.t-popup_show)');
        for (var i = 0; i < popupHide.length; i++) {
            popupHide[i].style.display = 'none'
        }
    }, 300);
    document.removeEventListener('keydown', t1014_escClosePopup)
}
function t1014__lazyLoad() {
    var allRecords = document.getElementById('allrecords');
    if (window.lazy === 'y' || (allRecords && allRecords.getAttribute('data-tilda-lazy') === 'yes')) {
        t_onFuncLoad('t_lazyload_update', function() {
            t_lazyload_update()
        })
    }
}
function t1014_onSuccess(form) {
    t_onFuncLoad('t_forms__onSuccess', function() {
        t_forms__onSuccess(form)
    })
}
function t1061_initThumbnail(rec) {
    if (!rec)
        return;
    var windowWidth = window.innerWidth;
    var screenMin = rec.getAttribute('data-screen-min');
    var screenMax = rec.getAttribute('data-screen-max');
    if (screenMin && windowWidth < parseInt(screenMin, 10))
        return;
    if (screenMax && windowWidth > parseInt(screenMax, 10))
        return;
    t1061_setThumbnailHeight(rec);
    t1061_setThumbnail(rec);
    t1061_setYouTubeIframeHeight(rec);
    t1061_setHeight(rec)
}
function t1061_setThumbnail(rec) {
    var thumbnails = rec.querySelectorAll('.t1061__video-thumbnail');
    if (!thumbnails.length)
        return;
    Array.prototype.forEach.call(thumbnails, function(thumbnail) {
        var blockTop = thumbnail.getBoundingClientRect().top;
        var windowHeight = document.documentElement.clientHeight;
        var scrollDiffHeigth = 400;
        if (window.pageYOffset > blockTop - windowHeight - scrollDiffHeigth) {
            var youTubeID = thumbnail.getAttribute('data-youtube-id').trim();
            thumbnail.style.backgroundImage = 'url("https://img.youtube.com/vi/' + youTubeID + '/sddefault.jpg")';
            thumbnail.addEventListener('click', function(event) {
                event.preventDefault();
                var youTubeWrapper = thumbnail.parentNode;
                var youTubeIframe = '<iframe class="t1061__youtube-iframe" width="100%" height="" src="https://www.youtube.com/embed/' + youTubeID + '?autoplay=1&rel=0" frameborder="0" allow="autoplay" allowfullscreen></iframe>';
                thumbnail.innerHTML = youTubeIframe;
                t1061_setYouTubeIframeHeight(rec)
            })
        }
    })
}
function t1061_setThumbnailHeight(rec) {
    var thumbnail = rec.querySelectorAll('.t1061__video-thumbnail');
    if (!thumbnail.length)
        return;
    Array.prototype.forEach.call(thumbnail, function(image) {
        var imageWidth = image.offsetWidth;
        var computedHeight = imageWidth / (16 / 9);
        image.style.height = computedHeight + 'px'
    })
}
function t1061_setYouTubeIframeHeight(rec) {
    var youTubeIframes = rec.querySelectorAll('iframe');
    if (!youTubeIframes.length)
        return;
    Array.prototype.forEach.call(youTubeIframes, function(youTubeIframe) {
        var iframeParent = youTubeIframe.parentNode;
        var iframeParentWidth = iframeParent.offsetWidth;
        var computedHeight = iframeParentWidth / (16 / 9);
        youTubeIframe.height = computedHeight
    })
}
function t1061_setHeight(rec) {
    var videoLazy = rec.querySelectorAll('.t-video-lazyload');
    if (!videoLazy.length)
        return;
    Array.prototype.forEach.call(videoLazy, function(video) {
        var videoIframe = video.querySelector('iframe');
        var videoWidth = parseInt(window.getComputedStyle(video).width, 10);
        var computedHeight = videoWidth / (16 / 9);
        video.style.height = computedHeight + 'px';
        if (videoIframe) {
            videoIframe.height = computedHeight
        }
        setTimeout(function() {
            var videoIframe = video.querySelector('iframe');
            if (videoIframe) {
                videoIframe.height = computedHeight
            }
        }, 300)
    })
}
function t702_initPopup(recId) {
    var rec = document.getElementById('rec' + recId);
    if (!rec)
        return;
    var container = rec.querySelector('.t702');
    if (!container)
        return;
    rec.setAttribute('data-animationappear', 'off');
    rec.setAttribute('data-popup-subscribe-inited', 'y');
    rec.style.opacity = 1;
    var documentBody = document.body;
    var popup = rec.querySelector('.t-popup');
    var popupTooltipHook = popup.getAttribute('data-tooltip-hook');
    var analitics = popup.getAttribute('data-track-popup');
    var popupCloseBtn = popup.querySelector('.t-popup__close');
    var hrefs = rec.querySelectorAll('a[href*="#"]');
    var submitHref = rec.querySelector('.t-submit[href*="#"]');
    if (popupTooltipHook) {
        t_onFuncLoad('t_popup__addAttributesForAccessibility', function() {
            t_popup__addAttributesForAccessibility(popupTooltipHook)
        });
        document.addEventListener('click', function(event) {
            var target = event.target;
            var href = target.closest('a[href$="' + popupTooltipHook + '"]') ? target : !1;
            if (!href)
                return;
            event.preventDefault();
            t702_showPopup(recId);
            t_onFuncLoad('t_popup__resizePopup', function() {
                t_popup__resizePopup(recId)
            });
            t702__lazyLoad();
            if (analitics && window.Tilda) {
                Tilda.sendEventToStatistics(analitics, popupTooltipHook)
            }
        });
        t_onFuncLoad('t_popup__addClassOnTriggerButton', function() {
            t_popup__addClassOnTriggerButton(document, popupTooltipHook)
        })
    }
    popup.addEventListener('scroll', t_throttle(function() {
        t702__lazyLoad()
    }));
    popup.addEventListener('click', function(event) {
        var windowWithoutScrollBar = window.innerWidth - 17;
        if (event.clientX > windowWithoutScrollBar)
            return;
        if (event.target === this)
            t702_closePopup(recId)
    });
    popupCloseBtn.addEventListener('click', function() {
        t702_closePopup(recId)
    });
    if (submitHref) {
        submitHref.addEventListener('click', function() {
            if (documentBody.classList.contains('t-body_scroll-locked')) {
                documentBody.classList.remove('t-body_scroll-locked')
            }
        })
    }
    for (var i = 0; i < hrefs.length; i++) {
        hrefs[i].addEventListener('click', function() {
            var url = this.getAttribute('href');
            if (!url || url.substring(0, 7) != '#price:') {
                t702_closePopup(recId);
                if (!url || url.substring(0, 7) == '#popup:') {
                    setTimeout(function() {
                        if (typeof t_triggerEvent === 'function')
                            t_triggerEvent(document.body, 'popupShowed');
                        documentBody.classList.add('t-body_popupshowed')
                    }, 300)
                }
            }
        })
    }
    function t702_escClosePopup(event) {
        if (event.key === 'Escape')
            t702_closePopup(recId)
    }
    popup.addEventListener('tildamodal:show' + popupTooltipHook, function() {
        document.addEventListener('keydown', t702_escClosePopup)
    });
    popup.addEventListener('tildamodal:close' + popupTooltipHook, function() {
        document.removeEventListener('keydown', t702_escClosePopup)
    })
}
function t702_lockScroll() {
    var documentBody = document.body;
    if (!documentBody.classList.contains('t-body_scroll-locked')) {
        var bodyScrollTop = typeof window.pageYOffset !== 'undefined' ? window.pageYOffset : (document.documentElement || documentBody.parentNode || documentBody).scrollTop;
        documentBody.classList.add('t-body_scroll-locked');
        documentBody.style.top = '-' + bodyScrollTop + 'px';
        documentBody.setAttribute('data-popup-scrolltop', bodyScrollTop)
    }
}
function t702_unlockScroll() {
    var documentBody = document.body;
    if (documentBody.classList.contains('t-body_scroll-locked')) {
        var bodyScrollTop = documentBody.getAttribute('data-popup-scrolltop');
        documentBody.classList.remove('t-body_scroll-locked');
        documentBody.style.top = null;
        documentBody.removeAttribute('data-popup-scrolltop');
        document.documentElement.scrollTop = parseInt(bodyScrollTop)
    }
}
function t702_showPopup(recId) {
    var rec = document.getElementById('rec' + recId);
    if (!rec)
        return;
    var container = rec.querySelector('.t702');
    if (!container)
        return;
    var windowWidth = window.innerWidth;
    var screenMin = rec.getAttribute('data-screen-min');
    var screenMax = rec.getAttribute('data-screen-max');
    if (screenMin && windowWidth < parseInt(screenMin, 10))
        return;
    if (screenMax && windowWidth > parseInt(screenMax, 10))
        return;
    var popup = rec.querySelector('.t-popup');
    var popupTooltipHook = popup.getAttribute('data-tooltip-hook');
    var ranges = rec.querySelectorAll('.t-range');
    var documentBody = document.body;
    if (ranges.length) {
        Array.prototype.forEach.call(ranges, function(range) {
            t702__triggerEvent(range, 'popupOpened')
        })
    }
    t_onFuncLoad('t_popup__showPopup', function() {
        t_popup__showPopup(popup)
    });
    if (typeof t_triggerEvent === 'function')
        t_triggerEvent(document.body, 'popupShowed');
    documentBody.classList.add('t-body_popupshowed');
    documentBody.classList.add('t702__body_popupshowed');
    if (/iPhone|iPad|iPod/i.test(navigator.userAgent) && !window.MSStream && window.isiOSVersion && window.isiOSVersion[0] === 11) {
        setTimeout(function() {
            t702_lockScroll()
        }, 500)
    }
    t702__lazyLoad();
    t702__triggerEvent(popup, 'tildamodal:show' + popupTooltipHook);
    t_onFuncLoad('t_forms__calculateInputsWidth', function() {
        t_forms__calculateInputsWidth(recId)
    })
}
function t702_closePopup(recId) {
    var rec = document.getElementById('rec' + recId);
    var popup = rec.querySelector('.t-popup');
    var popupTooltipHook = popup.getAttribute('data-tooltip-hook');
    var popupAll = document.querySelectorAll('.t-popup_show:not(.t-feed__post-popup):not(.t945__popup)');
    if (popupAll.length == 1) {
        if (typeof t_triggerEvent === 'function')
            t_triggerEvent(document.body, 'popupHidden');
        document.body.classList.remove('t-body_popupshowed')
    } else {
        var newPopup = [];
        for (var i = 0; i < popupAll.length; i++) {
            if (popupAll[i].getAttribute('data-tooltip-hook') === popupTooltipHook) {
                popupAll[i].classList.remove('t-popup_show');
                newPopup.push(popupAll[i])
            }
        }
        if (newPopup.length === popupAll.length) {
            if (typeof t_triggerEvent === 'function')
                t_triggerEvent(document.body, 'popupHidden');
            document.body.classList.remove('t-body_popupshowed')
        }
    }
    if (typeof t_triggerEvent === 'function')
        t_triggerEvent(document.body, 'popupHidden');
    popup.classList.remove('t-popup_show');
    document.body.classList.remove('t702__body_popupshowed');
    if (/iPhone|iPad|iPod/i.test(navigator.userAgent) && !window.MSStream && window.isiOSVersion && window.isiOSVersion[0] === 11) {
        t702_unlockScroll()
    }
    t_onFuncLoad('t_popup__addFocusOnTriggerButton', function() {
        t_popup__addFocusOnTriggerButton()
    });
    setTimeout(function() {
        var popupHide = document.querySelectorAll('.t-popup:not(.t-popup_show)');
        for (var i = 0; i < popupHide.length; i++) {
            popupHide[i].style.display = 'none'
        }
    }, 300);
    t702__triggerEvent(popup, 'tildamodal:close' + popupTooltipHook)
}
function t702_sendPopupEventToStatistics(popupName) {
    var virtPage = '/tilda/popup/';
    var virtTitle = 'Popup: ';
    if (popupName.substring(0, 7) == '#popup:') {
        popupName = popupName.substring(7)
    }
    virtPage += popupName;
    virtTitle += popupName;
    if (window.Tilda && typeof Tilda.sendEventToStatistics == 'function') {
        Tilda.sendEventToStatistics(virtPage, virtTitle, '', 0)
    } else {
        if (ga) {
            if (window.mainTracker != 'tilda') {
                ga('send', {
                    hitType: 'pageview',
                    page: virtPage,
                    title: virtTitle
                })
            }
        }
        if (window.mainMetrika && window[window.mainMetrika]) {
            window[window.mainMetrika].hit(virtPage, {
                title: virtTitle,
                referer: window.location.href
            })
        }
    }
}
function t702_onSuccess(form) {
    t_onFuncLoad('t_forms__onSuccess', function() {
        t_forms__onSuccess(form)
    })
}
function t702__lazyLoad() {
    if (window.lazy === 'y' || document.getElementById('allrecords').getAttribute('data-tilda-lazy') === 'yes') {
        t_onFuncLoad('t_lazyload_update', function() {
            t_lazyload_update()
        })
    }
}
function t702__triggerEvent(el, eventName) {
    var event;
    if (typeof window.CustomEvent === 'function') {
        event = new CustomEvent(eventName)
    } else if (document.createEvent) {
        event = document.createEvent('HTMLEvents');
        event.initEvent(eventName, !0, !1)
    } else if (document.createEventObject) {
        event = document.createEventObject();
        event.eventType = eventName
    }
    event.eventName = eventName;
    if (el.dispatchEvent) {
        el.dispatchEvent(event)
    } else if (el.fireEvent) {
        el.fireEvent('on' + event.eventType, event)
    } else if (el[eventName]) {
        el[eventName]()
    } else if (el['on' + eventName]) {
        el['on' + eventName]()
    }
}
function t983_init(recId) {
    var rec = document.getElementById('rec' + recId);
    if (!rec)
        return;
    var container = rec.querySelector('.t983');
    if (!container)
        return;
    window.addEventListener('resize', t_throttle(function() {
        if (window.noAdaptive && window.noAdaptive === !0 && window.isMobile)
            return;
        t983_unifyHeights(recId);
        t983_translateBlock(recId)
    }));
    window.addEventListener('load', function() {
        t983_unifyHeights(recId);
        t983_translateBlock(recId)
    });
    container.addEventListener('displayChanged', t_throttle(function() {
        t983_unifyHeights(recId);
        t983_translateBlock(recId)
    }));
    t983_unifyHeights(recId);
    t983_translateBlock(recId);
    t983__updateLazyLoad(recId);
    t_onFuncLoad('t_card__moveClickOnCard', function() {
        t_card__moveClickOnCard(recId)
    });
    t_onFuncLoad('t_card__addFocusOnTab', function() {
        t_card__addFocusOnTab(recId)
    })
}
function t983_translateBlock(recId) {
    var rec = document.getElementById('rec' + recId);
    if (!rec)
        return;
    var container = rec.querySelector('.t983');
    if (!container)
        return;
    var hoverBlocks = rec.querySelectorAll('.t983__card-block_hover');
    var wrapMarginBottom = 35;
    var isMobile = window.isMobile || window.innerWidth < 960;
    for (var i = 0; i < hoverBlocks.length; i++) {
        var hoverBlock = hoverBlocks[i];
        var blockWrapper = t983_getParent(hoverBlock, 't983__card-block-wrapper');
        var card = t983_getParent(hoverBlock, 't983__card');
        var cardHeight = card.clientHeight;
        var diff = cardHeight - hoverBlock.offsetHeight - wrapMarginBottom * 2;
        var cardHideDiff = hoverBlock.querySelector('.t983__card-hide').offsetHeight;
        blockWrapper.style.transform = 'translateY(' + diff + 'px)';
        if (!isMobile) {
            hoverBlock.style.transform = 'translateY(' + cardHideDiff + 'px)'
        } else {
            hoverBlock.style.transform = null
        }
    }
    if (hoverBlocks.length === 0) {
        var rows = (isMobile ? rec.querySelectorAll('.t983__container') : rec.querySelectorAll('.t983__row'));
        for (var i = 0; i < rows.length; i++) {
            var row = rows[i];
            var cardBlocks = row.querySelectorAll('.t983__card-block');
            var maxHeightRow = 0;
            var card = t983_getParent(cardBlocks[0], 't983__card');
            if (card) {
                var cardStyle = getComputedStyle(card, null);
                var cardPaddingTop = parseInt(cardStyle.paddingTop) || 0;
                var cardPaddingBottom = parseInt(cardStyle.paddingBottom) || 0;
                var cardHeight = card.clientHeight - (cardPaddingTop + cardPaddingBottom);
                for (var j = 0; j < cardBlocks.length; j++) {
                    var cardHide = cardBlocks[j].querySelector('.t983__card-hide');
                    var cardHideHeight = cardHide ? cardHide.offsetHeight : 0;
                    if (cardHideHeight > maxHeightRow)
                        maxHeightRow = cardHideHeight
                }
                for (var j = 0; j < cardBlocks.length; j++) {
                    var cardBlock = cardBlocks[j];
                    var cardShow = cardBlock.querySelector('.t983__card-show');
                    var cardShowHeight = cardShow ? cardShow.offsetHeight : 0;
                    var diff = cardHeight - cardShowHeight - maxHeightRow - wrapMarginBottom * 2;
                    if (window.innerWidth >= 480) {
                        cardBlock.style.transform = 'translateY(' + diff + 'px)'
                    } else {
                        cardBlock.style.transform = null
                    }
                }
            }
        }
    }
}
function t983_unifyHeights(recId) {
    var rec = document.getElementById('rec' + recId);
    if (!rec)
        return;
    var main = rec.querySelector('.t983');
    if (!main)
        return;
    var container = rec.querySelector('.t983__container');
    var rows = main.querySelectorAll('.t983__row');
    for (var i = 0; i < rows.length; i++) {
        var row = rows[i];
        var cardsContent = row.querySelectorAll('.t983__card-content');
        var cardsWrapper = row.querySelectorAll('.t983__card-wrapper');
        var card = row.querySelector('.t983__card');
        var cardStyle = getComputedStyle(card, null);
        var cardPaddingLeft = parseInt(cardStyle.paddingLeft) || 0;
        var cardPaddingRight = parseInt(cardStyle.paddingRight) || 0;
        var cardWidth = card.clientWidth - (cardPaddingLeft + cardPaddingRight);
        var maxHeight = 0;
        var ratio = container.getAttribute('data-ratio');
        var minHeightFromRatio = 0;
        switch (ratio) {
        case '16_9':
            minHeightFromRatio = cardWidth * 0.5625;
            break;
        case '4_3':
            minHeightFromRatio = cardWidth * 0.75;
            break;
        case '3_2':
            minHeightFromRatio = cardWidth * 0.6666;
            break;
        case '1_1':
            minHeightFromRatio = cardWidth;
            break;
        case '2_3':
            minHeightFromRatio = cardWidth * 1.5;
            break;
        case '3_4':
            minHeightFromRatio = cardWidth * 1.3333;
            break;
        case '9_16':
            minHeightFromRatio = cardWidth * 1.7777;
            break
        }
        for (var j = 0; j < cardsContent.length; j++) {
            var cardContentHeight = cardsContent[j].offsetHeight;
            if (cardContentHeight > maxHeight)
                maxHeight = cardContentHeight
        }
        if (maxHeight > minHeightFromRatio) {
            for (var j = 0; j < cardsWrapper.length; j++) {
                cardsWrapper[j].style.paddingBottom = maxHeight + 'px'
            }
        } else {
            for (var j = 0; j < cardsWrapper.length; j++) {
                cardsWrapper[j].style.paddingBottom = null
            }
        }
    }
}
function t983__updateLazyLoad(recId) {
    var allRecords = document.getElementById('allrecords');
    if (window.lazy === 'y' || allRecords.getAttribute('data-tilda-lazy') === 'yes') {
        t_onFuncLoad('t_lazyload_update', function() {
            var scrollContainer = document.querySelector('#rec' + recId + ' .t983__container_mobile-flex');
            var curMode = allRecords.getAttribute('data-tilda-mode');
            if (scrollContainer && curMode != 'edit' && curMode != 'preview' && window.isMobile) {
                scrollContainer.addEventListener('touchmove', t_throttle(function() {
                    t_lazyload_update()
                }))
            }
        })
    }
}
function t983_getParent(element, className) {
    for (var p = element && element.parentElement; p; p = p.parentElement) {
        if (p.classList.contains(className)) {
            return p
        }
    }
}
function t190_init(recId) {
    var rec = document.getElementById('rec' + recId);
    if (!rec)
        return;
    rec.addEventListener('click', function(e) {
        if (e.target.closest('.t190__button')) {
            t190_scrollToTop()
        }
    })
}
function t190_scrollToTop() {
    var duration = 700;
    var start = (window.pageYOffset || document.documentElement.scrollTop) - (document.documentElement.clientTop || 0);
    var change = 0 - start;
    var currentTime = 0;
    var increment = 16;
    document.body.setAttribute('data-scrollable', 'true');
    var isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
    if (isSafari) {
        t190__animateScrollPolyfill(0)
    } else {
        t190__animateScroll()
    }
    function t190__easeInOutCubic(currentTime) {
        if ((currentTime /= duration / 2) < 1) {
            return (change / 2) * currentTime * currentTime * currentTime + start
        } else {
            return (change / 2) * ((currentTime -= 2) * currentTime * currentTime + 2) + start
        }
    }
    function t190__animateScroll() {
        currentTime += increment;
        window.scrollTo(0, t190__easeInOutCubic(currentTime));
        if (currentTime < duration) {
            setTimeout(t190__animateScroll, increment)
        } else {
            document.body.removeAttribute('data-scrollable')
        }
    }
}
function t190__animateScrollPolyfill(target) {
    var documentHeight = Math.max(document.body.scrollHeight, document.documentElement.scrollHeight, document.body.offsetHeight, document.documentElement.offsetHeight, document.body.clientHeight, document.documentElement.clientHeight);
    var bottomViewportPoint = documentHeight - document.documentElement.clientHeight;
    if (target > bottomViewportPoint)
        target = bottomViewportPoint;
    if (target === window.pageYOffset)
        return !1;
    var currentPosition = window.pageYOffset;
    var step = (target - currentPosition) / 30;
    var difference = window.pageYOffset;
    var timerID = setInterval(function() {
        difference += step;
        window.scrollTo(0, difference);
        document.body.setAttribute('data-scrollable', 'true');
        if ((target - currentPosition < 0 && window.pageYOffset <= target) || (target - currentPosition > 0 && window.pageYOffset >= target)) {
            clearInterval(timerID);
            document.body.removeAttribute('data-scrollable')
        }
    }, 10)
}
window.requestAnimationFrame = (function() {
    return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function(callback) {
        window.setTimeout(callback, 1000 / 60)
    }
}
)();
function t270_scroll(hash, offset) {
    if (!hash)
        return;
    t270_checkLoad(hash, offset);
    if (hash.indexOf('#!/tproduct/') !== -1 || hash.indexOf('#!/tab/') !== -1) {
        return !0
    }
    var isHistoryChangeAllowed = window.location.hash !== hash;
    var wrapperBlock = document.querySelector('.t270');
    var dontChangeHistory = wrapperBlock ? Boolean(wrapperBlock.getAttribute('data-history-disabled')) : !1;
    t270_scrollToEl(hash, offset);
    if (!dontChangeHistory && isHistoryChangeAllowed) {
        if (history.pushState) {
            history.pushState(null, null, hash)
        } else {
            window.location.hash = hash
        }
        isHistoryChangeAllowed = !1
    }
    return !0
}
function t270_checkLoad(hash, offset) {
    if (window.t270_loadChecked)
        return;
    var sliderWrappers = document.body.querySelectorAll('.t-slds__items-wrapper');
    if (!sliderWrappers.length)
        return;
    var lastWrapper = sliderWrappers[sliderWrappers.length - 1];
    var sliderImgs = lastWrapper ? lastWrapper.querySelectorAll('.t-slds__bgimg') : [];
    var lastImg = sliderImgs[sliderImgs.length - 1];
    var imageUrl = lastImg ? window.getComputedStyle(lastImg).backgroundImage : '';
    imageUrl = imageUrl.substring(5, imageUrl.length - 2);
    var preloaderImg = document.createElement('img');
    preloaderImg.src = imageUrl ? imageUrl : '';
    preloaderImg.addEventListener('load', function() {
        t270_scroll(hash, offset);
        window.t270_loadChecked = !0
    })
}
function t270_scrollToEl(hash, offset) {
    if (document.body.getAttribute('data-scroll'))
        return;
    var scrollTargetY = t270_getTarget(hash, offset);
    if (isNaN(scrollTargetY))
        return;
    var body = document.body;
    var canSmoothScroll = window.CSS && window.CSS.supports('scroll-behavior', 'smooth');
    if (window.isMobile && canSmoothScroll && 'scrollBehavior'in document.documentElement.style) {
        body.setAttribute('data-scroll', 'true');
        window.scrollTo({
            left: 0,
            top: scrollTargetY,
            behavior: 'smooth'
        });
        setTimeout(function() {
            body.removeAttribute('data-scroll')
        }, 500)
    } else {
        var html = document.querySelector('html');
        var documentHeight = Math.max(body.scrollHeight, body.offsetHeight, body.clientHeight, html.offsetHeight);
        var scrollY = window.scrollY || document.documentElement.scrollTop;
        var speed = 2000;
        var time = Math.max(.1, Math.min(Math.abs(scrollY - scrollTargetY) / speed, .8));
        var currentTime = 0;
        function t270_easeInQuad(pos) {
            return Math.pow(pos, 2)
        }
        function t270_animationScroll() {
            currentTime += 1 / 60;
            var newDocumentHeight = Math.max(body.scrollHeight, body.offsetHeight, body.clientHeight, html.offsetHeight);
            if (documentHeight < newDocumentHeight) {
                documentHeight = newDocumentHeight;
                scrollTargetY = t270_getTarget(hash, offset);
                scrollY = window.scrollY || document.documentElement.scrollTop;
                time = Math.max(.1, Math.min(Math.abs(scrollY - scrollTargetY) / speed, .8))
            }
            var difference = currentTime / time;
            var animation = t270_easeInQuad(difference);
            if (difference < 1) {
                requestAnimationFrame(t270_animationScroll);
                window.scrollTo(0, scrollY + ((scrollTargetY - scrollY) * animation))
            } else {
                body.removeAttribute('data-scroll');
                body.removeAttribute('data-scrollable');
                window.scrollTo(0, scrollTargetY)
            }
        }
        body.setAttribute('data-scroll', 'true');
        body.setAttribute('data-scrollable', 'true');
        t270_animationScroll()
    }
}
function t270_getTarget(hash, offset) {
    var target;
    try {
        if (hash.substring(0, 1) === '#') {
            target = document.getElementById(hash.substring(1))
        } else {
            target = document.querySelector(hash)
        }
    } catch (event) {
        console.log('Exception t270: ' + event.message);
        return
    }
    if (!target) {
        target = document.querySelector('a[name="' + hash.substr(1) + '"]');
        if (!target)
            return
    }
    target = parseInt((target.getBoundingClientRect().top + window.pageYOffset) - offset, 10);
    target = Math.max(target, 0);
    return target
}
