"use strict";

function fixWrapperHeight() {
    var a = 62,
        b = $("#navigation").height(),
        c = $(".content").height();
    c < b && $("#wrapper").css("min-height", b + "px"), c < b && b < $(window).height() && $("#wrapper").css("min-height", $(window).height() - a + "px"), c > b && c < $(window).height() && $("#wrapper").css("min-height", $(window).height() - a + "px")
}

function setBodySmall() {
    $(this).width() < 769 ? $("body").addClass("page-small") : ($("body").removeClass("page-small"), $("body").removeClass("show-sidebar"))
}

function sweetAlert(a, b) {
    var c = b.swal;
    return {
        swal: function(b, d, e) {
            a(function() {
                "function" == typeof d ? c(b, function(b) {
                    a(function() {
                        d(b)
                    })
                }, e) : c(b, d, e)
            }, 200)
        },
        success: function(b, d) {
            a(function() {
                c(b, d, "success")
            }, 200)
        },
        error: function(b, d) {
            a(function() {
                c(b, d, "error")
            }, 200)
        },
        warning: function(b, d) {
            a(function() {
                c(b, d, "warning")
            }, 200)
        },
        info: function(b, d) {
            a(function() {
                c(b, d, "info")
            }, 200)
        }
    }
}

function pageTitle(a, b) {
    return {
        link: function(c, d) {
            var e = function(a, c, e, f, g) {
                var h = "docubasic3App | AngularJS Responsive WebApp";
                c.data && c.data.pageTitle && (h = "docubasic3App | " + c.data.pageTitle), b(function() {
                    d.text(h)
                })
            };
            a.$on("$stateChangeStart", e)
        }
    }
}

function sideNavigation(a) {
    return {
        restrict: "A",
        link: function(a, b) {
            b.metisMenu();
            var c = $('#side-menu a:not([href$="\\#"])');
            c.click(function() {
                $(window).width() < 769 && $("body").toggleClass("show-sidebar")
            })
        }
    }
}

function minimalizaMenu(a) {
    return {
        restrict: "EA",
        template: '<div class="header-link hide-menu" ng-click="minimalize()"><i class="fa fa-bars"></i></div>',
        controller: ["$scope", "$element", function(a, b) {
            a.minimalize = function() {
                $(window).width() < 769 ? $("body").toggleClass("show-sidebar") : $("body").toggleClass("hide-sidebar")
            }
        }]
    }
}

function sparkline() {
    return {
        restrict: "A",
        scope: {
            sparkData: "=",
            sparkOptions: "="
        },
        link: function(a, b, c) {
            a.$watch(a.sparkData, function() {
                d()
            }), a.$watch(a.sparkOptions, function() {
                d()
            });
            var d = function() {
                $(b).sparkline(a.sparkData, a.sparkOptions)
            }
        }
    }
}

function icheck(a) {
    return {
        restrict: "A",
        require: "ngModel",
        link: function(b, c, d, e) {
            return a(function() {
                var a;
                return a = d.value, b.$watch(d.ngModel, function(a) {
                    $(c).iCheck("update")
                }), $(c).iCheck({
                    checkboxClass: "icheckbox_square-green",
                    radioClass: "iradio_square-green"
                }).on("ifChanged", function(f) {
                    if ("checkbox" === $(c).attr("type") && d.ngModel && b.$apply(function() {
                            return e.$setViewValue(f.target.checked)
                        }), "radio" === $(c).attr("type") && d.ngModel) return b.$apply(function() {
                        return e.$setViewValue(a)
                    })
                })
            })
        }
    }
}

function panelTools(a) {
    return {
        restrict: "A",
        scope: !0,
        templateUrl: "views/common/panel_tools.html",
        controller: ["$scope", "$element", function(b, c) {
            b.showhide = function() {
                var b = c.closest("div.hpanel"),
                    d = c.find("i:first"),
                    e = b.find("div.panel-body"),
                    f = b.find("div.panel-footer");
                e.slideToggle(300), f.slideToggle(200), d.toggleClass("fa-chevron-up").toggleClass("fa-chevron-down"), b.toggleClass("").toggleClass("panel-collapse"), a(function() {
                    b.resize(), b.find("[id^=map-]").resize()
                }, 50)
            }, b.closebox = function() {
                var a = c.closest("div.hpanel");
                a.remove()
            }
        }]
    }
}

function panelToolsFullscreen(a) {
    return {
        restrict: "A",
        scope: !0,
        templateUrl: "views/common/panel_tools_fullscreen.html",
        controller: ["$scope", "$element", function(b, c) {
            b.showhide = function() {
                var b = c.closest("div.hpanel"),
                    d = c.find("i:first"),
                    e = b.find("div.panel-body"),
                    f = b.find("div.panel-footer");
                e.slideToggle(300), f.slideToggle(200), d.toggleClass("fa-chevron-up").toggleClass("fa-chevron-down"), b.toggleClass("").toggleClass("panel-collapse"), a(function() {
                    b.resize(), b.find("[id^=map-]").resize()
                }, 50)
            }, b.closebox = function() {
                var a = c.closest("div.hpanel");
                a.remove(), $("body").hasClass("fullscreen-panel-mode") && $("body").removeClass("fullscreen-panel-mode")
            }, b.fullscreen = function() {
                var a = c.closest("div.hpanel"),
                    b = c.find("i:first");
                $("body").toggleClass("fullscreen-panel-mode"), b.toggleClass("fa-expand").toggleClass("fa-compress"), a.toggleClass("fullscreen"), setTimeout(function() {
                    $(window).trigger("resize")
                }, 100)
            }
        }]
    }
}

function smallHeader() {
    return {
        restrict: "A",
        scope: !0,
        controller: ["$scope", "$element", function(a, b) {
            a.small = function() {
                var a = b.find("i:first"),
                    c = b.find("#hbreadcrumb");
                b.toggleClass("small-header"), c.toggleClass("m-t-lg"), a.toggleClass("fa-arrow-up").toggleClass("fa-arrow-down")
            }
        }]
    }
}

function animatePanel(a, b) {
    return {
        restrict: "A",
        link: function(c, d, e) {
            var f = 0,
                g = .06,
                h = Math.abs(g) + f;
            b.current.name;
            e.effect || (e.effect = "zoomIn"), g = e.delay ? e.delay / 10 : .06, e.child ? e.child = "." + e.child : e.child = ".row > div";
            var i = d.find(e.child);
            i.addClass("opacity-0");
            i.length * g * 1e3 + 700;
            a(function() {
                i = d.find(e.child), i.addClass("stagger").addClass("animated-panel").addClass(e.effect);
                var b = i.length + 10,
                    c = b * g * 1e4 / 10;
                i.each(function(a, b) {
                    h += g;
                    var c = Math.round(10 * h) / 10;
                    $(b).css("animation-delay", c + "s"), $(b).removeClass("opacity-0")
                }), a(function() {
                    $(".stagger").css("animation", ""), $(".stagger").removeClass(e.effect).removeClass("animated-panel").removeClass("stagger"), i.resize()
                }, c)
            })
        }
    }
}

function landingScrollspy() {
    return {
        restrict: "A",
        link: function(a, b, c) {
            b.scrollspy({
                target: ".navbar-fixed-top",
                offset: 80
            })
        }
    }
}

function clockPicker() {
    return {
        restrict: "A",
        link: function(a, b) {
            b.clockpicker()
        }
    }
}

function dateTimePicker() {
    return {
        require: "?ngModel",
        restrict: "AE",
        scope: {
            pick12HourFormat: "@",
            language: "@",
            useCurrent: "@",
            location: "@"
        },
        link: function(a, b, c) {
            b.datetimepicker({
                pick12HourFormat: a.pick12HourFormat,
                language: a.language,
                useCurrent: a.useCurrent
            }), b.on("blur", function() {})
        }
    }
}

function touchSpin() {
    return {
        restrict: "A",
        scope: {
            spinOptions: "="
        },
        link: function(a, b, c) {
            a.$watch(a.spinOptions, function() {
                d()
            });
            var d = function() {
                $(b).TouchSpin(a.spinOptions)
            }
        }
    }
}
$(document).ready(function() {
        fixWrapperHeight(), setBodySmall()
    }), $(window).bind("load", function() {
        $(".splash").css("display", "none")
    }), $(window).bind("resize click", function() {
        setBodySmall(), setTimeout(function() {
            fixWrapperHeight()
        }, 300)
    }), angular.module("docubasic3App", ["ngAnimate", "ngCookies", "ngResource", "ngRoute", "ngSanitize", "ngTouch", "ui.bootstrap", "ui.router", "LocalStorageModule", "ui.map", "ui.calendar", "summernote", "ngGrid", "ui.grid", "ui.tree", "bm.bsTour", "datatables", "xeditable", "ui.sortable", "ui.footable", "angular-chartist", "gridshore.c3js.chart", "angular-ladda", "ui.codemirror", "ngFileUpload", "googleplus", "naif.base64", "socialLogin", "ngContentEditable", "angular-medium-editor", "checklist-model"]).config(["$routeProvider", function(a) {
        a.when("/main", {
            templateUrl: "views/main.html",
            controller: "MainCtrl",
            controllerAs: "main",
            activetab: "dashboard"
        }).when("/about", {
            templateUrl: "views/about.html",
            controller: "AboutCtrl",
            controllerAs: "about"
        }).when("/login", {
            templateUrl: "views/login.html",
            controller: "loginCtrl",
            controllerAs: "loginCtrl"
        }).when("/passwordsetup/:email/:tenancy_id/:activation_key", {
            templateUrl: "views/passwordsetup.html",
            controller: "passwordctrl",
            controllerAs: "passwordctrl"
        }).when("/companysetting", {
            templateUrl: "views/companysetting.html",
            controller: "companysettingCtrl",
            controllerAs: "companysettingCtrl"
        }).when("/task", {
            templateUrl: "views/task.html",
            controller: "taskcategoryCtrl",
            controllerAs: "taskcategoryCtrl"
        }).when("/price", {
            templateUrl: "views/price.html",
            controller: "pricingsettingCtrl",
            controllerAs: "pricingsettingCtrl"
        }).when("/resourcetype", {
            templateUrl: "views/resourcetype.html",
            controller: "resourcetypeCtrl",
            controllerAs: "resourcetypeCtrl"
        }).when("/vendors", {
            templateUrl: "views/vendors.html",
            controller: "vendorsCtrl",
            controllerAs: "vendorsCtrl"
        }).when("/client", {
            templateUrl: "views/client.html",
            controller: "clientCtrl",
            controllerAs: "clientCtrl"
        }).when("/projecttask", {
            templateUrl: "views/projecttask.html",
            controller: "projecttaskCtrl",
            controllerAs: "projecttaskCtrl"
        }).when("/notes", {
            templateUrl: "views/notes.html",
            controller: "todoctrl",
            controllerAs: "todoctrl",
            activetab: "notes"
        }).when("/billing", {
            templateUrl: "views/billing.html",
            controller: "billingctrl",
            controllerAs: "billingctrl"
        }).when("/users", {
            templateUrl: "views/users.html",
            controller: "userctrl",
            controllerAs: "userctrl",
            activetab: "users"
        }).when("/todos", {
            templateUrl: "views/todos.html",
            controller: "todoctrl",
            controllerAs: "todoctrl",
            activetab: "todos"
        }).when("/subscription", {
            templateUrl: "views/subscription.html",
            controller: "billingctrl",
            controllerAs: "billingctrl"
        }).when("/demo", {
            templateUrl: "views/demo.html",
            controller: "billingctrl",
            controllerAs: "billingctrl"
        }).when("/ragister", {
            templateUrl: "views/ragister.html",
            controller: "billingctrl",
            controllerAs: "billingctrl"
        }).when("/proposal", {
            templateUrl: "views/proposal.html",
            controller: "proposalCtrl",
            controllerAs: "proposalCtrl"
        }).when("/pages", {
            templateUrl: "views/pages.html",
            controller: "pageCtrl",
            controllerAs: "pageCtrl"
        }).when("/createstyle", {
            templateUrl: "views/createstyle.html",
            controller: "stylecreateCtrl",
            controllerAs: "stylecreateCtrl"
        }).when("/styles", {
            templateUrl: "views/styles.html",
            controller: "styleCtrl",
            controllerAs: "styleCtrl"
        }).when("/createpage", {
            templateUrl: "views/createpage.html",
            controller: "pagecreateCtrl",
            controllerAs: "pagecreateCtrl"
        }).when("/template", {
            templateUrl: "views/template.html",
            controller: "templateCtrl",
            controllerAs: "templateCtrl"
        }).when("/settingpage", {
            templateUrl: "views/settingpage.html",
            controller: "settingpageCtrl",
            controllerAs: "settingpageCtrl"
        }).when("/createproposal", {
            templateUrl: "views/createproposal.html",
            controller: "createproposalCtrl",
            controllerAs: "createproposalCtrl"
        }).when("/preview", {
            templateUrl: "views/preview.html",
            controller: "proposalCtrl",
            controllerAs: "proposalCtrl"
        }).when("/proposal-summery", {
            templateUrl: "views/proposal-summery.html",
            controller: "proposalsummeryCtrl",
            controllerAs: "proposalsummeryCtrl"
        }).when("/email", {
            templateUrl: "views/email.html",
            controller: "proposalCtrl",
            controllerAs: "proposalCtrl"
        }).when("/collabraters", {
            templateUrl: "views/collabraters.html",
            controller: "proposalCtrl",
            controllerAs: "proposalCtrl"
        }).when("/proposalReview/:proposal_id/:updated_by", {
            templateUrl: "views/proposalReview.html",
            controller: "customerreviewCtrl",
            controllerAs: "customerreviewCtrl"
        }).otherwise({
            redirectTo: "/"
        })
    }]).config(["$resourceProvider", function(a) {
        a.defaults.useXDomai = !0, a.defaults.withCredentials = !0
    }]).config(["socialProvider", function(a) {
        a.setLinkedInKey("819mzc7g75upnl")
    }]).config(["localStorageServiceProvider", function(a) {
        a.setPrefix("ls")
    }]).config(["GooglePlusProvider", function(a) {
        a.init({
            clientId: "412109683130-un11omgu3k46fj89k6dlv0a7ehn9sqpa.apps.googleusercontent.com",
            apiKey: "AIzaSyCVGfT6dfG_cExOpD4sy7QbWYC-jFuhxDo"
        })
    }]).config(["$httpProvider", function(a) {
        a.defaults.useXDomain = !0, delete a.defaults.headers.common["X-Requested-With"]
    }]), angular.module("docubasic3App").controller("MainCtrl", ["$scope", "$state", "$timeout", "$rootScope", "$routeParams", "$window", "settingservice", "localStorageService", "$location", "billingservice", "userservice", "$route", "$uibModal", function(a, b, c, d, e, f, g, h, i, j, k, l, m) {
        if (d.tenancyid = h.get("tenancyid"), d.isAdmin = h.get("isAdmin"), d.userid = h.get("userid"), d.username = h.get("username"), a.$route = l, d.alerts = [], a.loginalerts = [], d.isLogin = h.get("isLogin"), !d.isLogin) return !1;
        var n = {
            id: d.tenancyid
        };
        j.getbilldetail.query(n, function(b) {
            a.billingdata = b.data
        });
        var o = {
            tenancy_id: d.tenancyid
        };
        g.getnote.save(o, function(b) {
            a.notes = b.data
        });
        var p = {
            id: d.tenancyid
        };
        k.getuserdetail.query(p, function(b) {
            a.userdata = b.data, a.usercount = b.data.users_count, a.admincount = b.data.admin_count
        });
        var q = {
            tenancy_id: d.tenancyid
        };
        g.gettodos.save(q, function(b) {
            a.todos = b.data
        });
        var r = {
            id: d.tenancyid
        };
        g.getpraposaldata.query(r, function(b) {
            a.praposals = b.data
        });
        var s = {
            id: d.tenancyid
        };
        g.getpraposalwon.query(s, function(b) {
            a.praposalswon = b.data
        });
        var t = {
            id: d.tenancyid
        };
        g.getpraposalloss.query(t, function(b) {
            a.praposalsloss = b.data
        }), a.createpraposal = function() {
            d.modalInstance = m.open({
                animation: a.animationsEnabled,
                templateUrl: "views/createproposal.html",
                controller: "createproposalCtrl",
                windowClass: "modal-lg",
                resolve: {}
            })
        }
    }]), angular.module("docubasic3App").controller("todoctrl", ["$scope", "$state", "$timeout", "$rootScope", "$routeParams", "$window", "settingservice", "localStorageService", "$location", "sweetAlert", "$route", function(a, b, c, d, e, f, g, h, i, j, k) {
        function l() {
            var b = {
                tenancy_id: d.tenancyid
            };
            g.getnote.save(b, function(b) {
                a.notes = b.data
            });
            var c = {
                tenancy_id: d.tenancyid
            };
            g.gettodos.save(c, function(b) {
                a.todos = b.data
            })
        }
        d.userid = h.get("userid"), d.isAdmin = h.get("isAdmin"), d.tenancyid = h.get("tenancyid"), d.username = h.get("username"), d.tenancyid = h.get("tenancyid"), a.$route = k, a.display = !0, a.completetask = !0, l();
        var m = function() {
            a.alerts = [], a.errors = [], c(m, 1e4)
        };
        c(m, 1e4), a.closeAlerts = function(b) {
            a.alerts.splice(1, b), a.alerts = []
        }, a.closeAlert = function(b) {
            a.errors.splice(1, b), a.errors = []
        }, a.addnote = function() {
            a.display = !0, a.editdisplay = !1, a.edit = !1
        }, a.getnotesdata = function(b) {
            a.display = !1, a.edit = !1, a.editdisplay = !0, a.notename = b.Name, a.notediscription = b.Description, a.date = b.CreatedDate, d.id = b.NotesId
        }, a.getnote = function() {
            a.edit = !0, a.display = !1, a.editdisplay = !1
        }, a.updatenote = function() {
            var b = {
                name: a.notename,
                description: a.notediscription,
                tenancy_id: d.tenancyid,
                updated_by: d.userid,
                id: d.id
            };
            g.updatenote.update(b, function(b) {
                a.alerts = [], a.message = b.message, b.status === !0 ? (a.alerts.push({
                    msg: "Note updated successfully",
                    type: "success"
                }), l()) : b.status === !1 && (a.errors = b.message)
            })
        }, a.submitnote = function() {
            var b = {
                tenancy_id: d.tenancyid,
                name: a.newnotename,
                description: a.newnotediscription,
                created_by: d.userid
            };
            g.postnote.save(b, function(b) {
                a.alerts = [], a.message = b.message, b.status === !0 ? (a.alerts.push({
                    msg: "Note added successfully",
                    type: "success"
                }), a.newnotediscription = "", a.newnotename = "", l()) : b.status === !1 && (a.errors = b.message)
            })
        }, a.deletenote = function() {
            j.swal({
                title: "Are you sure you want to delete?",
                type: "warning",
                showCancelButton: !0,
                confirmButtonColor: "#DD6B55",
                confirmButtonText: "Yes, delete it!",
                cancelButtonText: "No, cancel!",
                closeOnConfirm: !1,
                closeOnCancel: !1
            }, function(b) {
                if (b) {
                    var c = {
                        id: d.id,
                        updated_by: d.userid
                    };
                    g.deletenote.save(c, function(b) {
                        a.alerts = [], a.message = b.message, b.status === !0 && (a.notediscription = "", a.notename = "", a.display = !0, a.editdisplay = !1, a.edit = !1, l())
                    }), j.swal("Deleted!", "Note deleted successfully", "success")
                } else j.swal("Cancelled")
            })
        }, a.submittask = function() {
            var b = {
                tenancy_id: d.tenancyid,
                created_by: d.userid,
                taskname: a.newnotename,
                description: a.taskdiscription
            };
            g.addtodos.save(b, function(b) {
                a.alerts = [], a.message = b.message, b.status === !0 && (a.alerts.push({
                    msg: "Task added successfully",
                    type: "success"
                }), a.newnotename = "", a.taskdiscription = "", l()), b.status === !1 && (a.errors = b.message)
            })
        }, a.gettask = function(b) {
            j.swal({
                title: "Are you sure want to complete this task?",
                type: "warning",
                showCancelButton: !0,
                confirmButtonColor: "#DD6B55",
                confirmButtonText: "Yes, complete it!",
                cancelButtonText: "No, cancel!",
                closeOnConfirm: !1,
                closeOnCancel: !1
            }, function(c) {
                if (c) {
                    a.id = b.TodosId;
                    var e = {
                        id: a.id,
                        updated_by: d.userid,
                        tenancy_id: d.tenancyid
                    };
                    g.chekedtask.update(e, function(b) {
                        a.alerts = [], a.message = b.message, b.status === !0 && l()
                    }), j.swal("completed!", "Task completed successfully", "success")
                } else j.swal("Cancelled")
            })
        }, a.alltaskfinish = function() {
            j.swal({
                title: "Are you sure want complete all the task?",
                type: "success",
                showCancelButton: !0,
                confirmButtonColor: "#DD6B55",
                confirmButtonText: "Yes, complete it!",
                cancelButtonText: "No, cancel!",
                closeOnConfirm: !1,
                closeOnCancel: !1
            }, function(b) {
                if (b) {
                    var c = {
                        id: 0,
                        tenancy_id: d.tenancyid,
                        updated_by: d.userid
                    };
                    g.alltaskcomplete.update(c, function(b) {
                        a.alerts = [], a.message = b.message, b.status === !0 && (a.alerts.push({
                            msg: "All task completed successfully",
                            type: "success"
                        }), a.alltask = !1, l()), b.status === !1 && (a.alerts.push({
                            msg: "There is no tasks",
                            type: "danger"
                        }), a.alltask = !1, l())
                    }), j.swal("All task completed successfully", "success")
                } else j.swal("Cancelled")
            })
        }, a.opentask = function(b) {
            j.swal({
                title: "Are you sure you want to reactivate this task?",
                type: "warning",
                showCancelButton: !0,
                confirmButtonColor: "#DD6B55",
                confirmButtonText: "Yes, reactivate it!",
                cancelButtonText: "No, cancel!",
                closeOnConfirm: !1,
                closeOnCancel: !1
            }, function(c) {
                if (c) {
                    a.id = b.TodosId;
                    var e = {
                        id: a.id,
                        updated_by: d.userid,
                        tenancy_id: d.tenancyid
                    };
                    g.incompletetask.update(e, function(b) {
                        a.alerts = [], a.message = b.message, b.status === !0 && l()
                    }), j.swal("Task activated successfully", "success")
                } else j.swal("Cancelled")
            })
        }, a.alltodos = function() {
            a.showalltask = !0, a.showActivatedtask = !1, a.showcompeletedtask = !1, a.all = {
                "background-color": "green"
            }, a.complete = {
                "background-color": "blue"
            }, a.active = {
                "background-color": "blue"
            }, a.newnotename = ""
        }, a.activatedtodos = function() {
            a.showalltask = !1, a.showActivatedtask = !0, a.showcompeletedtask = !1, a.active = {
                "background-color": "green"
            }, a.all = {
                "background-color": "blue"
            }, a.complete = {
                "background-color": "blue"
            }
        }, a.completedtodos = function() {
            a.showalltask = !1, a.showActivatedtask = !1, a.showcompeletedtask = !0, a.complete = {
                "background-color": "green"
            }, a.all = {
                "background-color": "blue"
            }, a.active = {
                "background-color": "blue"
            }, a.newnotename = ""
        }, a.edittodo = function(b) {
            a.todoid = b.TodosId, a.taskname = b.TaskName, a.newnotename = a.taskname, a.update = !0
        }, a.updatetask = function() {
            var b = {
                updated_by: d.userid,
                tenancy_id: d.tenancyid,
                id: a.todoid,
                taskname: a.newnotename
            };
            g.updatetodos.update(b, function(b) {
                a.alerts = [], a.message = b.message, b.status === !0 && (a.alerts.push({
                    msg: "Task Updated successfully",
                    type: "success"
                }), l(), a.newnotename = "", a.update = !1), b.status === !1 && (a.errors = b.message)
            })
        }
    }]), sweetAlert.$inject = ["$timeout", "$window"], angular.module("docubasic3App").factory("sweetAlert", sweetAlert), angular.module("docubasic3App").controller("AboutCtrl", function() {
        this.awesomeThings = ["HTML5 Boilerplate", "AngularJS", "Karma"]
    }), angular.module("docubasic3App").controller("loginCtrl", ["$scope", "$state", "$timeout", "$rootScope", "$stateParams", "$uibModal", "loginService", "localStorageService", "$location", "GooglePlus", function(a, b, c, d, e, f, g, h, i, j) {
        function k() {
            if (d.isLogin = h.get("isLogin"), !d.isLogin) return i.path("/login"), !1
        }
        d.$on("event:social-sign-in-success", function(b, c) {
            a.userinfo = c, d.semail = c.email, d.token = c.uid, d.slname = c.fname, d.sfname = c.lname, d.tpid = 2;
            var e = {
                email: a.semail,
                token_provider: d.tpid,
                social_media_token: d.token
            };
            g.login.save(angular.toJson(e), function(b) {
                b.status === !0 ? (d.isLogin = !0, d.tenancyid = b.data.tenancy_id, d.userid = b.data.id, d.username = b.data.firstname, 1 === b.data.istenantadmin && (d.isAdmin = !0), i.path("/main")) : b.status === !1 && (d.modalInstance = f.open({
                    animation: a.animationsEnabled,
                    templateUrl: "views/socialsignup.html",
                    controller: "loginCtrl",
                    resolve: {}
                }))
            })
        }), d.closeAlerts = function(a) {
            d.alerts.splice(1, a), d.alerts = []
        }, a.closeAlerts = function(a) {
            d.loginalerts.splice(1, a), d.loginalerts = []
        }, a.loginSubmit = function() {
            var b = {
                email: a.email,
                password: a.password,
                token_provider: "0"
            };
            g.login.save(angular.toJson(b), function(b) {
                a.alerts = [], b.status === !0 ? (console.log("login"), d.isLogin = !0, d.tenancyid = b.data.tenancy_id, d.userid = b.data.id, d.username = b.data.firstname, i.path("/main")) : a.alerts.push({
                    msg: "Invalid Username or password. Please try again",
                    type: "danger"
                }), 1 === b.data.istenantadmin && (d.isAdmin = !0), 0 === b.data.istenantadmin && (d.isAdmin = !1)
            })
        }, a.$watch("isLogin", function() {
            h.set("isLogin", d.isLogin)
        }, !0), a.$watch("userid", function() {
            h.set("userid", d.userid)
        }, !0), a.$watch("tenancyid", function() {
            h.set("tenancyid", d.tenancyid)
        }, !0), a.$watch("username", function() {
            h.set("username", d.username)
        }, !0), a.$watch("isAdmin", function() {
            h.set("isAdmin", d.isAdmin)
        }, !0), k(), d.signup = function() {
            d.alerts = [], d.modalInstance = f.open({
                animation: a.animationsEnabled,
                templateUrl: "views/sign-up.html",
                controller: "popupCtrl",
                resolve: {}
            })
        }, a.forgotpassword = function() {
            d.alerts = [], d.modalInstance = f.open({
                animation: a.animationsEnabled,
                templateUrl: "views/forgot-password.html",
                controller: "popupCtrl",
                resolve: {}
            })
        }, d.Logout = function() {
            d.unableLogin = !1, d.userid = void 0, d.userName = void 0, b.go("Login")
        }, a.closeAlerts = function(b) {
            a.alerts.splice(1, b), a.alerts = []
        }, a.closeAlert = function(b) {
            a.loginalerts.splice(1, b), a.loginalerts = []
        }, a.closeAlert = function(b) {
            d.errors.splice(1, b), d.errors = [], a.loginalerts.splice(1, b), a.loginalerts = []
        }, a.login = function() {
            a.alerts = [], j.login().then(function(b) {
                console.log(b), j.getUser().then(function(b) {
                    d.tpid = 1, d.semail = b.email, d.token = b.id, d.sfname = b.family_name, d.slname = b.given_name;
                    var c = {
                        email: a.semail,
                        token_provider: d.tpid,
                        social_media_token: d.token
                    };
                    g.login.save(angular.toJson(c), function(b) {
                        b.status === !0 ? (d.isLogin = !0, d.tenancyid = b.data.tenancy_id, d.userid = b.data.id, d.username = b.data.firstname, 1 === b.data.istenantadmin && (d.isAdmin = !0), i.path("/main")) : b.status === !1 && (d.modalInstance = f.open({
                            animation: a.animationsEnabled,
                            templateUrl: "views/socialsignup.html",
                            controller: "loginCtrl",
                            resolve: {}
                        }))
                    })
                })
            }, function(b) {
                console.log(b), a.alerts.push({
                    msg: "Cant connect at the moment try again latter",
                    type: "danger"
                })
            })
        }, a.collapsed = function() {
            a.collapsedold = !0, a.collapsednew = !1, a.fname = d.slname, a.lname = d.sfname
        }, a.collapsed1 = function() {
            a.collapsedold = !1, a.collapsednew = !0, a.fname = d.slname, a.lname = d.sfname
        }, a.check = function() {
            var b = {
                name: a.orgname
            };
            g.tanancy.save(b, function(b) {
                a.tenancy = b.data.tenancycode, a.orgdata = b.data, b.status === !1 && (a.errors = b.message)
            })
        }, a.checkcode = function() {
            a.alerts = [];
            var b = {
                tenancy_code: a.tenancy
            };
            g.tanancycode.save(b, function(b) {
                a.orgmessage = b.message, b.status === !1 && a.alerts.push({
                    msg: "Tenancyid already registered",
                    type: "danger"
                })
            })
        }, a.checkid = function() {
            a.alerts = [];
            var b = {
                tenancy_code: a.tenancycode
            };
            g.tanancycodecheck.save(b, function(b) {
                b.status === !0 ? (a.orgmessage = b.message, a.orgname = b.data.companyname, a.org = b.data) : a.alerts.push({
                    msg: "Enter Valid Tenancy Code",
                    type: "danger"
                })
            })
        }, a.socialsignup = function() {
            var b = {
                first_name: a.fname,
                last_name: a.lname,
                email: d.semail,
                tenancy_code: a.tenancy,
                is_tenant_admin: a.orgdata.istenantadmin,
                is_billable: a.orgdata.isbillable,
                token_provider: d.tpid,
                name: a.orgname,
                tenancy_id: "0",
                social_media_token: d.token
            };
            g.orgsignup.save(b, function(b) {
                a.alerts = [], a.responce = b.data, b.status === !0 ? (d.isLogin = !0, d.tenancyid = b.data.tenancy_id, d.userid = b.data.id, d.username = b.data.firstname, d.modalInstance.close(), 1 === b.data.istenantadmin && (d.isAdmin = !0), i.path("/main")) : b.status === !1 && (a.errors = b.message)
            })
        }, a.socialsignupnew = function() {
            var b = {
                first_name: a.fname,
                last_name: a.lname,
                email: d.semail,
                tenancy_code: a.tenancycode,
                is_tenant_admin: a.org.istenantadmin,
                is_billable: a.org.isbillable,
                token_provider: d.tpid,
                created_by: "0",
                name: a.orgname,
                tenancy_id: a.org.tenancy_id,
                social_media_token: d.token
            };
            g.orgsignup.save(b, function(b) {
                a.alerts = [], a.responce = b.data, b.status === !0 ? (d.isLogin = !0, d.tenancyid = b.data.tenancy_id, d.userid = b.data.id, d.username = b.data.firstname, d.modalInstance.close(), 1 === b.data.istenantadmin && (d.isAdmin = !0), i.path("/main")) : b.status === !1 && (a.errors = b.message)
            })
        }
    }]), angular.module("docubasic3App").controller("popupCtrl", ["$scope", "$state", "$timeout", "$rootScope", "$stateParams", "$uibModal", "loginService", function(a, b, c, d, e, f, g) {
        a.collapsed = function() {
            a.collapsedold = !0, a.collapsednew = !1
        }, a.collapsed1 = function() {
            a.collapsedold = !1, a.collapsednew = !0
        }, a.check = function() {
            var b = {
                name: a.signup.orgname
            };
            g.tanancy.save(b, function(b) {
                a.signup.tenancy = b.data.tenancycode, a.orgdata = b.data
            })
        }, a.checkcode = function() {
            a.alerts = [];
            var b = {
                tenancy_code: a.signup.tenancy
            };
            g.tanancycode.save(b, function(b) {
                a.signup.orgmessage = b.message, b.status === !1 && a.alerts.push({
                    msg: "Invalid Tenancy",
                    type: "danger"
                })
            })
        }, a.closeAlerts = function(b) {
            a.alerts.splice(1, b), a.alerts = []
        }, a.closeAlert = function(b) {
            a.errors.splice(1, b), a.errors = []
        }, a.checkid = function() {
            var b = {
                tenancy_code: a.signup.tenancycode
            };
            g.tanancycodecheck.save(b, function(b) {
                b.status === !0 ? (a.signup.orgname = b.data.companyname, a.org = b.data) : b.status === !1 && (a.errors = b.message)
            })
        }, a.emailFormat = /^[a-z]+[a-z0-9._]+@[a-z]+\.[a-z.]{2,5}$/, a.signup = function() {
            var b = {
                first_name: a.signup.fname,
                last_name: a.signup.lname,
                email: a.signup.email,
                tenancy_code: a.signup.tenancy,
                is_tenant_admin: a.orgdata.istenantadmin,
                is_billable: a.orgdata.isbillable,
                token_provider: "0",
                created_by: "0",
                name: a.signup.orgname,
                tenancy_id: "0",
                social_media_token: 0
            };
            g.orgsignup.save(b, function(b) {
                d.alerts = [], d.loginalerts = [], a.responce = b.data, b.status === !0 ? (a.signup = "", d.loginalerts.push({
                    msg: "Check your Email for password setup.",
                    type: "success"
                }), d.modalInstance.close()) : b.status === !1 && (a.errors = b.message)
            })
        }, a.signupnew = function() {
            var b = {
                first_name: a.signup.nfname,
                last_name: a.signup.nlname,
                email: a.signup.nemail,
                tenancy_code: a.tenancy,
                is_tenant_admin: a.org.istenantadmin,
                is_billable: a.org.isbillable,
                token_provider: "0",
                created_by: "0",
                name: a.signup.orgname,
                tenancy_id: a.org.tenancy_id,
                social_media_token: 0
            };
            g.orgsignup.save(b, function(b) {
                d.alerts = [], d.loginalerts = [], a.responce = b.data, b.status === !0 ? (a.signup = "", d.loginalerts.push({
                    msg: "Check your Email for password setup.",
                    type: "success"
                }), d.modalInstance.close()) : b.status === !1 && (a.errors = b.message)
            })
        }, a.forgetPassword = function() {
            var b = {
                email: a.email
            };
            g.frgtpassword.save(b, function(b) {
                a.alerts = [], b.status === !1 ? a.errors = b.message : b.status === !0 && a.alerts.push({
                    msg: "Check Your Email",
                    type: "success"
                })
            })
        }
    }]), angular.module("docubasic3App").controller("billingctrl", ["$scope", "$state", "$timeout", "$rootScope", "$routeParams", "$window", "settingservice", "localStorageService", "$location", "billingservice", function(a, b, c, d, e, f, g, h, i, j) {
        d.tenancyid = h.get("tenancyid"), d.username = h.get("username"), d.userid = h.get("userid");
        var k = {
            id: d.tenancyid
        };
        j.getbilldetail.query(k, function(b) {
            a.alerts = [], a.billingdata = b.data
        }), j.getpackages.query({}, function(b) {
            a.alerts = [], a.packagedata = b.data
        })
    }]), angular.module("docubasic3App").controller("userctrl", ["$scope", "$state", "$timeout", "$rootScope", "$routeParams", "$window", "settingservice", "localStorageService", "$location", "userservice", "sweetAlert", "$route", "$anchorScroll", function(a, b, c, d, e, f, g, h, i, j, k, l, m) {
        function n() {
            a.collapsed = !1, a.edit = !1;
            var b = {
                id: d.tenancyid
            };
            j.getuserdetail.query(b, function(b) {
                a.userdata = b.data
            })
        }
        d.userid = h.get("userid"), d.isAdmin = h.get("isAdmin"), d.tenancyid = h.get("tenancyid"), d.username = h.get("username"), a.$route = l;
        var o = function() {
            a.alerts = [], a.errors = [], c(o, 1e4)
        };
        c(o, 1e4), a.closeAlerts = function(b) {
            a.alerts.splice(1, b), a.alerts = []
        }, a.closeAlert = function(b) {
            a.errors.splice(1, b), a.errors = []
        }, a.closeuser = function() {
            a.collapsed = !1, a.update = !1, a.hideadd = !1, a.fname = "", a.lname = "", a.utype = "", a.message = "", a.email = ""
        }, a.usertype = [{
            id: 1,
            type: "Tenant Admin"
        }, {
            id: 0,
            type: "End User"
        }], a.insertuser = function() {
            var b = {
                first_name: a.fname,
                last_name: a.lname,
                is_tenant_admin: a.utype,
                admin_message: a.message,
                email: a.email,
                created_by: d.userid,
                tenancy_id: d.tenancyid
            };
            j.postuserdetail.save(b, function(b) {
                a.alerts = [], a.userdata = b, b.status === !0 ? (a.alerts.push({
                    msg: "User added successfully",
                    type: "success"
                }), a.collapsed = !1, a.fname = "", a.lname = "", a.utype = "", a.message = "", a.email = "", n()) : b.status === !1 && (a.errors = b.message)
            })
        }, a.edituser = function(b) {
            a.hideadd = !0, a.edit = !0, a.collapsed = !0, a.update = !0, a.id = b.user_id, a.fname = b.first_name, a.lname = b.last_name, a.email = b.email, 1 === b.is_tenant_admin ? a.utype = 1 : a.utype = 0, i.hash("top"), m()
        }, a.updateuser = function() {
            var b = {
                first_name: a.fname,
                last_name: a.lname,
                is_tenant_admin: a.utype,
                email: a.email,
                updated_by: d.userid,
                tenancy_id: d.tenancyid,
                id: a.id
            };
            j.updateuserdetail.save(b, function(b) {
                a.alerts = [], b.status === !0 && (a.collapsed = !1, a.update = !1, a.hideadd = !1, a.alerts.push({
                    msg: "User updated successfully",
                    type: "success"
                }), a.fname = "", a.lname = "", a.utype = "", a.message = "", a.email = "", n()), b.status === !1 && (a.errors = b.message)
            })
        }, a.deleteuser = function(b) {
            k.swal({
                title: "Are you sure you want to delete?",
                type: "warning",
                showCancelButton: !0,
                confirmButtonColor: "#DD6B55",
                confirmButtonText: "Yes, delete it!",
                cancelButtonText: "No, cancel!",
                closeOnConfirm: !1,
                closeOnCancel: !1
            }, function(c) {
                if (c) {
                    var e = {
                        id: b.user_id,
                        updated_by: d.userid
                    };
                    j.deleteuserdetail.save(e, function(b) {
                        a.alerts = [], b.status === !0 && n()
                    }), k.swal("Deleted!", "User deleted successfully", "success")
                } else k.swal("Cancelled")
            })
        }, n()
    }]), angular.module("docubasic3App").controller("companysettingCtrl", ["$scope", "$state", "$timeout", "$rootScope", "$stateParams", "$window", "settingservice", "localStorageService", "$location", "userservice", function(a, b, c, d, e, f, g, h, i, j) {
        function k() {
            var b = {
                tenancy_id: d.tenancyid,
                created_by: d.userid
            };
            g.company.save(b, function(b) {
                a.orgdata = b.data, a.country = b.data.country_id, a.state = b.data.state_id, a.money = a.orgdata[0].currency_id, a.countrydetail = a.orgdata[0].country_id, a.statedetail = a.orgdata[0].state_id
            }), g.country.query({}, function(b) {
                a.allProducts = b.data.country, a.allstates = b.data.states
            }), g.currancy.get({}, function(b) {
                a.currancys = b.data.Currency
            });
            var c = {
                id: d.tenancyid
            };
            j.getuserdetail.query(c, function(b) {
                a.alerts = [], a.userdata = b.data.users
            })
        }
        d.tenancyid = h.get("tenancyid"), d.userid = h.get("userid"), d.isAdmin = h.get("isAdmin"), d.username = h.get("username"), d.companyinfosection = {
            "background-color": "green"
        }, a.priceblock = function() {
            a.pricesection = !0, a.discount = !1, a.tax = !1
        }, a.discountsection = function() {
            a.discount = !0, a.pricesection = !1, a.tax = !1
        }, a.taxsection = function() {
            a.discount = !1, a.pricesection = !1, a.tax = !0
        }, a.closeAlerts = function(b) {
            a.alerts.splice(1, b), a.alerts = []
        }, a.closeAlert = function(b) {
            a.errors.splice(1, b), a.errors = []
        }, a.closemodal = function() {
            console.log("hi"), d.modalInstance.close()
        }, a.ph_numbr = /[0-9-()]*[1-9][0-9-()]*/, a.edit = function() {
            a.editaddress = !0, a.mainaddress = a.orgdata[0].address, a.address1 = a.orgdata[0].address_line_1, a.city = a.orgdata[0].city, a.urlsite = a.orgdata[0].url, a.domain = a.orgdata[0].domain, a.address2 = a.orgdata[0].address_line_2, a.country = a.orgdata[0].country_id, a.state = a.orgdata[0].state_id, a.money = a.orgdata[0].currency_id, a.phone = a.orgdata[0].phone_number, a.aemail = a.orgdata[0].email_address
        }, a.editadmin = function() {
            a.showadmin = !0
        }, a.canceladdress = function() {
            a.editaddress = !1, a.mainaddress = "", a.address1 = "", a.city = "", a.urlsite = "", a.domain = "", a.address2 = ""
        }, a.cancleeditadmin = function() {
            a.showadmin = !1
        }, a.send = function() {
            a.alerts = [];
            var b = {
                tenancy_id: d.tenancyid,
                image_raw: a.files[0].base64,
                updated_by: d.userid
            };
            g.chngelogo.save(angular.toJson(b), function(b) {
                a.message = b.message, b.status === !0 && (a.imageptah = b.data.logo_path, k()), b.status === !1 && (a.alerts.push({
                    msg: "error occurd",
                    type: "denger"
                }), k())
            })
        }, a.saveadmin = function() {
            a.adminemail = a.adminsuser;
            var b = {
                tenancy_id: d.tenancyid,
                updated_by: d.userid,
                account_admin: a.adminemail
            };
            g.saveadmin.save(b, function(b) {
                a.showadmin = !1, a.message = b.message, b.status === !0 && (a.alerts.push({
                    msg: "Admin updated successfully",
                    type: "success"
                }), k())
            })
        }, a.address = function() {
            a.alerts = [];
            var b = {
                tenancy_id: d.tenancyid,
                address: a.mainaddress,
                city: a.city,
                country_id: a.country,
                state_id: a.state,
                url: a.urlsite,
                updated_by: d.userid,
                address2: a.address2,
                address1: a.address1,
                domain: a.domain,
                email_address: a.aemail,
                phone_number: a.phone
            };
            g.address.save(b, function(b) {
                a.message = b.message, b.status === !0 ? (a.alerts.push({
                    msg: "Address updated successfully",
                    type: "success"
                }), a.mainaddress = "", a.city = "", a.country = "", a.state = "", a.urlsite = "", a.address2 = "", a.address1 = "", a.editaddress = !1, k()) : b.status === !1 && (a.errors = b.message)
            })
        }, a.currancy = function() {
            a.alerts = [];
            var b = {
                tenancy_id: d.tenancyid,
                currency_id: a.money,
                updated_by: d.userid
            };
            g.currancyes.save(b, function(b) {
                a.collapsed = !1, a.message = b.message, b.status === !0 && (a.alerts.push({
                    msg: "currency updated successfully",
                    type: "success"
                }), k())
            })
        }, k()
    }]), angular.module("docubasic3App").controller("pricingsettingCtrl", ["$scope", "$state", "$timeout", "$rootScope", "$stateParams", "$window", "settingservice", "localStorageService", "$location", "userservice", "sweetAlert", "$anchorScroll", function(a, b, c, d, e, f, g, h, i, j, k, l) {
        function m() {
            g.currancy.get({}, function(b) {
                a.currancys = b.data.Currency
            });
            var b = {
                tenancy_id: d.tenancyid
            };
            g.vendors.save(b, function(b) {
                a.vendorsdata = b.data
            }), a.sources = [{
                id: 1,
                type: "Insource"
            }, {
                id: 2,
                type: "Outsource"
            }];
            var e = {
                tenancy_id: d.tenancyid
            };
            g.allpriceblock.save(e, function(b) {
                a.pricealldata = b.data
            }), a.dbased = [{
                id: "1",
                type: "Amount"
            }, {
                id: "2",
                type: "Percentage"
            }];
            var f = {
                tenancy_id: d.tenancyid
            };
            g.getdiscount.save(f, function(b) {
                a.discountblock = b.data
            });
            var h = {
                tenancy_id: d.tenancyid
            };
            g.gettax.save(h, function(b) {
                a.taxblock = b.data
            }), c(n, 1e4)
        }
        d.tenancyid = h.get("tenancyid"), d.userid = h.get("userid"), d.isAdmin = h.get("isAdmin"), d.username = h.get("username"), a.closeAlerts = function(b) {
            a.alerts.splice(1, b), a.alerts = []
        }, a.closeAlert = function(b) {
            a.errors.splice(1, b), a.errors = []
        }, a.closemodal = function() {
            console.log("hi"), d.modalInstance.close()
        }, d.alerts = [], a.loginalerts = [], a.pricesection = function() {
            a.collapsed1 = !1, a.collapsed2 = !1,
                a.pricesectionshow = !0
        }, a.closeprice = function() {
            a.pricesectionshow = !1, a.pricesectionshow = "", a.updateprice = "", a.productname = "", a.skuid = "", a.quantity = "", a.unitcost = "", a.unitprice = "", a.source = "", a.discriptions = "", a.totalprice = "", a.totalcost = "", a.moneys = "", a.updateprice = !1
        }, a.discontsection = function() {
            a.collapsed2 = !1, a.pricesectionshow = !1, a.collapsed1 = !0
        }, a.closediscount = function() {
            a.collapsed1 = !1, a.discountname = "", a.distype = "", a.value = "", a.dupdate = !1
        }, a.taxsection = function() {
            a.collapsed1 = !1, a.pricesectionshow = !1, a.collapsed2 = !0
        }, a.closetax = function() {
            a.collapsed2 = !1, a.taxname = "", a.taxPercentage = "", a.tupdate = !1
        };
        var n = function() {
            a.alerts = [], a.errors = [], c(n, 1e4)
        };
        a.mul = function(b, c) {
            a.totalcost = b * c
        }, a.mul1 = function(b, c) {
            a.totalprice = b * c
        }, a.mulall = function(b, c, d) {
            a.totalcost = b * c, a.totalprice = b * d
        }, a.submitdata = function() {
            a.alerts = [];
            var b = {
                tenancy_id: d.tenancyid,
                productname: a.productname,
                skuid: a.skuid,
                quantity: a.quantity,
                unitcost: a.unitcost,
                unitprice: a.unitprice,
                currency_id: a.moneys,
                vendor_id: a.vendors,
                created_by: d.userid,
                type: a.source,
                description: a.discriptions,
                totalcost: a.totalcost,
                totalprice: a.totalprice
            };
            g.pricepost.save(b, function(b) {
                a.price = b.data, b.status === !0 ? (a.alerts.push({
                    msg: "Price block added successfully",
                    type: "success"
                }), a.pricesectionshow = !1, a.pricesectionshow = "", a.updateprice = "", a.productname = "", a.skuid = "", a.quantity = "", a.unitcost = "", a.unitprice = "", a.source = "", a.discriptions = "", a.totalprice = "", a.totalcost = "", a.moneys = "", m()) : b.status === !1 && (a.errors = b.message)
            })
        }, a.getdata = function(b) {
            a.closetax(), a.closediscount(), a.pricesectionshow = !0, a.updateprice = !0, d.id = b.id, a.productname = b.productname, a.skuid = b.skuid, a.quantity = b.quantity, a.unitcost = b.unitcost, a.unitprice = b.unitprice, a.discriptions = b.description, a.totalcost = b.totalcost, a.totalprice = b.totalprice, a.source = b.type, a.moneys = b.currency_id
        }, a.updatepriceblock = function() {
            a.alerts = [];
            var b = {
                id: d.id,
                tenancy_id: d.tenancyid,
                productname: a.productname,
                skuid: a.skuid,
                quantity: a.quantity,
                unitcost: a.unitcost,
                unitprice: a.unitprice,
                currency_id: a.moneys,
                vendor_id: a.vendors,
                type: a.source,
                description: a.discriptions,
                updated_by: d.userid,
                totalcost: a.totalcost,
                totalprice: a.totalprice
            };
            g.updateprice.update(b, function(b) {
                a.allresource = b.data, b.status === !0 ? (a.alerts.push({
                    msg: "Price block Updated successfully",
                    type: "success"
                }), a.pricesectionshow = !1, a.updateprice = !1, a.pricesectionshow = "", a.updateprice = "", a.productname = "", a.skuid = "", a.quantity = "", a.unitcost = "", a.unitprice = "", a.source = "", a.discriptions = "", a.totalprice = "", a.totalcost = "", a.moneys = "", m()) : b.status === !1 && (a.errors = b.message, m())
            })
        }, a.deleteprice = function(b) {
            k.swal({
                title: "Are you sure you want to delete?",
                type: "warning",
                showCancelButton: !0,
                confirmButtonColor: "#DD6B55",
                confirmButtonText: "Yes, delete it!",
                cancelButtonText: "No, cancel!",
                closeOnConfirm: !1,
                closeOnCancel: !1
            }, function(c) {
                if (c) {
                    a.id = b.id;
                    var e = {
                        id: a.id,
                        updated_by: d.userid
                    };
                    g.deleteprice.save(e, function(b) {
                        a.allresource = b.data, b.status === !0 ? (a.pricesectionshow = !1, a.pricesectionshow = "", a.updateprice = "", a.productname = "", a.skuid = "", a.quantity = "", a.unitcost = "", a.unitprice = "", a.source = "", a.discriptions = "", a.totalprice = "", a.totalcost = "", a.moneys = "", a.updateprice = !1, m()) : b.status === !1 && a.alerts.push({
                            msg: "Error occurd",
                            type: "danger"
                        })
                    }), k.swal("Deleted!", "Price block Deleted successfully", "success")
                } else k.swal("Cancelled")
            })
        }, a.adddiscount = function() {
            a.alerts = [];
            var b = {
                tenancy_id: d.tenancyid,
                name: a.discountname,
                type: a.distype,
                value: a.value,
                created_by: d.userid
            };
            g.postdiscount.save(b, function(b) {
                a.discountblock = b.status, b.status === !0 ? (a.alerts.push({
                    msg: "Discount added successfully",
                    type: "success"
                }), m(), a.collapsed1 = !1, a.discountname = "", a.distype = "", a.value = "") : b.status === !1 && (a.errors = b.message)
            })
        }, a.discountdata = function(b) {
            a.closeprice(), a.closetax(), a.collapsed1 = !0, a.dupdate = !0, a.id = b.id, a.discountname = b.discountname, a.distype = b.type, a.value = b.value, i.hash("top"), l()
        }, a.updatediscount = function() {
            a.alerts = [];
            var b = {
                id: a.id,
                name: a.discountname,
                type: a.distype,
                value: a.value,
                updated_by: d.userid,
                tenancy_id: d.tenancyid
            };
            g.updatediscount.update(b, function(b) {
                a.discountblock = b.status, b.status === !0 ? (a.alerts.push({
                    msg: "Discount Updated successfully",
                    type: "success"
                }), a.collapsed1 = !1, a.dupdate = !1, a.discountname = "", a.distype = "", a.value = "", m()) : b.status === !1 && (a.errors = b.message)
            })
        }, a.deletediscount = function(b) {
            k.swal({
                title: "Are you sure you want to delete?",
                type: "warning",
                showCancelButton: !0,
                confirmButtonColor: "#DD6B55",
                confirmButtonText: "Yes, delete it!",
                cancelButtonText: "No, cancel!",
                closeOnConfirm: !1,
                closeOnCancel: !1
            }, function(c) {
                if (c) {
                    a.id = b.id;
                    var e = {
                        id: a.id,
                        updated_by: d.userid
                    };
                    g.deletediscount.save(e, function(b) {
                        a.allresource = b.data, b.status === !0 ? (a.collapsed1 = !1, a.discountname = "", a.distype = "", a.value = "", a.dupdate = !1, m()) : b.status === !1 && a.alerts.push({
                            msg: "Error occurd",
                            type: "danger"
                        })
                    }), k.swal("Deleted!", "Discount Deleted successfully.", "success")
                } else k.swal("Cancelled")
            })
        }, a.addtax = function() {
            a.alerts = [];
            var b = {
                tenancy_id: d.tenancyid,
                created_by: d.userid,
                percentage: a.taxPercentage,
                taxname: a.taxname
            };
            g.posttax.save(b, function(b) {
                a.taxblock = b.data, b.status === !0 ? (a.alerts.push({
                    msg: "Tax added successfully",
                    type: "success"
                }), a.taxname = "", a.taxPercentage = "", a.collapsed2 = !1, m()) : b.status === !1 && (a.errors = b.message)
            })
        }, a.updatetaxdata = function(b) {
            a.closediscount(), a.closeprice(), a.collapsed2 = !0, a.tupdate = !0, a.id = b.id, a.taxPercentage = b.percentage, a.taxname = b.taxname, i.hash("top"), l()
        }, a.updatetax = function() {
            a.alerts = [];
            var b = {
                id: a.id,
                percentage: a.taxPercentage,
                taxname: a.taxname,
                updated_by: d.userid,
                tenancy_id: d.tenancyid
            };
            g.updatetax.update(b, function(b) {
                a.taxblock = b.data, b.status === !0 ? (a.alerts.push({
                    msg: "Tax Updated successfully",
                    type: "success"
                }), a.taxname = "", a.taxPercentage = "", a.tupdate = !1, a.collapsed2 = !1, m()) : b.status === !1 && (a.errors = b.message)
            })
        }, a.deletetax = function(b) {
            k.swal({
                title: "Are you sure you want to delete?",
                type: "warning",
                showCancelButton: !0,
                confirmButtonColor: "#DD6B55",
                confirmButtonText: "Yes, delete it!",
                cancelButtonText: "No, cancel!",
                closeOnConfirm: !1,
                closeOnCancel: !1
            }, function(c) {
                if (c) {
                    a.id = b.id;
                    var e = {
                        id: a.id,
                        updated_by: d.userid
                    };
                    g.deletetax.save(e, function(b) {
                        a.allresource = b.data, b.status === !0 ? (a.collapsed2 = !1, a.taxname = "", a.taxPercentage = "", a.tupdate = !1, m()) : b.status === !1 && a.alerts.push({
                            msg: "Error occurd",
                            type: "danger"
                        })
                    }), k.swal("Deleted!", "Tax Deleted successfully", "success")
                } else k.swal("Cancelled")
            })
        }, m()
    }]), angular.module("docubasic3App").controller("taskcategoryCtrl", ["$scope", "$state", "$timeout", "$rootScope", "$stateParams", "$window", "settingservice", "localStorageService", "$location", "userservice", "sweetAlert", function(a, b, c, d, e, f, g, h, i, j, k) {
        function l() {
            var b = {
                tenancy_id: d.tenancyid
            };
            g.task.save(b, function(b) {
                a.gettasks = b.data
            })
        }
        d.tenancyid = h.get("tenancyid"), d.userid = h.get("userid"), d.isAdmin = h.get("isAdmin"), d.username = h.get("username"), a.closeAlerts = function(b) {
            a.alerts.splice(1, b), a.alerts = []
        }, a.closeAlert = function(b) {
            a.errors.splice(1, b), a.errors = []
        }, a.closemodal = function() {
            console.log("hi"), d.modalInstance.close()
        };
        var m = function() {
            a.alerts = [], a.errors = [], c(m, 1e4)
        };
        c(m, 1e4), a.tasksection = function() {
            a.collapsed = !0
        }, a.closetask = function() {
            a.collapsed = !1, a.taskname = "", a.update = !1
        }, a.insert = function() {
            a.alerts = [];
            var b = {
                categoryname: a.taskname,
                created_by: d.userid,
                tenancy_id: d.tenancyid
            };
            g.tasks.save(b, function(b) {
                a.message = b.message, b.status === !0 ? (a.alerts.push({
                    msg: "Task category added successfully",
                    type: "success"
                }), a.taskname = "", a.collapsed = !1, l()) : b.status === !1 && (a.errors = b.message)
            })
        }, a.updatetask = function(b) {
            a.collapsed = !0, a.update = !0, a.taskname = b.categoryname, a.id = b.id
        }, a.updatetaskdata = function() {
            a.alerts = [];
            var b = {
                categoryname: a.taskname,
                updated_by: d.userid,
                tenancy_id: d.tenancyid,
                id: a.id
            };
            g.updatetask.save(b, function(b) {
                a.allresource = b.data, b.status === !0 ? (a.alerts.push({
                    msg: "Task category updated successfully",
                    type: "success"
                }), a.taskname = "", a.collapsed = !1, a.update = !1, l()) : b.status === !1 && (a.errors = b.message)
            })
        }, a.deletetask = function(b) {
            k.swal({
                title: "Are you sure want to delete?",
                type: "warning",
                showCancelButton: !0,
                confirmButtonColor: "#DD6B55",
                confirmButtonText: "Yes, delete it!",
                cancelButtonText: "No, cancel!",
                closeOnConfirm: !1,
                closeOnCancel: !1
            }, function(c) {
                if (c) {
                    a.id = b.id;
                    var e = {
                        id: a.id,
                        updated_by: d.userid
                    };
                    g.deletetask.save(e, function(b) {
                        a.allresource = b.data, b.status === !0 ? (a.collapsed = !1, a.taskname = "", a.update = !1, l()) : b.status === !1 && (a.alerts.push({
                            msg: "Error occurd",
                            type: "danger"
                        }), l())
                    }), k.swal("Deleted!", "Task category Deleted successfully", "success")
                } else k.swal("Cancelled")
            }), a.alerts = []
        }, l()
    }]), angular.module("docubasic3App").controller("resourcetypeCtrl", ["$scope", "$state", "$timeout", "$rootScope", "$stateParams", "$window", "settingservice", "localStorageService", "$location", "userservice", "sweetAlert", function(a, b, c, d, e, f, g, h, i, j, k) {
        function l() {
            var b = {
                tenancy_id: d.tenancyid
            };
            g.vendors.save(b, function(b) {
                a.vendorsdata = b.data
            }), a.sources = [{
                id: "1",
                type: "Insource"
            }, {
                id: "2",
                type: "Outsource"
            }];
            var e = {
                tenancy_id: d.tenancyid
            };
            g.getresource.save(e, function(b) {
                a.allresource = b.data
            }), c(m, 1e4)
        }
        d.tenancyid = h.get("tenancyid"), d.userid = h.get("userid"), d.isAdmin = h.get("isAdmin"), d.username = h.get("username"), a.closeAlerts = function(b) {
            a.alerts.splice(1, b), a.alerts = []
        }, a.closeAlert = function(b) {
            a.errors.splice(1, b), a.errors = []
        }, a.closemodal = function() {
            console.log("hi"), d.modalInstance.close()
        }, a.resourcesection = function() {
            a.collapsed = !0
        }, a.closeresource = function() {
            a.collapsed = !1, a.resourcename = "", a.vendors = "", a.source = "", a.dailycost = "", a.dailyprice = "", a.update = !1
        };
        var m = function() {
            a.alerts = [], a.errors = [], c(m, 1e4)
        };
        a.insertresource = function() {
            a.alerts = [];
            var b = {
                tenancy_id: d.tenancyid,
                created_by: d.userid,
                name: a.resourcename,
                vendor_id: a.vendors,
                type: a.source,
                dailycost: a.dailycost,
                dailyprice: a.dailyprice,
                line_unit: a.unit
            };
            g.postresource.save(b, function(b) {
                a.message = b.message, b.status === !0 ? (a.alerts.push({
                    msg: "Resource added successfully",
                    type: "success"
                }), a.collapsed = !1, a.resourcename = "", a.vendors = "", a.source = "", a.dailycost = "", a.dailyprice = "", a.unit = "", l()) : b.status === !1 && (a.errors = b.message)
            })
        }, a.updateresource = function(b) {
            a.collapsed = !0, a.update = !0, a.resourcename = b.resourcename, a.vendors = b.vendorname, a.source = b.resourcetype, a.dailycost = b.dailycost, a.dailyprice = b.dailyprice, a.id = b.id, a.unit = b.line_unit
        }, a.updateresourcedata = function() {
            a.alerts = [];
            var b = {
                id: a.id,
                name: a.resourcename,
                vendor_id: a.vendors,
                type: a.source,
                dailycost: a.dailycost,
                dailyprice: a.dailyprice,
                updated_by: d.userid,
                tenancy_id: d.tenancyid,
                line_unit: a.unit
            };
            g.updateresource.update(b, function(b) {
                a.allresource = b.data, b.status === !0 ? (a.alerts.push({
                    msg: "Resource Updated successfully",
                    type: "success"
                }), a.collapsed = !1, a.update = !1, a.resourcename = "", a.vendors = "", a.source = "", a.dailycost = "", a.dailyprice = "", a.unit = "", l()) : b.status === !1 && (a.errors = b.message)
            })
        }, a.deleteresource = function(b) {
            k.swal({
                title: "Are you sure you want to delete?",
                type: "warning",
                showCancelButton: !0,
                confirmButtonColor: "#DD6B55",
                confirmButtonText: "Yes, delete it!",
                cancelButtonText: "No, cancel!",
                closeOnConfirm: !1,
                closeOnCancel: !1
            }, function(c) {
                if (c) {
                    a.id = b.id;
                    var e = {
                        id: a.id,
                        updated_by: d.userid
                    };
                    g.deleteresource.save(e, function(b) {
                        a.allresource = b.data, b.status === !0 ? l() : b.status === !1 && (a.alerts.push({
                            msg: "Error occurd",
                            type: "danger"
                        }), l())
                    }), k.swal("Deleted!", "Resource Deleted successfully", "success")
                } else k.swal("Cancelled")
            })
        }, l()
    }]), angular.module("docubasic3App").controller("vendorsCtrl", ["$scope", "$state", "$timeout", "$rootScope", "$stateParams", "$window", "settingservice", "localStorageService", "$location", "userservice", "sweetAlert", function(a, b, c, d, e, f, g, h, i, j, k) {
        function l() {
            g.country.query({}, function(b) {
                a.allProducts = b.data.country, a.allstates = b.data.states
            });
            var b = {
                tenancy_id: d.tenancyid
            };
            g.vendors.save(b, function(b) {
                a.vendorsdata = b.data
            })
        }
        d.tenancyid = h.get("tenancyid"), d.userid = h.get("userid"), d.isAdmin = h.get("isAdmin"), d.username = h.get("username"), a.closeAlerts = function(b) {
            a.alerts.splice(1, b), a.alerts = []
        }, a.closeAlert = function(b) {
            a.errors.splice(1, b), a.errors = []
        }, a.vendorsection = function() {
            a.collapsed = !0
        }, a.closemodal = function() {
            console.log("hi"), d.modalInstance.close()
        }, a.closevendor = function() {
            a.collapsed = !1, a.hidesubmit = !1, a.fname = "", a.vendorname = "", a.vendorid = "", a.phone = "", a.lname = "", a.email = "", a.displayname = "", a.mobile = "", a.url = "", a.addressdetail = "", a.country = "", a.state = "", a.city = "", a.pcode = "", a.summary = ""
        }, a.ph_numbr = /[0-9-()]*[1-9][0-9-()]*/;
        var m = function() {
            a.alerts = [], a.errors = [], c(m, 1e4)
        };
        c(m, 1e4), a.submitvendor = function() {
            a.alerts = [];
            var b = {
                tenancy_id: d.tenancyid,
                firstname: a.fname,
                lastname: a.lname,
                email: a.email,
                displayname: a.displayname,
                mobile: a.mobile,
                url: a.url,
                address: a.addressdetail,
                country_id: a.country,
                state_id: a.state,
                city: a.city,
                postalcode: a.pcode,
                user_id: d.userid,
                description: a.summary,
                created_by: d.userid,
                vendor_name: a.vendorname,
                vendor_code: a.vendorid,
                phone_number: a.phone
            };
            g.advendor.save(b, function(b) {
                a.message = b.message, b.status === !0 ? (a.alerts.push({
                    msg: "Vendor added successfully",
                    type: "success"
                }), a.collapsed = !1, a.fname = "", a.vendorname = "", a.vendorid = "", a.phone = "", a.lname = "", a.email = "", a.displayname = "", a.mobile = "", a.url = "", a.addressdetail = "", a.country = "", a.state = "", a.city = "", a.pcode = "", a.summary = "", l()) : b.status === !1 && (a.errors = b.message)
            })
        }, a.updatevendor = function(b) {
            a.collapsed = !0, a.hidesubmit = !0, d.id = b.vendor_id, a.fname = b.firstname, a.lname = b.lastname, a.email = b.email, a.displayname = b.displayname, a.mobile = b.mobile, a.url = b.url, a.addressdetail = b.address, a.country = b.country, a.state = b.state, a.city = b.city, a.pcode = b.postalcode, a.summary = b.description, a.vendorname = b.vendor_name, a.vendorid = b.vendor_code, a.phone = b.phone_number
        }, a.updatevendorblock = function() {
            a.alerts = [];
            var b = {
                id: d.id,
                firstname: a.fname,
                lastname: a.lname,
                email: a.email,
                displayname: a.displayname,
                mobile: a.mobile,
                url: a.url,
                address: a.addressdetail,
                country_id: a.country,
                state_id: a.state,
                city: a.city,
                postalcode: a.pcode,
                updated_by: d.userid,
                description: a.summary,
                tenancy_id: d.tenancyid,
                vendor_name: a.vendorname,
                vendor_code: a.vendorid,
                phone_number: a.phone
            };
            g.updatevendor.update(b, function(b) {
                a.allresource = b.data, b.status === !0 ? (a.alerts.push({
                    msg: "Vendor Updated successfully",
                    type: "success"
                }), a.collapsed = !1, a.hidesubmit = !1, a.vendorname = "", a.vendorid = "", a.phone = "", a.fname = "", a.lname = "", a.email = "", a.displayname = "", a.mobile = "", a.url = "", a.addressdetail = "", a.country = "", a.state = "", a.city = "", a.pcode = "", a.summary = "", l()) : b.status === !1 && (a.errors = b.message)
            })
        }, a.deletevendor = function(b) {
            k.swal({
                title: "Are you sure you want to delete?",
                type: "warning",
                showCancelButton: !0,
                confirmButtonColor: "#DD6B55",
                confirmButtonText: "Yes, delete it!",
                cancelButtonText: "No, cancel",
                closeOnConfirm: !1,
                closeOnCancel: !1
            }, function(c) {
                if (c) {
                    a.id = b.vendor_id;
                    var e = {
                        id: a.id,
                        updated_by: d.userid
                    };
                    g.deletevendor.save(e, function(b) {
                        a.allresource = b.data, b.status === !0 ? (a.collapsed = !1, a.hidesubmit = !1, a.fname = "", a.vendorname = "", a.vendorid = "", a.phone = "", a.lname = "", a.email = "", a.displayname = "", a.mobile = "", a.url = "", a.addressdetail = "", a.country = "", a.state = "", a.city = "", a.pcode = "", a.summary = "", a.alerts.push({
                            msg: "Vendor Deleted successfully",
                            type: "success"
                        }), l()) : b.status === !1 && (a.alerts.push({
                            msg: "Error occurd",
                            type: "danger"
                        }), l())
                    }), k.swal("Deleted!", "Vendor Deleted successfully", "success")
                } else k.swal("Cancelled")
            })
        }, l()
    }]), angular.module("docubasic3App").controller("clientCtrl", ["$scope", "$state", "$timeout", "$rootScope", "$stateParams", "$window", "settingservice", "localStorageService", "$location", "userservice", "sweetAlert", function(a, b, c, d, e, f, g, h, i, j, k) {
        function l() {
            g.country.query({}, function(b) {
                a.allProducts = b.data.country, a.allstates = b.data.states
            });
            var b = {
                tenancy_id: d.tenancyid
            };
            g.getclient.save(b, function(b) {
                a.clients = b.data
            })
        }
        d.tenancyid = h.get("tenancyid"), d.userid = h.get("userid"), d.isAdmin = h.get("isAdmin"), d.username = h.get("username"), a.closeAlerts = function(b) {
            a.alerts.splice(1, b), a.alerts = []
        }, a.clientsection = function() {
            a.collapsed = !0
        }, a.closemodal = function() {
            d.modalInstance.close()
        }, a.closeclient = function() {
            a.collapsed = !1, a.fname = "", a.lname = "", a.email = "", a.displayname = "", a.mobile = "", a.url = "", a.addressdetail = "", a.country = "", a.state = "", a.city = "", a.pcode = "", a.summary = "", a.phone = "", a.clientid = "", a.cname = "", a.update = !1
        }, a.closeAlert = function(b) {
            a.errors.splice(1, b), a.errors = []
        };
        var m = function() {
            a.alerts = [], a.errors = [], c(m, 4e3)
        };
        c(m, 4e3), a.ph_numbr = /[0-9-()]*[1-9][0-9-()]*/, a.submitclient = function() {
            a.alerts = [];
            var b = {
                tenancy_id: d.tenancyid,
                firstname: a.fname,
                lastname: a.lname,
                email: a.email,
                displayname: a.displayname,
                mobile: a.mobile,
                url: a.url,
                address: a.addressdetail,
                country_id: a.country,
                state_id: a.state,
                city: a.city,
                postalcode: a.pcode,
                user_id: d.userid,
                description: a.summary,
                created_by: d.userid,
                phone_number: a.phone,
                company_name: a.cname,
                customer_code: a.clientid
            };
            g.addclient.save(b, function(b) {
                a.message = b.message, b.status === !0 ? (a.alerts.push({
                    msg: "Client added successfully",
                    type: "success"
                }), a.collapsed = !1, a.fname = "", a.lname = "", a.email = "", a.displayname = "", a.mobile = "", a.url = "", a.addressdetail = "", a.country = "", a.state = "", a.city = "", a.pcode = "", a.summary = "", a.phone = "", a.clientid = "", a.cname = "", l()) : b.status === !1 && (a.errors = b.message)
            })
        }, a.updateclient = function(b) {
            a.collapsed = !0, a.update = !0, a.fname = b.firstname, a.lname = b.lastname, a.email = b.created_users_email, a.displayname = b.displayname, a.mobile = b.mobile, a.url = b.url, a.addressdetail = b.address, a.country = b.country, a.state = b.state, a.city = b.city, a.pcode = b.postalcode, a.summary = b.description, a.id = b.id, a.phone = b.phone_number, a.cname = b.company_name, a.clientid = b.customer_code
        }, a.updateclientdata = function() {
            a.alerts = [];
            var b = {
                id: a.id,
                firstname: a.fname,
                lastname: a.lname,
                email: a.email,
                displayname: a.displayname,
                mobile: a.mobile,
                url: a.url,
                address: a.addressdetail,
                country_id: a.country,
                state_id: a.state,
                city: a.city,
                postalcode: a.pcode,
                description: a.summary,
                updated_by: d.userid,
                tenancy_id: d.tenancyid,
                phone_number: a.phone,
                company_name: a.cname,
                customer_code: a.clientid
            };
            g.updateclient.update(b, function(b) {
                a.allresource = b.data, b.status === !0 ? (a.alerts.push({
                    msg: "Client Updated successfully",
                    type: "success"
                }), a.collapsed = !1, a.update = !1, a.fname = "", a.lname = "", a.email = "", a.displayname = "", a.mobile = "", a.url = "", a.addressdetail = "", a.country = "", a.state = "", a.city = "", a.pcode = "", a.summary = "", a.phone = "", a.clientid = "", a.cname = "", l()) : b.status === !1 && (a.errors = b.message)
            })
        }, a.delteclient = function(b) {
            k.swal({
                title: "Are you sure you want to delete?",
                type: "warning",
                showCancelButton: !0,
                confirmButtonColor: "#DD6B55",
                confirmButtonText: "Yes, delete it!",
                cancelButtonText: "No, cancel",
                closeOnConfirm: !1,
                closeOnCancel: !1
            }, function(c) {
                if (c) {
                    a.id = b.id;
                    var e = {
                        id: a.id,
                        updated_by: d.userid
                    };
                    g.deleteclient.save(e, function(b) {
                        a.allresource = b.data, b.status === !0 ? (a.collapsed = !1, a.fname = "", a.lname = "", a.email = "", a.displayname = "", a.mobile = "", a.url = "", a.addressdetail = "", a.country = "", a.state = "", a.city = "", a.pcode = "", a.summary = "", a.phone = "", a.clientid = "", a.cname = "", a.update = !1, l()) : b.status === !1 && (a.alerts.push({
                            msg: "Error occurd",
                            type: "danger"
                        }), l())
                    }), k.swal("Deleted!", "Client Deleted successfully", "success")
                } else k.swal("Cancelled")
            })
        }, l()
    }]), angular.module("docubasic3App").controller("projecttaskCtrl", ["$scope", "$state", "$timeout", "$rootScope", "$stateParams", "$window", "settingservice", "localStorageService", "$location", "userservice", "sweetAlert", function(a, b, c, d, e, f, g, h, i, j, k) {
        function l() {
            var b = {
                tenancy_id: d.tenancyid
            };
            g.getptask.save(b, function(b) {
                a.projecttask = b.data
            });
            var c = {
                tenancy_id: d.tenancyid
            };
            g.task.save(c, function(b) {
                a.tasks = b.data
            }), a.sources = [{
                id: 1,
                type: "Insource"
            }, {
                id: 2,
                type: "Outsource"
            }];
            var e = {
                tenancy_id: d.tenancyid
            };
            g.vendors.save(e, function(b) {
                a.vendorsdata = b.data
            })
        }
        d.tenancyid = h.get("tenancyid"), d.userid = h.get("userid"), d.isAdmin = h.get("isAdmin"), d.username = h.get("username"), a.closeAlerts = function(b) {
            a.alerts.splice(1, b), a.alerts = []
        }, a.closeAlert = function(b) {
            a.errors.splice(1, b), a.errors = []
        }, a.closemodal = function() {
            console.log("hi"), d.modalInstance.close()
        }, a.projecttasksection = function() {
            a.collapsed = !0
        }, a.closeprojecttask = function() {
            a.collapsed = !1, a.taskcategory = "", a.category = "", a.discription = "", a.taskdetail = "", a.vendors = "", a.mandays = "", a.source = "", a.dailycost = "", a.totalcost = "", a.dailyrate = "", a.totalrate = "", a.update = !1
        };
        var m = function() {
            a.alerts = [], a.errors = [], c(m, 1e4)
        };
        c(m, 1e4), a.submitprojecttask = function() {
            a.alerts = [];
            var b = {
                category_id: a.category,
                taskshortdesc: a.discription,
                description: a.taskdetail,
                vendor_id: a.vendors,
                mandays: a.mandays,
                resourcetype_id: a.source,
                dailycost: a.dailycost,
                totalcost: a.totalcost,
                dailyrate: a.dailyrate,
                totalrate: a.totalrate,
                user_id: d.userid,
                tenancy_id: d.tenancyid,
                created_by: d.userid
            };
            g.postptask.save(b, function(b) {
                a.projecttask = b.data, b.status === !0 ? (a.alerts.push({
                    msg: " project task added successfully",
                    type: "success"
                }), a.collapsed = !1, a.taskcategory = "", a.category = "", a.discription = "", a.taskdetail = "", a.vendors = "", a.mandays = "", a.source = "", a.dailycost = "", a.totalcost = "", a.dailyrate = "", a.totalrate = "", l()) : b.status === !1 && (a.errors = b.message)
            })
        }, a.updateprojecttask = function(b) {
            a.collapsed = !0, a.update = !0, a.category = b.category_id, a.discription = b.taskshortdesc, a.taskdetail = b.description, a.vendors = b.vendor_id, a.mandays = b.mandays, a.source = b.resourcetype_id, a.dailycost = b.dailycost, a.totalcost = b.totalcost, a.dailyrate = b.dailyrate, a.totalrate = b.totalrate, a.id = b.id
        }, a.updateprojecttaskdata = function() {
            a.alerts = [];
            var b = {
                category_id: a.category,
                taskshortdesc: a.discription,
                description: a.taskdetail,
                vendor_id: a.vendors,
                mandays: a.mandays,
                resourcetype_id: a.source,
                dailycost: a.dailycost,
                totalcost: a.totalcost,
                dailyrate: a.dailyrate,
                totalrate: a.totalrate,
                id: a.id,
                updated_by: d.userid,
                tenancy_id: d.tenancyid
            };
            g.updateprojecttask.update(b, function(b) {
                a.allresource = b.data, b.status === !0 ? (a.alerts.push({
                    msg: "Task Updated successfully",
                    type: "success"
                }), a.collapsed = !1, a.update = !1, a.category = "", a.discription = "", a.taskdetail = "", a.vendors = "", a.mandays = "", a.source = "", a.dailycost = "", a.totalcost = "", a.dailyrate = "", a.totalrate = "", l()) : b.status === !1 && (a.errors = b.message)
            })
        }, a.deleteprojecttask = function(b) {
            k.swal({
                title: "Are you sure you want to delete?",
                type: "warning",
                showCancelButton: !0,
                confirmButtonColor: "#DD6B55",
                confirmButtonText: "Yes, delete it!",
                cancelButtonText: "No, cancel!",
                closeOnConfirm: !1,
                closeOnCancel: !1
            }, function(c) {
                if (c) {
                    a.id = b.id;
                    var e = {
                        id: a.id,
                        updated_by: d.userid
                    };
                    g.deleteproject.save(e, function(b) {
                        a.allresource = b.data, b.status === !0 && (a.collapsed = !1, a.taskcategory = "", a.category = "", a.discription = "", a.taskdetail = "", a.vendors = "", a.mandays = "", a.source = "", a.dailycost = "", a.totalcost = "", a.dailyrate = "", a.totalrate = "", a.update = !1, l())
                    }), k.swal("Deleted!", "Task Deleted successfully", "success")
                } else k.swal("Cancelled")
            })
        }, l()
    }]), angular.module("docubasic3App").constant("apiUrl", function() {
        var a = "api/v1/",
            b = $("#apiRoot").attr("href") ? $("#apiRoot").attr("href") : "";
        return a = b + a, {
            orgname: a + "autocode",
            signup: a + "register",
            tcode: a + "chkcode",
            tcodecheck: a + "autocodeexist",
            admin: a + "auth",
            nation: a + "countries",
            states: a + "currencies",
            tasks: a + "displayCategory",
            companyinfo: a + "companyinfo",
            setaddress: a + "companyaddress",
            logo: a + "companylogo",
            changecurrancy: a + "companycurrency",
            addtask: a + "taskCategory",
            showprice: a + "allpriceblock",
            showvendors: a + "allvendors",
            addprice: a + "priceblocks",
            password: a + "passwordauth",
            resource: a + "allresources",
            addresource: a + "resources",
            rememberpassword: a + "forget",
            vendorsadd: a + "vendors",
            client: a + "customers",
            clientget: a + "allcustomers",
            projecttask: a + "allTask",
            projecttaskpost: a + "projectTask",
            getdiscontdata: a + "alldiscountblock",
            postdiscontdata: a + "discountblocks",
            gettaxdata: a + "alltaxblock",
            posttaxdata: a + "taxblocks",
            postnotedata: a + "notes",
            getnotedata: a + "allnote",
            userdata: a + "users/all/:id",
            billingdata: a + "billing/:id",
            packagedata: a + "packages",
            userdatapost: a + "users",
            getodosdata: a + "alltodos",
            addtodosdata: a + "todos",
            admindata: a + "accountadmin",
            changeadmin: a + "companyadmin",
            praposalcountdata: a + "proposal/:id",
            validuser: a + "chkemail",
            updatepricedata: a + "priceblocks/:id",
            priceblockupdate: a + "priceblocks/:id",
            updatevendordata: a + "vendors/:id",
            updateproject: a + "updateProject",
            updateclientdata: a + "customers/:id",
            updateresourcedata: a + "resources/:id",
            updatetaskdata: a + "updateCategory",
            updatediscountdata: a + "discountblocks/:id",
            updatetaxdata: a + "taxblocks/:id",
            updatenotedata: a + "notes/:id",
            completetask: a + "todos/complete/:id",
            userupdate: a + "users/:id",
            userdelete: a + "users/:id",
            completealltask: a + "todos/complete/:id",
            opentask: a + "todos/active/:id",
            uptask: a + "todos/:id",
            removetask: a + "deleteCategory",
            removeproject: a + "deleteProject",
            removenote: a + "deletent",
            deleteresourcedata: a + "resources/:id",
            deletevendordata: a + "vendors/:id",
            deleteclientdata: a + "customers/:id",
            deletepricedata: a + "priceblocks/:id",
            deletediscountdata: a + "discountblocks/:id",
            deletetaxdata: a + "taxblocks/:id",
            sendpagedata: a + "pages",
            getpage: a + "allpages",
            getstyles: a + "allstyles",
            sendstyledata: a + "style",
            updatestyle: a + "style/:id",
            pageupdate: a + "pages/:id",
            sendtempdata: a + "templates",
            tempdata: a + "alltemplates",
            tempdataupdate: a + "editTemplates",
            praposalcreate: a + "createProposal",
            pagelist: a + "selectedTemplates",
            pagesave: a + "saveContent",
            getpraposales: a + "allproposals",
            downloadpage: a + "downloadProposalpdf",
            praposaldelete: a + "deleteProposal",
            mailsend: a + "sendProposal",
            changepname: a + "editProposalname/:id",
            getcollab: a + "allCollaborators",
            clone: a + "proposal_details",
            getreadaccess: a + "inviteCollaborators",
            praposalwondata: a + "won/:id",
            praposallossdata: a + "loss/:id",
            reviewproposal: a + "customerReview",
            rejectproposal: a + "rejectProposal",
            signupload: a + "uploadSignature",
            approvepraposal: a + "approveProposal",
            getiamgesdata: a + "images",
            imageup: a + "upload",
            pagecontent: a + "pagecontent"
        }
    }()), angular.module("docubasic3App").factory("loginService", ["$resource", "apiUrl", function(a, b) {
        return {
            tanancy: a(b.orgname, {}),
            orgsignup: a(b.signup, {}),
            tanancycode: a(b.tcode, {}),
            tanancycodecheck: a(b.tcodecheck, {}),
            login: a(b.admin, {}),
            setpassword: a(b.password, {}),
            frgtpassword: a(b.rememberpassword, {}),
            checkuser: a(b.validuser, {})
        }
    }]), angular.module("docubasic3App").factory("settingservice", ["$resource", "apiUrl", function(a, b) {
        return {
            country: a(b.nation, {}, {
                query: {
                    method: "GET",
                    params: {},
                    isArray: !1
                }
            }),
            getpraposaldata: a(b.praposalcountdata, {
                id: "@id"
            }, {
                query: {
                    method: "GET"
                }
            }),
            getpraposalwon: a(b.praposalwondata, {
                id: "@id"
            }, {
                query: {
                    method: "GET"
                }
            }),
            getpraposalloss: a(b.praposallossdata, {
                id: "@id"
            }, {
                query: {
                    method: "GET"
                }
            }),
            currancy: a(b.states, {}, {
                get: {
                    method: "GET",
                    params: {},
                    isArray: !1
                }
            }),
            task: a(b.tasks, {}, {
                save: {
                    method: "POST",
                    params: {},
                    isArray: !1
                }
            }),
            company: a(b.companyinfo, {}, {
                save: {
                    method: "POST",
                    params: {},
                    isArray: !1
                }
            }),
            address: a(b.setaddress, {}, {
                save: {
                    method: "POST",
                    params: {},
                    isArray: !1
                }
            }),
            chngelogo: a(b.logo, {}, {
                save: {
                    method: "POST",
                    params: {},
                    isArray: !1
                }
            }),
            currancyes: a(b.changecurrancy, {}, {
                save: {
                    method: "POST",
                    params: {},
                    isArray: !1
                }
            }),
            tasks: a(b.addtask, {}, {
                save: {
                    method: "POST",
                    params: {},
                    isArray: !1
                }
            }),
            allpriceblock: a(b.showprice, {}, {
                save: {
                    method: "POST",
                    params: {},
                    isArray: !1
                }
            }),
            vendors: a(b.showvendors, {}, {
                save: {
                    method: "POST",
                    params: {},
                    isArray: !1
                }
            }),
            pricepost: a(b.addprice, {}, {
                save: {
                    method: "POST",
                    params: {},
                    isArray: !1
                }
            }),
            getresource: a(b.resource, {}, {
                save: {
                    method: "POST",
                    params: {},
                    isArray: !1
                }
            }),
            postresource: a(b.addresource, {}, {
                save: {
                    method: "POST",
                    params: {},
                    isArray: !1
                }
            }),
            advendor: a(b.vendorsadd, {}, {
                save: {
                    method: "POST",
                    params: {},
                    isArray: !1
                }
            }),
            addclient: a(b.client, {}, {
                save: {
                    method: "POST",
                    params: {},
                    isArray: !1
                }
            }),
            getclient: a(b.clientget, {}, {
                save: {
                    method: "POST",
                    params: {},
                    isArray: !1
                }
            }),
            getptask: a(b.projecttask, {}, {
                save: {
                    method: "POST",
                    params: {},
                    isArray: !1
                }
            }),
            postptask: a(b.projecttaskpost, {}, {
                save: {
                    method: "POST",
                    params: {},
                    isArray: !1
                }
            }),
            getdiscount: a(b.getdiscontdata, {}, {
                save: {
                    method: "POST",
                    params: {},
                    isArray: !1
                }
            }),
            postdiscount: a(b.postdiscontdata, {}, {
                save: {
                    method: "POST",
                    params: {},
                    isArray: !1
                }
            }),
            gettax: a(b.gettaxdata, {}, {
                save: {
                    method: "POST",
                    params: {},
                    isArray: !1
                }
            }),
            posttax: a(b.posttaxdata, {}, {
                save: {
                    method: "POST",
                    params: {},
                    isArray: !1
                }
            }),
            postnote: a(b.postnotedata, {}, {
                save: {
                    method: "POST",
                    params: {},
                    isArray: !1
                }
            }),
            getnote: a(b.getnotedata, {}, {
                save: {
                    method: "POST",
                    params: {},
                    isArray: !1
                }
            }),
            gettodos: a(b.getodosdata, {}, {
                save: {
                    method: "POST",
                    params: {},
                    isArray: !1
                }
            }),
            addtodos: a(b.addtodosdata, {}, {
                save: {
                    method: "POST",
                    params: {},
                    isArray: !1
                }
            }),
            getadmins: a(b.admindata, {}, {
                save: {
                    method: "POST",
                    params: {},
                    isArray: !1
                }
            }),
            saveadmin: a(b.changeadmin, {}, {
                save: {
                    method: "POST",
                    params: {},
                    isArray: !1
                }
            }),
            updateprice: a(b.priceblockupdate, {
                id: "@id"
            }, {
                update: {
                    method: "PUT",
                    isArray: !1
                }
            }),
            updatevendor: a(b.updatevendordata, {
                id: "@id"
            }, {
                update: {
                    method: "PUT",
                    isArray: !1
                }
            }),
            updateclient: a(b.updateclientdata, {
                id: "@id"
            }, {
                update: {
                    method: "PUT",
                    isArray: !1
                }
            }),
            updateprojecttask: a(b.updateproject, {}, {
                update: {
                    method: "POST",
                    isArray: !1
                }
            }),
            updateresource: a(b.updateresourcedata, {
                id: "@id"
            }, {
                update: {
                    method: "PUT",
                    isArray: !1
                }
            }),
            updatetask: a(b.updatetaskdata, {}, {
                save: {
                    method: "POST",
                    isArray: !1
                }
            }),
            updatediscount: a(b.updatediscountdata, {
                id: "@id"
            }, {
                update: {
                    method: "PUT",
                    isArray: !1
                }
            }),
            updatetax: a(b.updatetaxdata, {
                id: "@id"
            }, {
                update: {
                    method: "PUT",
                    isArray: !1
                }
            }),
            updatenote: a(b.updatenotedata, {
                id: "@id"
            }, {
                update: {
                    method: "PUT",
                    isArray: !1
                }
            }),
            chekedtask: a(b.completetask, {
                id: "@id"
            }, {
                update: {
                    method: "PUT",
                    isArray: !1
                }
            }),
            alltaskcomplete: a(b.completealltask, {
                id: "@id"
            }, {
                update: {
                    method: "PUT",
                    isArray: !1
                }
            }),
            incompletetask: a(b.opentask, {
                id: "@id"
            }, {
                update: {
                    method: "PUT",
                    isArray: !1
                }
            }),
            updatetodos: a(b.uptask, {
                id: "@id"
            }, {
                update: {
                    method: "PUT",
                    isArray: !1
                }
            }),
            deletetask: a(b.removetask, {}, {
                save: {
                    method: "POST",
                    params: {},
                    isArray: !1
                }
            }),
            deleteresource: a(b.deleteresourcedata, {
                id: "@id"
            }, {
                save: {
                    method: "DELETE",
                    isArray: !1
                }
            }),
            deletevendor: a(b.deletevendordata, {
                id: "@id"
            }, {
                save: {
                    method: "DELETE",
                    isArray: !1
                }
            }),
            deleteclient: a(b.deleteclientdata, {
                id: "@id"
            }, {
                save: {
                    method: "DELETE",
                    isArray: !1
                }
            }),
            deleteproject: a(b.removeproject, {}, {
                save: {
                    method: "POST",
                    params: {},
                    isArray: !1
                }
            }),
            deleteprice: a(b.deletepricedata, {
                id: "@id"
            }, {
                save: {
                    method: "DELETE",
                    isArray: !1
                }
            }),
            deletediscount: a(b.deletediscountdata, {
                id: "@id"
            }, {
                save: {
                    method: "DELETE",
                    isArray: !1
                }
            }),
            deletetax: a(b.deletetaxdata, {
                id: "@id"
            }, {
                save: {
                    method: "DELETE",
                    isArray: !1
                }
            }),
            deletenote: a(b.removenote, {}, {
                save: {
                    method: "POST",
                    params: {},
                    isArray: !1
                }
            })
        }
    }]), angular.module("docubasic3App").factory("billingservice", ["$resource", "apiUrl", function(a, b) {
        return {
            getbilldetail: a(b.billingdata, {
                id: "@id"
            }, {
                query: {
                    method: "GET",
                    isArray: !1
                }
            }),
            getpackages: a(b.packagedata, {}, {
                query: {
                    method: "GET",
                    isArray: !1
                }
            })
        }
    }]), angular.module("docubasic3App").controller("passwordctrl", ["$scope", "$state", "$timeout", "$rootScope", "$routeParams", "$window", "settingservice", "localStorageService", "$location", "loginService", function(a, b, c, d, e, f, g, h, i, j) {
        a.email = e.email, a.tenancyid = e.tenancy_id, a.activation_key = e.activation_key;
        var k = {
            email: a.email,
            activation_key: a.activation_key
        };
        j.checkuser.save(k, function(a) {
            d.alerts = [], a.status === !1 && (d.alerts.push({
                msg: "Password setup url has been expired.  ",
                type: "danger"
            }), i.path("/login"))
        });
        var l = function() {
            a.alerts = [], a.errors = [], c(l, 1e4)
        };
        c(l, 1e4), a.alerts = [], a.tip = "Password must be minimum 8 and maximum 20 characters long with 1 number, 1 special character, 1 Upper case and 1 lower case letter.", a.submit = function() {
            var b = {
                email: a.email,
                password: a.password,
                password_confirmation: a.repassword,
                tenancy_id: a.tenancyid
            };
            j.setpassword.save(b, function(b) {
                d.alerts = [], d.loginalerts = [], a.message = b.message, b.status === !0 ? (d.alerts.push({
                    msg: "Password updated, you can login from here.  ",
                    type: "success"
                }), i.path("/login")) : b.status === !1 && (a.errors = b.message)
            })
        }, a.closeAlerts = function(b) {
            a.alerts.splice(1, b), a.alerts = []
        }, a.closeAlert = function(b) {
            a.errors.splice(1, b), a.errors = []
        }, a.user = {
            name: {
                required: !0,
                minlength: 5,
                maxlength: 25
            }
        }
    }]), angular.module("docubasic3App").factory("userservice", ["$resource", "apiUrl", function(a, b) {
        return {
            getuserdetail: a(b.userdata, {
                id: "@id"
            }, {
                query: {
                    method: "GET"
                }
            }),
            postuserdetail: a(b.userdatapost, {}, {
                save: {
                    method: "POST"
                }
            }),
            updateuserdetail: a(b.userupdate, {
                id: "@id"
            }, {
                save: {
                    method: "PUT"
                }
            }),
            deleteuserdetail: a(b.userdelete, {
                id: "@id"
            }, {
                save: {
                    method: "DELETE"
                }
            })
        }
    }]), angular.module("docubasic3App").service("SocialLoginservice", function() {
        var a = {},
            b = {};
        return {
            getXxx: function() {
                return a
            },
            setXxx: function(b) {
                a = b
            },
            getname: function() {
                return b
            },
            setname: function(a) {
                b = a
            }
        }
    }), angular.module("docubasic3App").directive("pageTitle", pageTitle).directive("sideNavigation", sideNavigation).directive("minimalizaMenu", minimalizaMenu).directive("sparkline", sparkline).directive("icheck", icheck).directive("panelTools", panelTools).directive("panelToolsFullscreen", panelToolsFullscreen).directive("smallHeader", smallHeader).directive("animatePanel", animatePanel).directive("landingScrollspy", landingScrollspy).directive("clockPicker", clockPicker).directive("dateTimePicker", dateTimePicker),
    pageTitle.$inject = ["$rootScope", "$timeout"], sideNavigation.$inject = ["$timeout"], minimalizaMenu.$inject = ["$rootScope"], icheck.$inject = ["$timeout"], panelTools.$inject = ["$timeout"], panelToolsFullscreen.$inject = ["$timeout"], animatePanel.$inject = ["$timeout", "$state"], angular.module("docubasic3App").directive("touchSpin", touchSpin), angular.module("docubasic3App").directive("onlyWords", function() {
        return {
            require: "ngModel",
            link: function(a, b, c, d) {
                function e(a) {
                    var b = a.replace(/[^a-z,A-Z]/g, "");
                    return b !== a && (d.$setViewValue(b), d.$render()), b
                }
                d.$parsers.push(e)
            }
        }
    }), angular.module("docubasic3App").directive("onlyDigits", function() {
        return {
            require: "ngModel",
            link: function(a, b, c, d) {
                function e(a) {
                    var b = a.replace(/[^0-9,_@./#&+-]*$]/g, "");
                    return b !== a && (d.$setViewValue(b), d.$render()), b
                }
                d.$parsers.push(e)
            }
        }
    }), angular.module("docubasic3App").controller("proposalCtrl", ["$scope", "$rootScope", "localStorageService", "praposalservice", "$location", "$uibModal", "userservice", "settingservice", "sweetAlert", "$sce", function(a, b, c, d, e, f, g, h, i, j) {
        function k() {
            var c = {
                tenancy_id: b.tenancyid
            };
            d.getpagedata.save(c, function(b) {
                a.alerts = [], a.pdata = b.data[0].PageContent
            });
            var e = {
                template_id: b.template_id,
                tenancy_id: b.tenancyid,
                proposal_id: b.proposal_id
            };
            d.getpagelist.save(e, function(b) {
                a.alerts = [], a.pagedata = b.data
            });
            var f = {
                proposal_id: b.proposal_id,
                tenancy_id: b.tenancyid
            };
            d.getcollabraters.save(f, function(b) {
                a.alerts = [], a.collabdata = b.data
            });
            var i = {
                id: b.tenancyid
            };
            g.getuserdetail.query(i, function(b) {
                a.userdata = b.data
            });
            var j = {
                tenancy_id: b.tenancyid
            };
            h.getclient.save(j, function(b) {
                a.clients = b.data
            })
        }
        b.tenancyid = c.get("tenancyid"), b.userid = c.get("userid"), b.isAdmin = c.get("isAdmin"), b.username = c.get("username"), b.proposal_id = c.get("proposal_id"), b.template_id = c.get("template_id"), b.templatename = c.get("templatename"), k();
        var l = {
            tenancy_id: b.tenancyid,
            proposal_id: b.proposal_id
        };
        d.getiamage.save(l, function(b) {
            a.iamgedata = b.data.images
        }), a.closemodal = function() {
            b.modalInstance.close()
        }, a.download = function() {
            var a = "http://49.248.126.222:8282/services/public/api/v1/downloadProposalpdf/";
            a += b.proposal_id;
            var c = document.createElement("a");
            c.href = a, c.click()
        }, a.readaccess = function(c) {
            var e = {
                id: c.id,
                status: 2,
                updated_by: b.userid
            };
            d.readaccessapply.save(e, function(b) {
                a.alerts = [], b.status === !0 && k()
            })
        }, a.editaccess = function(c) {
            var e = {
                id: c.id,
                status: 1,
                updated_by: b.userid
            };
            d.readaccessapply.save(e, function(b) {
                a.alerts = [], b.status === !0 && k()
            })
        }, a.deletepraposal = function() {
            i.swal({
                title: "Are you sure want to delete?",
                type: "warning",
                showCancelButton: !0,
                confirmButtonColor: "#DD6B55",
                confirmButtonText: "Yes, delete it!",
                cancelButtonText: "No, cancel!",
                closeOnConfirm: !1,
                closeOnCancel: !1
            }, function(c) {
                if (c) {
                    var e = {
                        tenancy_id: b.tenancyid,
                        updated_by: b.userid,
                        proposal_id: b.proposal_id
                    };
                    d.deletepraposal.save(e, function() {
                        a.alerts = []
                    }), i.swal("Deleted!", "Task category Deleted successfully", "success")
                } else i.swal("Cancelled")
            })
        }, b.callme = function() {
            var c = {
                template_id: b.template_id,
                page_id: b.pageid,
                proposal_id: b.proposal_id,
                content: $("#proposalDropContainer").html(),
                created_by: b.userid,
                video_url: "https://www.youtube.com/embed/r4O4Xec60_k",
                tenancy_id: b.tenancyid
            };
            d.savepage.save(c, function(b) {
                a.alerts = [], a.ssss = b.data.page_contents
            })
        }, a.uploadimage = function() {
            b.modalInstance = f.open({
                animation: a.animationsEnabled,
                templateUrl: "views/imageupload.html",
                controller: "proposalCtrl",
                resolve: {}
            })
        }, a.emailwindow = function() {
            b.modalInstance = f.open({
                animation: a.animationsEnabled,
                templateUrl: "views/email.html",
                controller: "proposalCtrl",
                windowClass: "modal-lg",
                resolve: {}
            })
        }, a.opencollab = function() {
            b.modalInstance = f.open({
                animation: a.animationsEnabled,
                templateUrl: "views/collabraters.html",
                controller: "proposalCtrl",
                windowClass: "modal-lg",
                resolve: {}
            });
            var c = {
                proposal_id: b.proposal_id,
                tenancy_id: b.tenancyid
            };
            d.getcollabraters.save(c, function(b) {
                a.alerts = [], a.collabdata = b.data
            })
        }, a.clonepraposal = function() {
            b.modalInstance = f.open({
                animation: a.animationsEnabled,
                templateUrl: "views/clone.html",
                controller: "cloneCtrl",
                windowClass: "modal-lg"
            })
        }, a.send = function() {
            var c = {
                proposal_id: b.proposal_id,
                updated_by: b.userid,
                to: a.toemail,
                cc: a.cc,
                bcc: a.bcc,
                message: a.summernoteTextTwo
            };
            d.sendmail.save(c, function(c) {
                a.alerts = [], c.status === !0 ? (a.alerts.push({
                    msg: "Email Sended successfully",
                    type: "success"
                }), b.modalInstance.close()) : a.alerts.push({
                    msg: "Email Sending Failed",
                    type: "denger"
                })
            })
        }, a.sharecollab = function() {
            var c = {
                proposal_id: b.proposal_id,
                updated_by: b.userid,
                to: a.toemail,
                cc: a.cc,
                bcc: a.bcc,
                message: a.summernoteTextTwo
            };
            d.sendmail.save(c, function() {
                a.alerts = []
            })
        }, a.submitname = function() {
            var c = {
                tenancy_id: b.tenancyid,
                updated_by: b.userid,
                id: b.proposal_id,
                name: a.pname
            };
            d.updatename.query(c, function(c) {
                a.alerts = [], c.status === !0 && (a.show = !1, b.praposalname = a.pname)
            })
        }, a.sendpage = function(c) {
            console.log(a.htmlString), b.pageid = c.template_page_id;
            var e = {
                page_id: b.pageid,
                proposal_id: b.proposal_id
            };
            d.getpagecontent.save(e, function(c) {
                a.alerts = [], a.ssss = c.data.page_contents, a.htmlString = j.trustAsHtml(c.data.page_contents), a.htmlString = j.trustAsHtml(c.data.proposal_page_contents), b.loaddata()
            })
        }, a.priweviemode = function() {
            e.path("/preview")
        }, a.submitpage = function() {
            var c = {
                template_id: b.template_id,
                page_id: b.pageid,
                proposal_id: b.proposal_id,
                content: a.ssss,
                created_by: b.userid
            };
            d.savepage.save(c, function() {
                a.alerts = []
            })
        }, a.$watch("templatename", function() {
            c.set("templatename", b.templatename)
        }, !0), b.$on("SAVE_PROPOSAL_MARKUP", function() {
            console.log($("#proposalDropContainer").html())
        }), a.imageupload = function() {
            var c = {
                template_id: b.template_id,
                page_id: 2,
                proposal_id: b.proposal_id,
                image_raw: a.files[0].base64,
                tenancy_id: b.tenancyid,
                created_by: b.userid
            };
            d.upiamage.save(c, function(b) {
                a.iamge = b.data
            })
        }, a.selectimage = function(c) {
            a.imagepath = c.image_path, b.imageinsert(a.imagepath)
        }
    }]), angular.module("docubasic3App").directive("containerDirective", ["$rootScope", function(a) {
        return {
            restrict: "E",
            scope: {
                ssss: "=ngModel"
            },
            link: function() {
                $("#draggable").draggable({
                    revert: !0,
                    helper: "clone",
                    containment: "#wrapper"
                }), $(".window").draggable({
                    handle: ".bar"
                }), $(".textbox").on("click", function() {
                    $(this).find(".textbox").focus()
                }), $(".textbox").on("blur", function() {
                    $(".window").draggable("enable")
                }), $(".db-circle-widget").draggable(), $("#d").draggable().click(function() {
                    $(this).is(".ui-draggable-dragging") || ($(this).draggable("option", "disabled", !0), $(this).attr("contenteditable", "true"))
                }).blur(function() {
                    $(this).draggable("option", "disabled", !1), $(this).attr("contenteditable", "false")
                }), $("#dragThis").draggable(), $("#droppable").droppable({
                    accept: "#draggable",
                    drop: function(b, c) {
                        c.draggable.draggable("option", "revert", function() {
                            return !1
                        }), $("#droppable").append("<div class=window><div class=bar>Text Block</div><p contentEditable=true class=textbox  >Type text</p> </div>"), $(".window").draggable({
                            handle: ".bar"
                        }), $(".textbox").on("click", function() {
                            $(this).find(".textbox").focus(), a.callme()
                        }), $(".textbox").on("blur", function() {
                            $(".window").draggable("enable")
                        })
                    }
                }), $("#edit").draggable().click(function() {
                    $(this).is(".ui-draggable-dragging") || ($(this).draggable("option", "disabled", !0), $(this).attr("contenteditable", "true"))
                }).blur(function() {
                    $(this).draggable("option", "disabled", !1), $(this).attr("contenteditable", "false")
                }), $("#dgg").draggable().click(function() {
                    $(this).is(".ui-draggable-dragging") || ($(this).draggable("option", "disabled", !0), $(this).attr("contenteditable", "true"))
                }).blur(function() {
                    $(this).draggable("option", "disabled", !1), $(this).attr("contenteditable", "false")
                })
            }
        }
    }]), angular.module("docubasic3App").directive("dbDroppable", ["$compile", "$rootScope", function(a, b) {
        return {
            restrict: "AE",
            link: function(c, d) {
                b.loaddata = function() {
                    $(".db-square-widget").draggable({
                        containment: "#proposalDropContainer"
                    }), $(".db-circle-widget").draggable({
                        containment: "#proposalDropContainer"
                    })
                }, $(d).droppable({
                    accept: ".ui-draggable",
                    drop: function(e, f) {
                        c.mockContent = c.mockContent || {};
                        var g = $(f.draggable[0]).data();
                        console.log(g);
                        var h = !1,
                            i = (new Date).getTime();
                        c.mockContent[i] = "Enter your text here", console.log(c.mockContent), g.square && ($(d).append("<db-square dynamic-id=" + i + "></db-square>"), h = !0), g.circle && ($(d).append("<db-circle dynamic-id=" + i + "></db-circle>"), h = !0), g.text && ($(d).append("<db-text dynamic-id=" + i + ' db-aspect-ratio="6"></db-text>'), h = !0), g.video && ($(d).append("<db-video dynamic-id=" + i + "></db-video>"), h = !0), g.line && ($(d).append("<db-line dynamic-id=" + i + "></db-line>"), h = !0), g.triangle && ($(d).append("<db-triangle dynamic-id=" + i + "></db-triangle>"), h = !0), g.table && ($(d).append("<db-table dynamic-id=" + i + "></db-table>"), h = !0), h && (a(d)(c), b.$broadcast("SAVE_PROPOSAL_MARKUP"))
                    }
                }), b.imageinsert = function(a) {
                    var b = (new Date).getTime();
                    c.imageSource = angular.copy(a), $(d).append("<db-image dynamic-id=" + b + "></db-image>")
                }
            }
        }
    }]), angular.module("docubasic3App").directive("dbDraggable", function() {
        return {
            restrict: "A",
            link: function(a, b) {
                $(b).draggable({
                    revert: !0,
                    helper: "clone",
                    containment: "#wrapper"
                })
            }
        }
    }), angular.module("docubasic3App").directive("dbResizable", function() {
        return {
            restrict: "A",
            link: function(a, b, c) {
                console.log(c);
                var d = 1;
                c.dbAspectRatio && (d = c.dbAspectRatio), $(b).resizable({
                    aspectRatio: d
                })
            }
        }
    }), angular.module("docubasic3App").directive("dbSquare", ["$rootScope", function(a) {
        return {
            restrict: "E",
            replace: !0,
            templateUrl: "/views/db-square.html",
            link: function(b, c, d) {
                $(c).draggable({
                    containment: "#proposalDropContainer"
                }), $(c).attr("id", "db-square-" + d.dynamicId), $(c).find(".editable-area").on("click", function() {
                    $(this).focus(), a.callme()
                })
            }
        }
    }]), angular.module("docubasic3App").directive("dbCircle", ["$rootScope", "styleservice", function(a, b) {
        return {
            restrict: "E",
            replace: !0,
            templateUrl: "/views/db-circle.html",
            link: function(b, c, d) {
                $(c).attr("id", "db-circle-" + d.dynamicId), $(c).draggable({
                    containment: "#proposalDropContainer"
                }), $(c).on("resizestop", function(a, b) {
                    var c = b.size.height / 6;
                    c += "px", $(this).css("padding", c)
                }), $(c).find(".editable-area").on("click", function() {
                    $(this).focus(), a.callme()
                }), b.removecircle = function() {
                    $(c).remove()
                }
            }
        }
    }]), angular.module("docubasic3App").directive("dbText", ["$rootScope", function(a) {
        return {
            restrict: "E",
            replace: !0,
            templateUrl: "/views/db-text.html",
            link: function(b, c, d) {
                (new Date).getTime();
                $(c).find(".editable-area").on("click", function() {
                    $(this).focus(), a.callme(), $(c).draggable({
                        disabled: !0
                    })
                }), $(c).find(".editable-area").on("blur", function() {
                    $(c).draggable({
                        disabled: !1
                    })
                }), $(c).draggable({
                    containment: "#proposalDropContainer"
                }), $(c).attr("id", "db-text-" + d.dynamicId), b.removetext = function() {
                    $(c).remove()
                }
            }
        }
    }]), angular.module("docubasic3App").directive("dbVideo", ["$sce", function(a) {
        return {
            restrict: "E",
            replace: !0,
            scope: {},
            templateUrl: "/views/db-video.html",
            link: function(b, c, d) {
                b.toggleShowHide = !1, $(c).draggable({
                    containment: "#proposalDropContainer"
                }), $(c).attr("id", "db-video-" + d.dynamicId), $(c).find(".editable-area").attr("ng-model", "mockContent[" + d.dynamicId + "]"), $(c).find(".editable-area").on("click", function() {
                    $(this).focus()
                }), b.submitUrl = function() {
                    b.videoSource = angular.copy(b.videoUrl), b.toggleShowHide = !1
                }, b.trustSrc = function(b) {
                    return a.trustAsResourceUrl(b)
                }, b.toggleShowHideConfig = function() {
                    b.toggleShowHide = !b.toggleShowHide
                }, b.delete = function() {
                    $(c).remove()
                }
            }
        }
    }]), angular.module("docubasic3App").directive("dbLine", function() {
        return {
            restrict: "E",
            replace: !0,
            templateUrl: "/views/db-line.html",
            link: function(a, b, c) {
                $(b).draggable({
                    containment: "#proposalDropContainer"
                }), $(b).attr("id", "db-line-" + c.dynamicId)
            }
        }
    }), angular.module("docubasic3App").directive("dbImage", function() {
        return {
            restrict: "E",
            replace: !0,
            templateUrl: "/views/db-image.html",
            link: function(a, b, c) {
                $(b).draggable({
                    containment: "#proposalDropContainer"
                }), $(b).attr("id", "db-image-" + c.dynamicId)
            }
        }
    }), angular.module("docubasic3App").directive("dbTriangle", ["$rootScope", "styleservice", function(a, b) {
        return {
            restrict: "E",
            replace: !0,
            templateUrl: "/views/db-triangle.html",
            link: function(a, b, c) {
                $(b).attr("id", "db-triangle-" + c.dynamicId), $(b).draggable({
                    containment: "#proposalDropContainer"
                }), $(b).on("resizestop", function(a, b) {
                    var c = b.size.height / 6;
                    c += "px", $(this).css("padding", c)
                }), $(b).find(".editable-area").attr("ng-model", "mockContent[" + c.dynamicId + "]"), $(b).find(".editable-area").on("click", function() {
                    $(this).focus()
                })
            }
        }
    }]), angular.module("docubasic3App").directive("dbTable", ["$rootScope", function(a) {
        return {
            restrict: "E",
            replace: !0,
            templateUrl: "/views/db-table.html",
            link: function(b, c, d) {
                b.toggleShowHide = !1, $(c).attr("id", "db-table-" + d.dynamicId), $(c).draggable({
                    containment: "#proposalDropContainer"
                }), $(c).find(".editable-area").on("click", function() {
                    $(this).focus(), a.callme()
                }), $(c).on("click", function() {
                    b.toggleShowHide = !b.toggleShowHide
                }), b.removetable = function() {
                    $(c).remove()
                }
            }
        }
    }]), angular.module("docubasic3App").factory("praposalservice", ["$resource", "apiUrl", function(a, b) {
        return {
            updatename: a(b.changepname, {
                id: "@id"
            }, {
                query: {
                    method: "PUT",
                    isArray: !1
                }
            }),
            getpagedata: a(b.getpage, {}),
            pagedata: a(b.sendpagedata, {}),
            createpraposal: a(b.praposalcreate, {}),
            getpagelist: a(b.pagelist, {}),
            savepage: a(b.pagesave, {}),
            downloadpraposal: a(b.downloadpage, {}),
            deletepraposal: a(b.praposaldelete, {}),
            sendmail: a(b.mailsend, {}),
            getcollabraters: a(b.getcollab, {}),
            clonepraposal: a(b.clone, {}),
            readaccessapply: a(b.getreadaccess, {}),
            praposalreview: a(b.reviewproposal, {}),
            praposalreject: a(b.rejectproposal, {}),
            uploadsign: a(b.signupload, {}),
            praposalapprove: a(b.approvepraposal, {}),
            getpagecontent: a(b.pagecontent, {}),
            praposalsummeryget: a(b.getpraposales, {}),
            getiamage: a(b.getiamgesdata, {}),
            upiamage: a(b.imageup, {})
        }
    }]), angular.module("docubasic3App").factory("styleservice", ["$resource", "apiUrl", function(a, b) {
        return {
            styleupdate: a(b.updatestyle, {
                id: "@id"
            }, {
                query: {
                    method: "PUT",
                    isArray: !1
                }
            }),
            getstyledata: a(b.getstyles, {}),
            poststyledata: a(b.sendstyledata, {})
        }
    }]), angular.module("docubasic3App").controller("styleCtrl", ["$scope", "$rootScope", "localStorageService", "styleservice", "$location", "SocialLoginservice", function(a, b, c, d, e, f) {
        b.tenancyid = c.get("tenancyid"), b.userid = c.get("userid"), b.isAdmin = c.get("isAdmin"), b.username = c.get("username"), a.closemodal = function() {
            console.log("hi"), b.modalInstance.close(), a.stylename = ""
        };
        var g = {
            tenancy_id: b.tenancyid
        };
        d.getstyledata.save(g, function(b) {
            a.alerts = [], a.sdata = b.data
        }), a.closemodal = function() {
            b.modalInstance.close()
        }, a.summernoteOpt = {
            toolbar: [
                ["headline", ["style"]],
                ["style", ["bold", "italic", "underline", "superscript", "subscript", "strikethrough", "clear"]],
                ["textsize", ["fontsize"]],
                ["alignment", ["ul", "ol", "paragraph", "lineheight"]]
            ]
        }, a.updatestyle = function(c) {
            a.summernoteTextTwo = c.StyleContent, f.setXxx(c), b.$broadcast("styldata"), e.path("/createstyle")
        }, a.create = function() {
            var c = {
                name: a.stylename
            };
            b.$broadcast("stylenamesend", c), e.path("/createstyle"), b.modalInstance.close()
        }
    }]), angular.module("docubasic3App").controller("pageCtrl", ["$scope", "$rootScope", "localStorageService", "pageservice", "$location", "updatepageservice", "styleservice", function(a, b, c, d, e, f, g) {
        b.tenancyid = c.get("tenancyid"), b.userid = c.get("userid"), b.isAdmin = c.get("isAdmin"), b.username = c.get("username"), a.closemodal = function() {
            b.modalInstance.close()
        };
        var h = {
            tenancy_id: b.tenancyid
        };
        d.getpagedata.save(h, function(b) {
            a.alerts = [], a.sdata = b.data
        }), a.updatepage = function(a) {
            f.setXxx(a), e.path("/createpage")
        }, a.create = function() {
            b.pname = a.pagename, e.path("/createpage")
        }, a.$watch("pname", function() {
            c.set("pname", b.pname)
        }, !0), $(".draggable").draggable(), $("#draggable").draggable({
            revert: !0,
            helper: "clone",
            containment: "#wrapper"
        }), $("#dragThis").draggable(), $("#dgg").draggable().click(function() {
            $(this).is(".ui-draggable-dragging") || ($(this).draggable("option", "disabled", !0), $(this).attr("contenteditable", "true"))
        }).blur(function() {
            $(this).draggable("option", "disabled", !1), $(this).attr("contenteditable", "false")
        }), a.summernoteOpt = {
            toolbar: [
                ["headline", ["style"]],
                ["style", ["bold", "italic", "underline", "superscript", "subscript", "strikethrough", "clear"]],
                ["textsize", ["fontsize"]],
                ["alignment", ["ul", "ol", "paragraph", "lineheight"]]
            ]
        }, $(".window").draggable({
            stop: function() {
                var a = {
                    tenancy_id: b.tenancyid
                };
                g.getstyledata.save(a, function(a) {
                    b.sdata = a.data
                })
            }
        })
    }]), angular.module("docubasic3App").factory("pageservice", ["$resource", "apiUrl", function(a, b) {
        return {
            updatepage: a(b.pageupdate, {
                id: "@id"
            }, {
                query: {
                    method: "PUT",
                    isArray: !1
                }
            }),
            getpagedata: a(b.getpage, {}),
            postpage: a(b.sendpagedata, {}),
            settempdata: a(b.sendtempdata, {}),
            gettempdata: a(b.tempdata, {}),
            updatetempdata: a(b.tempdataupdate, {})
        }
    }]), angular.module("docubasic3App").controller("stylecreateCtrl", ["$scope", "$rootScope", "localStorageService", "styleservice", "$location", "SocialLoginservice", function(a, b, c, d, e, f) {
        b.$on("stylenamesend", function(c, d) {
            b.stylename = d.name, a.update = !1
        }), b.$on("styldata", function() {
            a.update = !0
        }), b.tenancyid = c.get("tenancyid"), b.userid = c.get("userid"), b.isAdmin = c.get("isAdmin"), b.username = c.get("username"), a.$watch(function() {
            return f.getXxx()
        }, function(c) {
            null !== c.StyleContent && (a.xxx = c.StyleContent, a.istylename = c.StyleName, a.summernoteTextTwo = a.xxx, b.id = c.PageId), null === c && (a.update = !1)
        }, !0), a.updatestyle = function() {
            var c = {
                id: b.id,
                tenancy_id: b.tenancyid,
                updated_by: b.userid,
                style_content: a.summernoteTextTwo,
                style_name: a.istylename
            };
            d.styleupdate.query(c, function(b) {
                a.alerts = [], b.status === !0 && (a.sdata = b.data, a.alerts.push({
                    msg: "Style updated successfully",
                    type: "success"
                }), a.summernoteTextTwo = "")
            })
        }, a.submitstyle = function() {
            var c = {
                tenancy_id: b.tenancyid,
                style_name: b.stylename,
                created_by: b.userid,
                style_content: a.summernoteTextTwo
            };
            d.poststyledata.save(c, function(b) {
                a.alerts = [], b.status === !0 && (a.alerts.push({
                    msg: "Style created uccessfully",
                    type: "success"
                }), a.summernoteTextTwo = "")
            })
        }
    }]), angular.module("docubasic3App").service("updatepageservice", function() {
        var a = {};
        return {
            getXxx: function() {
                return a
            },
            setXxx: function(b) {
                a = b
            }
        }
    }), angular.module("docubasic3App").controller("pagecreateCtrl", ["$scope", "$rootScope", "localStorageService", "pageservice", "$location", "updatepageservice", "pagenameservice", "$timeout", function(a, b, c, d, e, f, g, h) {
        b.tenancyid = c.get("tenancyid"), b.userid = c.get("userid"), b.isAdmin = c.get("isAdmin"), b.username = c.get("username"), b.pagename = c.get("pname"), a.$watch(function() {
            return f.getXxx()
        }, function(c) {
            null !== c && (a.xxx = c.PageContent, a.istylename = c.StyleName, a.ssss = a.xxx, a.htmlString = $sce.trustAsHtml(c.PageContent), a.pgname = c.PageName, b.id = c.Page_id), null === c && (a.update = !0)
        }, !0);
        var i = function() {
            a.alerts = [], a.errors = [], h(i, 1e4)
        };
        h(i, 1e4), $(".draggable").draggable(), $("#draggable").draggable({
            revert: !0,
            helper: "clone",
            containment: "#wrapper"
        }), $("#dragThis").draggable(), $("#dgg").draggable().click(function() {
            $(this).is(".ui-draggable-dragging") || ($(this).draggable("option", "disabled", !0), $(this).attr("contenteditable", "true"))
        }).blur(function() {
            $(this).draggable("option", "disabled", !1), $(this).attr("contenteditable", "false")
        }), a.submitpage = function() {
            var c = {
                tenancy_id: b.tenancyid,
                created_by: b.userid,
                page_name: b.pagename,
                page_content: $("#proposalDropContainer").html()
            };
            d.postpage.save(c, function(c) {
                a.alerts = [], 1 == c.status ? (b.sdata = c.data, a.alerts.push({
                    msg: "Page created uccessfully",
                    type: "success"
                }), a.pgname = "", a.ssss = "") : a.errors = c.message
            })
        }, a.updatepage = function() {
            var c = {
                id: b.id,
                tenancy_id: b.tenancyid,
                updated_by: b.userid,
                page_name: a.pgname,
                page_content: $("#proposalDropContainer").html()
            };
            d.updatepage.query(c, function(c) {
                a.alerts = [], 1 == c.status ? (b.sdata = c.data, a.alerts.push({
                    msg: "Page updated successfully",
                    type: "success"
                }), a.pgname = "", a.ssss = "") : a.errors = c.message
            })
        }
    }]), angular.module("docubasic3App").service("pagenameservice", function() {
        var a = {};
        return {
            getXxx: function() {
                return a
            },
            setXxx: function(b) {
                a = b
            }
        }
    }), angular.module("docubasic3App").factory("templateservice", ["$resource", "apiUrl", function(a, b) {
        return {
            styleupdate: a(b.updatestyle, {
                id: "@id"
            }, {
                query: {
                    method: "PUT",
                    isArray: !1
                }
            }),
            getstyledata: a(b.getstyles, {}),
            poststyledata: a(b.sendstyledata, {})
        }
    }]), angular.module("docubasic3App").controller("templateCtrl", ["$scope", "$rootScope", "localStorageService", "pageservice", "$location", "$timeout", function(a, b, c, d, e, f) {
        function g() {
            var c = {
                tenancy_id: b.tenancyid
            };
            d.getpagedata.save(c, function(b) {
                a.alerts = [], a.pdata = b.data
            });
            var e = {
                tenancy_id: b.tenancyid
            };
            d.gettempdata.save(e, function(b) {
                a.alerts = [], a.p = b.data
            })
        }
        b.tenancyid = c.get("tenancyid"), b.userid = c.get("userid"), b.isAdmin = c.get("isAdmin"), b.username = c.get("username"), a.closemodal = function() {
            console.log("hi"), b.modalInstance.close()
        }, g();
        var h = function() {
            a.alerts = [], a.errors = [], f(h, 1e4)
        };
        f(h, 1e4), a.create = function() {
            var c = {
                tenancy_id: b.tenancyid,
                created_by: b.userid,
                template_name: a.tempname,
                page_id: a.pagedata
            };
            d.settempdata.save(c, function(c) {
                a.alerts = [], a.pdata = c.data, c.status === !0 && b.modalInstance.close(), c.status === !1 && (a.errors = c.message)
            })
        }, a.updatetemplate = function(b) {
            a.update = !0, a.show = !0, a.tempname = b.template.template_name, a.tid = b.template.id, a.pagedata = b.template_page_data
        }, a.updatetemp = function() {
            var c = {
                template_id: a.tid,
                page_id: a.pagedata,
                updated_by: b.userid,
                tenancy_id: b.tenancyid
            };
            d.updatetempdata.save(c, function(c) {
                a.alerts = [], c.status === !0 && (b.modalInstance.close(), g(), a.update = !1, a.show = !1), c.status === !1 && (a.errors = c.message)
            })
        }
    }]), angular.module("docubasic3App").controller("settingpageCtrl", ["$scope", "$state", "$timeout", "$rootScope", "$stateParams", "$uibModal", function(a, b, c, d, e, f) {
        d.modalInstance = f.open({
            animation: a.animationsEnabled,
            templateUrl: "views/companysetting.html",
            controller: "companysettingCtrl",
            windowClass: "modal-lg",
            resolve: {}
        }), a.opencompany = function() {
            d.modalInstance = f.open({
                animation: a.animationsEnabled,
                templateUrl: "views/companysetting.html",
                controller: "companysettingCtrl",
                windowClass: "modal-lg",
                resolve: {}
            })
        }, a.opentask = function() {
            d.modalInstance = f.open({
                animation: a.animationsEnabled,
                templateUrl: "views/task.html",
                controller: "taskcategoryCtrl",
                windowClass: "modal-lg",
                resolve: {}
            })
        }, a.openprojecttask = function() {
            d.modalInstance = f.open({
                animation: a.animationsEnabled,
                templateUrl: "views/projecttask.html",
                controller: "projecttaskCtrl",
                windowClass: "modal-lg",
                resolve: {}
            })
        }, a.openprice = function() {
            d.modalInstance = f.open({
                animation: a.animationsEnabled,
                templateUrl: "views/price.html",
                controller: "pricingsettingCtrl",
                windowClass: "modal-lg",
                resolve: {}
            })
        }, a.openvendor = function() {
            d.modalInstance = f.open({
                animation: a.animationsEnabled,
                templateUrl: "views/vendors.html",
                controller: "vendorsCtrl",
                windowClass: "modal-lg",
                resolve: {}
            })
        }, a.openresource = function() {
            d.modalInstance = f.open({
                animation: a.animationsEnabled,
                templateUrl: "views/resourcetype.html",
                controller: "resourcetypeCtrl",
                windowClass: "modal-lg",
                resolve: {}
            })
        }, a.openclient = function() {
            d.modalInstance = f.open({
                animation: a.animationsEnabled,
                templateUrl: "views/client.html",
                controller: "clientCtrl",
                windowClass: "modal-lg",
                resolve: {}
            })
        }, a.openstyle = function() {
            d.modalInstance = f.open({
                animation: a.animationsEnabled,
                templateUrl: "views/styles.html",
                controller: "styleCtrl",
                windowClass: "modal-lg",
                resolve: {}
            })
        }, a.openpage = function() {
            d.modalInstance = f.open({
                animation: a.animationsEnabled,
                templateUrl: "views/pages.html",
                controller: "pageCtrl",
                windowClass: "modal-lg",
                resolve: {}
            })
        }, a.opentemplate = function() {
            d.modalInstance = f.open({
                animation: a.animationsEnabled,
                templateUrl: "views/template.html",
                controller: "templateCtrl",
                windowClass: "modal-lg",
                resolve: {}
            })
        }
    }]), angular.module("docubasic3App").controller("createproposalCtrl", ["$scope", "$location", "$rootScope", "localStorageService", "praposalservice", "userservice", "pageservice", "settingservice", function(a, b, c, d, e, f, g, h) {
        a.closemodal = function() {
            c.modalInstance.close()
        }, c.tenancyid = d.get("tenancyid"), c.userid = d.get("userid"), c.isAdmin = d.get("isAdmin"), c.username = d.get("username");
        var i = {
            tenancy_id: c.tenancyid
        };
        e.getpagedata.save(i, function(b) {
            a.alerts = [], a.pdata = b.data[0].PageContent
        });
        var j = {
            id: c.tenancyid
        };
        f.getuserdetail.query(j, function(b) {
            a.userdata = b.data
        });
        var k = {
            tenancy_id: c.tenancyid
        };
        g.gettempdata.save(k, function(b) {
            a.alerts = [], a.templates = b.data
        });
        var l = {
            tenancy_id: c.tenancyid
        };
        h.getclient.save(l, function(b) {
            a.clients = b.data
        }), a.submitpage = function() {
            var b = {
                tenancy_id: c.tenancyid,
                page_name: "main",
                created_by: c.userid,
                page_content: a.ssss
            };
            e.pagedata.save(b, function() {})
        }, a.selecttemp = function(b) {
            c.templateid = b.template.id, a.selected = !0
        }, a.submit = function() {
            var d = {
                name: a.praposalname,
                tenancy_id: c.tenancyid,
                user_id: c.userid,
                customer_id: a.cname,
                collaborators: a.coname,
                template_id: c.templateid,
                delivery_date: a.myDate,
                created_by: c.userid,
                orientation: 1
            };
            e.createpraposal.save(d, function(d) {
                a.alerts = [], a.templates = d.data, c.praposalname = a.praposalname, d.status === !0 && (c.template_id = a.templates.template_id, c.proposal_id = a.templates.proposal_id, c.modalInstance.close(), a.praposalname = "", a.coname = "", a.myDate = "", a.cname = "", b.path("/proposal"))
            })
        }, a.$watch("template_id", function() {
            d.set("template_id", c.template_id)
        }, !0), a.$watch("proposal_id", function() {
            d.set("proposal_id", c.proposal_id)
        }, !0), a.$watch("praposalname", function() {
            d.set("praposalname", c.praposalname)
        }, !0)
    }]), angular.module("docubasic3App").controller("proposalsummeryCtrl", ["$scope", "$rootScope", "localStorageService", "praposalservice", "$location", "$uibModal", "sweetAlert", function(a, b, c, d, e, f, g) {
        b.tenancyid = c.get("tenancyid"), b.userid = c.get("userid"), b.isAdmin = c.get("isAdmin"), b.username = c.get("username"), b.proposal_id = c.get("proposal_id"), b.template_id = c.get("template_id"), b.templatename = c.get("templatename"), a.praposalall = !0;
        var h = {
            tenancy_id: b.tenancyid,
            proposal_status: 0,
            created_by: b.userid
        };
        d.praposalsummeryget.save(h, function(b) {
            a.alerts = [], b.status === !0 && (a.praposaldata = b.data.proposals, a.praposalactivitydata = b.data.proposals[0].activity, a.praposalcollab = b.data.proposals[1].collaborator)
        }), a.clonepraposal = function() {
            b.modalInstance = f.open({
                animation: a.animationsEnabled,
                templateUrl: "views/clone.html",
                controller: "cloneCtrl",
                windowClass: "modal-lg",
                resolve: {}
            })
        }, a.deletepraposal = function() {
            g.swal({
                title: "Are you sure want to delete?",
                type: "warning",
                showCancelButton: !0,
                confirmButtonColor: "#DD6B55",
                confirmButtonText: "Yes, delete it!",
                cancelButtonText: "No, cancel!",
                closeOnConfirm: !1,
                closeOnCancel: !1
            }, function(c) {
                if (c) {
                    var e = {
                        tenancy_id: b.tenancyid,
                        updated_by: b.userid,
                        proposal_id: b.proposal_id
                    };
                    d.deletepraposal.save(e, function() {
                        a.alerts = []
                    }), g.swal("Deleted!", " Deleted successfully", "success")
                } else g.swal("Cancelled")
            })
        }, a.priweviemode = function() {
            e.path("/preview")
        }, a.download = function() {
            b.proposal_id;
            var a = "http://49.248.126.222:8282/services/public/api/v1/downloadProposalpdf/";
            a += b.proposal_id;
            var c = document.createElement("a");
            c.href = a, c.click()
        }, a.opencollab = function() {
            b.modalInstance = f.open({
                animation: a.animationsEnabled,
                templateUrl: "views/collabraters.html",
                controller: "proposalCtrl",
                windowClass: "modal-lg",
                resolve: {}
            });
            var c = {
                proposal_id: b.proposal_id,
                tenancy_id: b.tenancyid
            };
            d.getcollabraters.save(c, function(b) {
                a.alerts = [], a.collabdata = b.data
            })
        }, a.emailwindow = function() {
            b.modalInstance = f.open({
                animation: a.animationsEnabled,
                templateUrl: "views/email.html",
                controller: "proposalCtrl",
                windowClass: "modal-lg",
                resolve: {}
            })
        }, a.createpraposal = function() {
            b.modalInstance = f.open({
                animation: a.animationsEnabled,
                templateUrl: "views/createproposal.html",
                controller: "createproposalCtrl",
                windowClass: "modal-lg",
                resolve: {}
            })
        }, a.allpraposal = function() {
            a.praposalall = !0, a.underreviewpraposal = !1, a.openpraposal = !1, a.closedpraposal = !1
        }, a.open = function() {
            a.openpraposal = !0, a.praposalall = !1, a.closedpraposal = !1, a.praposalall = !1
        }, a.underreview = function() {
            a.underreviewpraposal = !0, a.openpraposal = !1, a.praposalall = !1, a.closedpraposal = !1
        }, a.closed = function() {
            a.closedpraposal = !0, a.underreviewpraposal = !1, a.openpraposal = !1, a.praposalall = !1
        }
    }]), angular.module("docubasic3App").controller("cloneCtrl", ["$scope", "$rootScope", "localStorageService", "praposalservice", "$location", "$uibModal", "userservice", "settingservice", function(a, b, c, d, e, f, g, h) {
        this.awesomeThings = ["HTML5 Boilerplate", "AngularJS", "Karma"], b.tenancyid = c.get("tenancyid"), b.userid = c.get("userid"), b.isAdmin = c.get("isAdmin"), b.username = c.get("username"), b.proposal_id = c.get("proposal_id"), b.templatename = c.get("templatename");
        var i = {
            id: b.tenancyid
        };
        g.getuserdetail.query(i, function(b) {
            a.userdata = b.data
        });
        var j = {
            tenancy_id: b.tenancyid
        };
        h.getclient.save(j, function(b) {
            a.clients = b.data
        });
        var k = {
            proposal_id: b.proposal_id
        };
        d.clonepraposal.save(k, function(b) {
            a.alerts = [], a.clonedata = b.data.proposal, a.praposalname = a.clonedata[0].Name, a.myDate = new Date(a.clonedata[0].Delivery_date), a.cname = a.clonedata[0].Customer_id, a.tid = a.clonedata[0].template_id, a.coname = b.data.collaborators
        }), a.submit = function() {
            var c = {
                name: a.praposalname,
                tenancy_id: b.tenancyid,
                user_id: b.userid,
                customer_id: a.cname,
                collaborators: a.coname,
                template_id: a.tid,
                delivery_date: a.myDate,
                created_by: b.userid,
                orientation: 1
            };
            d.createpraposal.save(c, function(c) {
                a.alerts = [], a.templates = c.data, c.status === !0 && (b.template_id = a.templates.template_id, b.proposal_id = a.templates.proposal_id, e.path("/praposal"))
            })
        }
    }]), angular.module("docubasic3App").controller("customerreviewCtrl", ["$scope", "$rootScope", "localStorageService", "praposalservice", "$location", "$uibModal", "sweetAlert", "$routeParams", function(a, b, c, d, e, f, g, h) {
        this.awesomeThings = ["HTML5 Boilerplate", "AngularJS", "Karma"], b.proposal_id = h.proposal_id, b.userid = h.updated_by;
        var i = {
            proposal_id: b.proposal_id,
            updated_by: b.userid
        };
        d.praposalreview.save(i, function(c) {
            a.alerts = [], c.status === !0 && (a.review = c.data, a.pagecontent = c.data.proposal_page_data, 4 === c.data.proposal_status && (b.approve = !0))
        }), b.tenancyid = c.get("tenancyid"), b.isAdmin = c.get("isAdmin"), b.username = c.get("username"), b.template_id = c.get("template_id"), b.templatename = c.get("templatename"), a.opensign = function() {
            b.modalInstance = f.open({
                animation: a.animationsEnabled,
                templateUrl: "views/signature.html",
                controller: "customerreviewCtrl",
                windowClass: "modal-lg",
                resolve: {}
            })
        }, a.openreject = function() {
            b.modalInstance = f.open({
                animation: a.animationsEnabled,
                templateUrl: "views/reject.html",
                controller: "customerreviewCtrl",
                windowClass: "modal-lg",
                resolve: {}
            })
        }, a.sendpage = function(b) {
            a.ssss = b.page_content, a.pageid = b.template_page_id
        }, a.preject = function() {
            var c = {
                proposal_id: b.proposal_id,
                updated_by: b.userid
            };
            d.praposalreject.save(c, function(c) {
                a.alerts = [], c.status === !0 && b.modalInstance.close()
            })
        }, a.send = function() {
            a.alerts = [];
            var c = {
                tenancy_id: b.tenancyid,
                image_raw: a.files[0].base64,
                updated_by: b.userid,
                proposal_id: b.proposal_id
            };
            d.uploadsign.save(angular.toJson(c), function(b) {
                a.message = b.message, b.status === !0 && a.alerts.push({
                    msg: "Picture Updated successfully",
                    type: "success"
                }), b.status === !1 && a.alerts.push({
                    msg: "error occurd",
                    type: "denger"
                })
            })
        }, a.approvep = function() {
            var c = {
                proposal_id: b.proposal_id,
                updated_by: b.userid
            };
            d.praposalapprove.save(c, function(c) {
                a.alerts = [], a.errors = [], c.status === !0 && b.modalInstance.close(), c.status === !1 && a.alerts.push({
                    msg: "plz upload signature",
                    type: "denger"
                })
            })
        }
    }]), angular.module("docubasic3App").run(["$templateCache", function(a) {
        a.put("views/about.html", "<p>This is the about view.</p>"), a.put("views/billing.html", '<div id="header" ng-include="\'views/header.html\'"></div> <!-- Navigation --> <aside id="menu" ng-include="\'views/navigation.html\'"></aside> <div id="wrapper"> <div class="row"> <div class="col-lg-3 ng-scope" style=""> <div class="hpanel stats"> <div class="panel-body h-200"> <div class="stats-title pull-left"> <h4>Billing Detail</h4> </div> <div class="stats-icon pull-right"> <i class="pe-7s-battery fa-4x"></i> </div> <div class="clearfix"></div> <div class="m-t-xs" ng-repeat="info in billingdata"> <div class="row"> <div class="col-xs-6" style=""> <small class="stat-label">Current Plan</small> <h4> {{info.name}} <i class="fa fa-level-up text-success"></i> </h4> </div> <div class="col-xs-6" style=""> <small class="stat-label">Due Date</small> <h4> {{info.due_date}} <i class="fa fa-level-up text-success"></i> </h4> </div> <div class="col-xs-6" style=""> <small class="stat-label">Amount</small> <h4> {{info.amount}} <i class="fa fa-level-up text-success"></i> </h4> </div> </div> <div class="row"> <div class="col-xs-6" style=""> <small class="stat-label">Start</small> <h4> {{info.start}} <i class="fa fa-level-up text-success"></i> </h4> </div> <div class="col-xs-6" style=""> <small class="stat-label">End</small> <h4> {{info.end}} <i class="fa fa-level-up text-success"></i> </h4> </div> </div> </div> </div> </div> </div> </div> <div class="ng-scope" animate-panel="" ui-view=""> <div class="row ng-scope"> <div class="col-lg-12" style=""> <div class="col-sm-3" style="" ng-repeat="info in packagedata.packages"> <div class="hpanel plan-box hgreen active"> <div class="panel-heading hbuilt text-center"> <h4 class="font-bold">{{info.name}}</h4> </div> <div class="panel-body"> <p class="text-muted"> </p> <!--<table class="table">\r\n\t\t\t\t\t\t\t<thead>\r\n\t\t\t\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t\t\t\t<td>Charges</td>\r\n\t\t\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t\t</thead>\r\n\t\t\t\t\t\t\t<tbody>\r\n\t\t\t\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t\t\t\t<td>\r\n\t\t\t\t\t\t\t\t\t\t<i class="fa fa-check-square-o"></i>\r\n\t\t\t\t\t\t\t\t\t\t{{info.monthly_charge}}\r\n\t\t\t\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t\t\t\t<td>\r\n\t\t\t\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t\t\t\t\t<td>\r\n\t\t\t\t\t\t\t\t\t\t\t<i class="fa fa-square-o"></i>\r\n\t\t\t\t\t\t\t\t\t\t\tSupport\r\n\t\t\t\t\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t\t\t</tbody>-->  <p class="text-muted">{{info.description}} </p> <h3 class="font-bold"> ${{info.monthly_charge}}/month </h3> <a class="btn btn-success btn-sm m-t-xs" href="#">Select plan</a> </div> </div> </div> </div> </div> </div> </div>'),
            a.put("views/client.html", '<!--<div id="header" ng-include="\'views/header.html\'"></div>\r\n\r\n<!-- Navigation \r\n<aside id="menu" ng-include="\'views/navigation.html\'"></aside>\r\n<div id="wrapper">--> <div class="modal-dialog modal-lg"> <div class="normalheader transition animated fadeIn"> <div class="hpanel"> <div class="panel-body"> <div class="pull-right"> <a ng-click="closemodal()"> <i class="pe-7s-close fa-2x"></i></a> </div> </div> <div class="panel-body"> <div class="pull-right m-t-lg" id="hbreadcrumb"> <ol class="hbreadcrumb breadcrumb"> <li><a ng-href="#/main">Dashboard</a></li> <li class="active"> <span>Client</span> </li> </ol> </div> <h2 class="font-light m-b-xs"> Client </h2> <small></small> </div> </div> </div> <div class="setting"> <uib-alert ng-repeat="alert in alerts" class="display-alert" type="{{alert.type}}" close="closeAlerts($index)" ng-click="closeAlert($index)" id="display-error-home">{{alert.msg}}</uib-alert> <uib-alert ng-repeat="error in errors" class="display-alert" type="{{alert.type}}" close="closeAlert($index)" ng-click="closeAlert($index)" id="display-error-home">{{error}}</uib-alert> <div class="content" animate-panel effect="zoomIn"> <div class="row"> <div class="col-lg-12"> <div class="hpanel"> <div class="panel-body"> <button class="btn btn-primary pull-right" ng-model="collapsed" ng-click="clientsection()" ng-hide="collapsed">Add New</button><br> <div class="takadd" ng-show="collapsed"> <h3 class="font-light m-b-xs" ng-hide="update"> Add New Client </h3><br> <h3 class="font-light m-b-xs" ng-show="update"> Update Client </h3><br> <form name="clientform"> <div class="row"> <div class="col-md-4"> <div class="form-group required" ng-class="{\'has-error\': clientform.fname.$touched && clientform.fname.$error.required}"> <label class="control-label">First Name</label><br> <input name="fname" type="text" only-words ng-maxlength="20" ng-minlength="3" class="form-control" placeholder="First name" id="user-pass" ng-model="fname" required> <span ng-show="clientform.fname.$error.minlength" class="denger">First name is too short.</span> <span ng-show="clientform.fname.$error.maxlength" class="has-error">First name is too long.</span> </div> </div> <div class="col-md-4"> <div class="form-group required" ng-class="{\'has-error\': clientform.lname.$touched && clientform.lname.$error.required}"> <label class="control-label">Last Name</label><br> <input name="lname" type="text" only-words ng-maxlength="20" ng-minlength="3" class="form-control" placeholder="Last name" id="user-pass" ng-model="lname" required> <span ng-show="clientform.lname.$error.minlength" class="denger">Last name is too short.</span> <span ng-show="clientform.lname.$error.maxlength" class="has-error">Last name is too long.</span> </div> </div> </div> <div class="row"> <div class="col-md-4"> <div class="form-group required" ng-class="{\'has-error\': clientform.email.$touched && clientform.email.$error.required}"> <label class="control-label">Email</label><br> <input name="email" type="text" class="form-control" placeholder="Email" id="user-pass" ng-model="email" required ng-pattern="/^[a-z]+[a-z0-9._]+@[a-z]+\\.[a-z.]{2,5}$/"> <span ng-show="clientform.email.$touched && clientform.email.$invalid" class="denger">Invalid Email</span> </div> </div> <div class="col-md-4"> <div class="form-group required" ng-class="{\'has-error\': clientform.cpname.$touched && clientform.cpname.$error.required}"> <label class="control-label">Company Name</label><br> <input name="cpname" type="text" ng-maxlength="20" ng-minlength="3" class="form-control" placeholder="Company name" id="user-pass" ng-model="cname" required> <span ng-show="clientform.cpname.$error.minlength" class="denger">Company name is too short.</span> <span ng-show="clientform.cpname.$error.maxlength" class="has-error">Company name is too long.</span> </div> </div> </div> <div class="row"> <div class="col-md-4"> <div class="form-group required" ng-class="{\'has-error\': clientform.dname.$touched && clientform.dname.$error.required}"> <label class="control-label">Display Name</label><br> <input name="dname" type="text" class="form-control" placeholder="Display name" id="user-pass" ng-model="displayname" required> <span ng-show="clientform.dname.$error.minlength" class="denger">Display name is too short.</span> <span ng-show="clientform.dname.$error.maxlength" class="has-error">Display name is too long.</span> </div> </div> <div class="col-md-4"> <label class="control-label">Client Id</label><br> <input name="Task category" type="text" class="form-control" placeholder="Client id" id="user-pass" ng-model="clientid" required> </div> </div> <div class="row"> <div class="col-md-4"> <div class="form-group required" ng-class="{\'has-error\': clientform.pnumber.$touched && clientform.pnumber.$error.required}"> <label class="control-label">Phone Number </label><br> <input name="pnumber" type="text" class="form-control" placeholder="Phone number" id="user-pass" ng-model="phone" ng-maxlength="20" ng-minlength="8" ng-pattern="ph_numbr" required> <span ng-show="clientform.pnumber.$touched && clientform.pnumber.$invalid" class="denger">Phone number is invalid.</span> <span ng-show="clientform.pnumber.$error.minlength" class="denger">Phone number is too short.</span> <span ng-show="clientform.pnumber.$error.maxlength" class="has-error">Phone number is too long.</span> </div> </div> <div class="col-md-4"> <div class="form-group required" ng-class="{\'has-error\': clientform.mnumber.$touched && clientform.mnumber.$error.required}"> <label class="control-label">Mobile Number</label><br> <input name="mnumber" type="text" ng-pattern="ph_numbr" class="form-control" placeholder="Mobile number" id="user-pass" ng-model="mobile" ng-maxlength="20" ng-minlength="8" required> <span ng-show="clientform.mnumber.$touched && clientform.mnumber.$invalid" class="denger">Mobile number is invalid.</span> <span ng-show="clientform.mnumber.$error.minlength" class="denger">Mobile number is too short.</span> <span ng-show="clientform.mnumber.$error.maxlength" class="has-error">Mobile number is too long.</span> </div> </div> </div> <div class="row"> <div class="col-md-4"> <div class="form-group required" ng-class="{\'has-error\': clientform.site.$touched && clientform.site.$error.required}"> <label class="control-label">Website Url</label><br> <input name="site" type="url" class="form-control" placeholder="Website url" id="user-pass" ng-model="url" required> <span class="error" ng-show="clientform.site.$error.url"> Not valid url!</span> </div> </div> <div class="col-md-4"> <label class="control-label">Street Address</label><br> <input name="Task category" type="text" class="form-control" placeholder="Street address" id="user-pass" ng-model="addressdetail" required> </div> </div> <div class="row"> <div class="col-md-4"> <label class="control-label">Country</label><br> <div class="dropdown"> <select class="form-control dropdown-toggle" type="button" data-toggle="dropdown" ng-options="value.countryid as value.countryname for value in allProducts" ng-model="country"> <span class="caret"></span>Country:{{orgdata[0].country_id}}</select> </div> </div> <div class="col-md-4"><label class="control-label">State </label><br> <div class="dropdown"> <select class="form-control dropdown-toggle" type="button" data-toggle="dropdown" ng-options="value.stateid as value.statename for value in allstates | filter: { countryid:country }" ng-model="state" ng-init="state = allstates[0]"> <span class="caret"></span>Select</select>  </div> </div> </div><br> <div class="row"> <div class="col-md-4"> <label class="control-label">City </label><br> <input name="Task category" type="text" only-words class="form-control" placeholder="City" id="user-pass" ng-model="city" required> </div> <div class="col-md-4"> <div class="form-group required" ng-class="{\'has-error\': clientform.pcode.$touched && clientform.pcode.$error.required}"> <label class="control-label">Postal Code </label><br> <input name="pcode" type="text" class="form-control" placeholder="Postal code" id="user-pass" ng-model="pcode" required ng-minlength="4"> <span ng-show="clientform.pcode.$error.minlength" class="denger">Postal Code is too short.</span> </div> </div> </div> <div class="row"> <div class="col-md-8"> <label class="control-label">Detailed Summary </label><br> <textarea class="form-control" rows="5" id="comment" placeholder="Detailed Summary" ng-model="summary"></textarea> </div> </div><br> </form> <div class="row"> <div class="col-md-8"> <button class="btn btn-primary" ng-model="collapsed" ng-click="submitclient()" ng-hide="update">Save</button> <button class="btn btn-primary" ng-model="collapsed" ng-click="updateclientdata()" ng-show="update">Update</button> <button class="btn btn-primary" ng-click="closeclient()">Cancel</button> </div> </div> </div> </div> <br><br> <div class="panel-body pn"> <table datatable="ng" class="table table-striped table-bordered table-hover"> <thead> <tr> <th>First Name</th> <th>Last Name</th> <th>Mobile Number</th> <th>Created by</th> <th>Action</th> </tr> </thead> <tbody> <tr ng-repeat="detail in clients"> <td>{{detail.firstname}}</td> <td>{{detail.lastname}}</td> <td>{{detail.mobile}}</td> <td>{{detail.created_users_email}}<br> {{detail.created_time}}</td> <td><a href="" title="Update" ng-click="updateclient(detail)" class="btn"><i class="glyphicon glyphicon-pencil"></i></a> <a href="" title="Delete" ng-click="delteclient(detail)" class="btn"><i class="glyphicon glyphicon-trash"></i></a></td> </tr> </tbody> </table> </div> </div> </div> </div> </div> </div></div>'), a.put("views/client_old.html", '<div id="header" ng-include="\'views/header.html\'"></div> <!-- Navigation --> <aside id="menu" ng-include="\'views/navigation.html\'"></aside> <div id="wrapper"> <div class="normalheader transition animated fadeIn"> <div class="hpanel"> <div class="panel-body"> <div class="pull-right m-t-lg" id="hbreadcrumb"> <ol class="hbreadcrumb breadcrumb"> <li><a ng-href="#/main">Dashboard</a></li> <li class="active"> <span>Client</span> </li> </ol> </div> <h2 class="font-light m-b-xs"> Client </h2> <small></small> </div> </div> </div> <div class="setting"> <uib-alert ng-repeat="alert in alerts" class="display-alert" type="{{alert.type}}" close="closeAlerts($index)" ng-click="closeAlert($index)" id="display-error-home">{{alert.msg}}</uib-alert> <uib-alert ng-repeat="error in errors" class="display-alert" type="{{alert.type}}" close="closeAlert($index)" ng-click="closeAlert($index)" id="display-error-home">{{error}}</uib-alert> <div class="content" animate-panel effect="zoomIn"> <div class="row"> <div class="col-lg-12"> <div class="hpanel"> <div class="panel-body"> <button class="btn btn-primary pull-right" ng-model="collapsed" ng-click="clientsection()">New Client</button><br> <div class="takadd" ng-show="collapsed"> <div class="row"> <div class="col-md-4"> <input name="Task category" type="text" class="form-control" placeholder="First name" id="user-pass" ng-model="fname" required> </div> <div class="col-md-4"> <input name="Task category" type="text" class="form-control" placeholder="Last name" id="user-pass" ng-model="lname" required> </div> </div><br> <div class="row"> <div class="col-md-4"> <input name="Task category" type="text" class="form-control" placeholder="Email" id="user-pass" ng-model="email" required> </div> <div class="col-md-4"> <input name="Task category" type="text" class="form-control" placeholder="Company name" id="user-pass" ng-model="cname" required> </div> </div><br> <div class="row"> <div class="col-md-4"> <input name="Task category" type="text" class="form-control" placeholder="Display name" id="user-pass" ng-model="displayname" required> </div> <div class="col-md-4"> <input name="Task category" type="text" class="form-control" placeholder="Client id" id="user-pass" ng-model="clientid" required> </div> </div><br> <div class="row"> <div class="col-md-4"> <input name="Task category" type="text" class="form-control" placeholder="Phone number" id="user-pass" ng-model="phone" required> </div> <div class="col-md-4"> <input name="Task category" type="text" class="form-control" placeholder="Mobile number" id="user-pass" ng-model="mobile" required> </div><br> </div><br> <div class="row"> <div class="col-md-4"> <input name="Task category" type="text" class="form-control" placeholder="Website url" id="user-pass" ng-model="url" required> </div> <div class="col-md-4"> <input name="Task category" type="text" class="form-control" placeholder="Street address" id="user-pass" ng-model="addressdetail" required> </div> </div><br> <div class="row"> <div class="col-md-4"> <div class="dropdown"> <select class="form-control dropdown-toggle" type="button" data-toggle="dropdown" ng-options="value.countryid as value.countryname for value in allProducts" ng-model="country"> <span class="caret"></span>Country:{{orgdata[0].country_id}}</select> <ul class="dropdown-menu"> <li><a href="#">HTML</a></li> <li><a href="#">CSS</a></li> <li><a href="#">JavaScript</a></li> </ul> </div> </div> <div class="col-md-4"> <div class="dropdown"> <select class="form-control dropdown-toggle" type="button" data-toggle="dropdown" ng-options="value.countryid as value.statename for value in allstates | filter: { countryid:country }" ng-model="state" ng-init="state = allstates[0]"> <span class="caret"></span>Select</select>  </div> </div> </div><br> <div class="row"> <div class="col-md-4"> <input name="Task category" type="text" class="form-control" placeholder="City" id="user-pass" ng-model="city" required> </div> <div class="col-md-4"> <input name="Task category" type="text" class="form-control" placeholder="Postal code" id="user-pass" ng-model="pcode" required> </div> </div><br> <div class="row"> <div class="col-md-8"> <textarea class="form-control" rows="5" id="comment" placeholder="Detailed Summary" ng-model="summary"></textarea> </div> </div><br> <div class="row"> <div class="col-md-8"> <button class="btn btn-primary" ng-model="collapsed" ng-click="submitclient()" ng-hide="update">Add</button> <button class="btn btn-primary" ng-model="collapsed" ng-click="updateclientdata()" ng-show="update">Update</button> <button class="btn btn-primary" ng-click="closeclient()">Close</button> </div> </div> </div> </div> <br><br> <div class="panel-body pn"> <table datatable="ng" class="table table-striped table-bordered table-hover"> <thead> <tr> <th>First Name</th> <th>Last Name</th> <th>Email</th> <th>Action</th> </tr> </thead> <tbody> <tr ng-repeat="detail in clients"> <td>{{detail.firstname}}</td> <td>{{detail.lastname}}</td> <td>{{detail.email}}</td> <td><a href="" title="Update" ng-click="updateclient(detail)" class="btn"><i class="glyphicon glyphicon-pencil"></i></a> <a href="" title="Delete" ng-click="delteclient(detail)" class="btn"><i class="glyphicon glyphicon-trash"></i></a></td> </tr> </tbody> </table> </div> </div> </div> </div> </div> </div></div>'), a.put("views/clone.html", '<!--<div id="header" ng-include="\'views/header.html\'"></div>\r\n<!-- Navigation \r\n<aside id="menu" ng-include="\'views/navigation.html\'"></aside>\r\n<div id="wrapper">--> <div class="modal-dialog modal-lg"> <div class="color-line"></div> <div class="modal-header"> <h4 class="modal-title">Clone Proposal<span class="pull-right"><a data-dismiss="modal"> <i class="pe-7s-close fa-2x"></i></a> </span></h4> </div> <div class="modal-body"> <div class="row"> <div class="col-md-6"> <div class="form-group required"> <input name="name" type="text" class="form-control" ng-maxlength="50" placeholder="Name of Proposal" ng-model="praposalname" maxlength="20" minlength="3" required> </div> </div> <div class="col-md-6"> <div class="form-group required"> <div class="dropdown"> <select class="form-control dropdown-toggle" type="button" data-toggle="dropdown" ng-options="info.id as info.firstname for info in clients" ng-model="cname">. <option selected></option> </select> </div> </div> </div> <div class="col-md-6"> <div class="form-group required"> <input type="date" id="exampleInput-txt" name="input" class="form-control" ng-model="myDate" placeholder="yyyy-MM-dd" required> </div> </div> <div class="col-md-6"> <div class="dropdown"> <select class="selectpicker form-control" multiple data-toggle="dropdown" ng-options="value.user_id as value.first_name for value in userdata.users " ng-model="coname">. <option selected></option> </select> </div> </div> <!--<div class="col-md-3">\r\n                                         <br>\r\n                                        <div class="hpanel" style="border:1px dotted #434E6E">\r\n                                            <div class="panel-body">\r\n                                                <div class="text-center">\r\n                                                    <img src="images/portrait.0fa6f2b9.png">\r\n                                                </div>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>--> <!--<div class="col-md-4">\r\n                                         <br>\r\n                                        <div class="hpanel" style="border:1px dotted #434E6E">\r\n                                            <div class="panel-body">\r\n                                                <div class="text-center">\r\n                                                   <img src="images/ladscape.6e30e7b6.png">\r\n                                                </div>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>--> <!--<div class="col-md-4">\r\n                                         <br>\r\n                                        <div class="hpanel hbggreen">\r\n                                            <a ng-click="submit()">\r\n                                            <div class="panel-body">\r\n                                                <div class="text-center">\r\n                                                <br>\r\n                                                    <i class="pe-7s-note fa-4x"></i><br>\r\n                                                    <small>Create Proposal</small>\r\n                                                    <br><br>\r\n                                                </div>\r\n                                            </div>\r\n                                        </a>\r\n                                        </div>\r\n                                    </div>--> </div> <br><br><br> <!--<div class="row">\r\n                                    <div class="col-md-12">\r\n                                        <strong> Select a Template from the gallery</strong>\r\n                                        <hr>\r\n                                    </div>\r\n                                </div>\r\n                                \r\n                                 <div class="row" >\r\n                                     <div class="col-md-3" style=""ng-repeat="temp in templates" ng-click="selecttemp(temp)">\r\n                                        <div class="hpanel hnavyblue">\r\n                                            <div class="panel-body">\r\n                                                <div class="text-center">\r\n                                                    <i class="pe-7s-config icon-lg"></i><br>\r\n                                                    <small>{{temp.template.template_name}}</small>\r\n                                                </div>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                 \r\n                                    <!--<div class="col-md-3" style="">\r\n                                        <div class="hpanel hbgblue">\r\n                                            <div class="panel-body">\r\n                                                <div class="text-center">\r\n                                                    <i class="pe-7s-config icon-lg"></i><br>\r\n                                                    <small>IT Infrastructure and Delivery</small>\r\n                                                </div>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class="col-md-3" style="">\r\n                                        <div class="hpanel hbgyellow">\r\n                                            <div class="panel-body">\r\n                                                <div class="text-center">\r\n                                                    <i class="pe-7s-config icon-lg"></i><br>\r\n                                                    <small>Application Development</small>\r\n                                                </div>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class="col-md-3" style="">\r\n                                        <div class="hpanel hbgred">\r\n                                            <div class="panel-body">\r\n                                                <div class="text-center">\r\n                                                    <i class="pe-7s-config icon-lg"></i><br>\r\n                                                    <small>Hardware/Software License quote</small>\r\n                                                </div>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>--> </div> </div> <div class="modal-footer"> <!--<button type="button" class="btn btn-default" data-dismiss="modal">Close</button>--> <button type="button" class="btn btn-primary" ng-click="submit()">Clone</button> </div> '), a.put("views/collabraters.html", '<div class="modal-dialog modal-lg"> <div class="col-md-9"> <h2>Invite people to collaborate</h2> <div> <h4>Ready only access<h4> <div ng-repeat="collabusers in collabdata | filter: { privilege_status : \'1\' }:true"> <label><input type="checkbox" ng-model="mycollab" ng-true-value="\'{{2}}\'" ng-false-value="\'{{1}}\'" ng-change="editaccess(collabusers)">{{collabusers.first_name}}</label> {{mycollab}} </div> </h4></h4></div> <div> <h4>Edit Access<h4> <div ng-repeat="country in collabdata | filter: { privilege_status : \'2\' }:true"> <label><input type="checkbox" checked ng-model="myCountry" ng-true-value="\'{1}\'" ng-false-value="\'2\'" ng-change="readaccess(country)">{{country.first_name}}</label> </div> {{myCountry}} </h4></h4></div> <!--<button type="button" class="btn btn-primary" ng-click="sharecollab()">Share</button>--> </div> </div>'), a.put("views/companysetting.html", '<div class="modal-dialog modal-lg"> <div class="setting"> <div class="normalheader transition animated fadeIn"> <div class="hpanel"> <div class="panel-body"> <div class="pull-right"> <a ng-click="closemodal()"> <i class="pe-7s-close fa-2x"></i></a> </div> </div> <div class="panel-body"> <div class="pull-right m-t-lg" id="hbreadcrumb"> <ol class="hbreadcrumb breadcrumb"> <li><a ng-href="#/main">Dashboard</a></li> <li class="active"> <span>Company</span> </li> </ol> </div> <h2 class="font-light m-b-xs"> Company </h2> <small></small> </div> </div> </div> <div class="content animate-panel" effect="zoomIn"> <uib-alert ng-repeat="alert in errors" class="display-alert" type="{{alert.type}}" close="closeAlert($index)" ng-click="closeAlert($index)" id="display-error-home">{{alert}}</uib-alert> <uib-alert ng-repeat="alert in alerts" class="display-alert" type="{{alert.type}}" close="closeAlerts($index)" ng-click="closeAlert($index)" id="display-error-home">{{alert.msg}}</uib-alert> <div class="row"> <div class="col-lg-12"> <div class="hpanel"> <div class="panel-body"> <form name="logovalidate"> <h3>Company Logo</h3> <div> <img style="margin-bottom:5px; border: 5px solid #e0e1e7" height="210" width="250" ng-src="{{orgdata[0].image_path}}"> <img ngf-thumbnail="files"> </div> <input type="file" ng-model="files" name="files" multiple accept="image/*, .zip" maxsize="500" required base-sixty-four-input> <span ng-show="logovalidate.files.$error.maxsize">Files must not exceed 500 KB</span><br> <button class="btn btn-primary" ng-click="send()" ng-disabled="logovalidate.$invalid">Upload</button> </form> </div> <br><br> <div class="panel-body"> <h3>Company Address</h3> <div class="address" ng-hide="editaddress"> <a class="pull-right" ng-hide="editaddress" ng-click="edit()"><i class="glyphicon glyphicon-pencil"></i></a> <label>{{orgdata[0].address}}</label><br> <label>{{orgdata[0].address_line_1}}</label><br> <label>{{orgdata[0].city}}</label><br> <div ng-repeat="info in allstates | filter: { stateid :statedetail}:true"> <label>{{info.statename}}</label> </div> <div ng-repeat="info in allProducts | filter: { countryid :countrydetail}:true"> <label>{{info.countryname}}</label> </div> <label>{{orgdata[0].url}}</label><br> <!--<label>{{orgdata[0].domain}}</label>--> <label>{{orgdata[0].phone_number}}</label><br> <label>{{orgdata[0].email_address}}</label><br> </div> <div class="row"> <div class="col-md-8" ng-show="editaddress"> <label class="control-label">Street Address / Landmark</label><br> <input name="Tenancy" id="sender-Tenancy" type="text" placeholder="Street Address / Landmark" class="form-control email" ng-model="mainaddress" required><br> <label class="control-label">Address line 1</label><br> <input name="Tenancy" id="sender-Tenancy" type="text" placeholder="Address line 1" class="form-control email" ng-model="address1" required> <!--<input name="Tenancy" id="sender-Tenancy" type="text" placeholder="Address line 2" class="form-control email" ng-model="address2" required>--> </div> </div><br> <div class="row"> <div class="col-md-4"><label class="control-label" ng-show="editaddress">Country</label><br> <div class="dropdown" ng-show="editaddress"> <select class="form-control dropdown-toggle" type="button" data-toggle="dropdown" ng-options="value.countryid as value.countryname for value in allProducts" ng-model="country"> <span class="caret"></span>Country:{{orgdata[0].country_id}}</select> </div> </div> <div class="col-md-4"><label class="control-label" ng-show="editaddress">State</label><br> <div class="dropdown" ng-show="editaddress"> <select class="form-control dropdown-toggle" type="button" data-toggle="dropdown" ng-options="value.stateid as value.statename for value in allstates | filter: { countryid:country } " ng-model="state" ng-init="state = allstates[0]">. <option selected></option> </select> </div> </div> </div><br> <div class="row" ng-show="editaddress"> <div class="col-md-3"> <label class="control-label">City</label><br> <input name="Tenancy" only-words id="sender-Tenancy" type="text" placeholder="Enter City" class="form-control email" ng-model="city" required> </div> <form name="validate"> <div class="col-md-3"> <div class="form-group required" ng-class="{\'has-error\': validate.input.$touched && validate.input.$error.required}"> <label class="control-label">Website</label><br> <input type="url" name="input" placeholder="Enter website" class="form-control email" ng-model="urlsite" required> <div role="alert"> <span class="error" ng-show="validate.input.$touched && validate.input.$error.required"> Required!</span> <span class="error" ng-show="validate.input.$touched && validate.input.$error.url"> Not valid url!</span> </div> </div> </div> <div class="col-md-3"> <div class="form-group required" ng-class="{\'has-error\': validate.ph.$touched && validate.ph.$error.required}"> <label class="control-label">Phone Number</label><br> <input name="ph" ng-pattern="ph_numbr" id="sender-Tenancy" type="text" placeholder="Phone Number" class="form-control email" ng-model="phone" required> <span ng-show="validate.ph.$touched && validate.ph.$invalid" class="denger">Phone number is invalid.</span> </div> </div> <div class="col-md-3"> <label class="control-label">Email</label><br> <input name="Tenancy" id="sender-Tenancy" type="text" placeholder="Email" class="form-control email" ng-model="aemail" required ng-pattern="/^[a-z]+[a-z0-9._]+@[a-z]+\\.[a-z.]{2,5}$/"> </div> <!--<div class="col-md-8"><br>\r\n                <label class="control-label">Domain :</label><br>\r\n                <input name="domain" type="url" id="sender-Tenancy"  placeholder="Enter domain" class="form-control email" ng-model="domain" required>\r\n                <div role="alert">\r\n                  <span class="error" ng-show="adressform.domain.$touched && adressform.domain.$error.required">\r\n                  Required!</span>\r\n                  <span class="error" ng-show="adressform.domain.$touched && adressform.domain.$error.url">\r\n                  Not valid url!</span>\r\n                </div>\r\n                \r\n              </div>--> </form> <div class="col-md-12" ng-show="editaddress"> <br> <button class="btn btn-primary" ng-click="address()">Save</button> <button class="btn btn-primary" ng-click="canceladdress()">Cancel</button> </div> </div> </div> <br> <div class="panel-body"> <h3>Account Administration<a class="pull-right" ng-click="editadmin()" ng-show="isAdmin"><i class="glyphicon glyphicon-pencil"></i></a></h3> <!--<label>{{orgdata[0].account_admin}}</label><br>--> <div ng-repeat="info in userdata | filter: { is_tenant_admin :\'1\'}"> <h4>{{info.email}}</h4> </div> <div ng-show="showadmin"> <div class="row"> <div class="col-md-8"> <div class="dropdown"> <select class="selectpicker form-control" multiple data-toggle="dropdown" ng-options=" value.user_id as value.email for value in userdata" ng-model="adminsuser"> <span class="caret"></span>Select</select><br> </div><br> <button class="btn btn-primary" ng-click="saveadmin()">Save</button> <button class="btn btn-primary" ng-click="cancleeditadmin()">Cancel</button> </div> </div> </div> </div> <br><br> <div class="panel-body"> <!--<h3>Currency:{{orgdata[0].currency_id}}--> <h3>Currency<h3> <!--6666<a class="pull-right" ng-click="collapsed=!collapsed" ng-hide="collapsed"><i class="glyphicon glyphicon-pencil"></i></a><br>\r\n            <!--dd<div ng-repeat="info in currancys | filter: { currencyid :money}">\r\n              <h5>{{info.currencyName}}</h5>\r\n            </div>oo--> <h5>Doller</h5> <div class="row"> <!--<div ng-show="collapsed">\r\n                <div class="col-md-8">\r\n                  <div class="dropdown" >\r\n                    <select class="form-control dropdown-toggle" type="button" data-toggle="dropdown" ng-options="m.currencyid as m.currencyName for m in currancys" ng-model="money">\r\n                      <span class="caret"></span>Select</select>\r\n                      \r\n                    </div>\r\n                  </div><br>\r\n                  <div class="col-md-12">   <br>\r\n                    <button class="btn btn-primary" ng-click="currancy()" >Save</button>\r\n                    <button class="btn btn-primary" ng-click="collapsed=!collapsed" >Cancel</button>\r\n                  </div>\r\n                </div>--> </div> </h3></h3></div> </div> </div> </div> </div> </div> </div>'), a.put("views/companysetting_old.html", '<div id="header" ng-include="\'views/header.html\'"></div> <!-- Navigation --> <aside id="menu" ng-include="\'views/navigation.html\'"></aside> <div id="wrapper"> <div class="setting"> <div class="normalheader transition animated fadeIn"> <div class="hpanel"> <div class="panel-body"> <div class="pull-right m-t-lg" id="hbreadcrumb"> <ol class="hbreadcrumb breadcrumb"> <li><a ng-href="#/main">Dashboard</a></li> <li class="active"> <span>Company</span> </li> </ol> </div> <h2 class="font-light m-b-xs"> Company </h2> <small></small> </div> </div> </div> <div class="content animate-panel" effect="zoomIn"> <uib-alert ng-repeat="alert in errors" class="display-alert" type="{{alert.type}}" close="closeAlert($index)" ng-click="closeAlert($index)" id="display-error-home">{{alert}}</uib-alert> <uib-alert ng-repeat="alert in alerts" class="display-alert" type="{{alert.type}}" close="closeAlerts($index)" ng-click="closeAlert($index)" id="display-error-home">{{alert.msg}}</uib-alert> <div class="row"> <div class="col-lg-12"> <div class="hpanel"> <div class="panel-body"> <h3>Company Logo</h3> <div> <img style="margin-bottom:5px; border: 5px solid #e0e1e7" height="210" width="250" ng-src="{{orgdata.image_raw}}"> <img ngf-thumbnail="files"> </div> <input type="file" ng-model="files" name="files" multiple accept="image/*, .zip" maxsize="5000" required base-sixty-four-input> <span ng-show="form.files.$error.maxsize">Files must not exceed 5000 KB</span><br> <button class="btn btn-primary" ng-click="send()">Upload</button> </div> <br><br> <div class="panel-body"> <div class="address" ng-hide="editaddress"> <h3>Company Address<a ng-hide="editaddress" ng-click="edit()"><i class="glyphicon glyphicon-pencil"></i></a></h3> <label>{{orgdata[0].address}}</label><br> <label>{{orgdata[0].address_line_1}}</label><br> <label>{{orgdata[0].city}}</label><br> <div ng-repeat="info in allstates | filter: { countryid :statedetail}"> <label>{{info.statename}}</label> </div><br> <div ng-repeat="info in allProducts | filter: { countryid :countrydetail}"> <label>{{info.countryname}}</label> </div><br> <label>{{orgdata[0].url}}</label><br> <label>{{orgdata[0].domain}}</label> </div> <div class="row"> <div class="col-md-8" ng-show="editaddress"> <input name="Tenancy" id="sender-Tenancy" type="text" placeholder="Street Address / Landmark" class="form-control email" ng-model="mainaddress" required><br> <input name="Tenancy" id="sender-Tenancy" type="text" placeholder="Address line 1" class="form-control email" ng-model="address1" required><br> <!--<input name="Tenancy" id="sender-Tenancy" type="text" placeholder="Address line 2" class="form-control email" ng-model="address2" required>--> </div> </div><br> <div class="row"> <div class="col-md-4"> <form name="addressform"> <div class="dropdown" ng-show="editaddress"> <select class="form-control dropdown-toggle" type="button" data-toggle="dropdown" ng-options="value.countryid as value.countryname for value in allProducts" ng-model="country"> <span class="caret"></span>Country:{{orgdata[0].country_id}}</select> </div> </form></div> <div class="col-md-4"> <div class="dropdown" ng-show="editaddress"> <select class="form-control dropdown-toggle" type="button" data-toggle="dropdown" ng-options="value.countryid as value.statename for value in allstates | filter: { countryid:country } " ng-model="state" ng-init="state = allstates[0]">. <option selected></option> </select> </div> </div> </div><br> <div class="row" ng-show="editaddress"> <div class="col-md-4"> <input name="Tenancy" id="sender-Tenancy" type="text" placeholder="Enter City" class="form-control email" ng-model="city" required> </div> <div class="col-md-4"> <input name="site" type="text" id="sender-Tenancy" placeholder="Enter website" class="form-control email" ng-model="urlsite" required> </div> <div class="col-md-8"><br> <input name="site" type="text" id="sender-Tenancy" placeholder="Enter domain" class="form-control email" ng-model="domain" required> </div>  <div class="col-md-12"> <br> <button class="btn btn-primary" ng-click="address()">Save</button> <button class="btn btn-primary" ng-click="canceladdress()">Cancel</button> </div> </div><br> </div> <br><br> <div class="panel-body"> <div class="row"> <h3>Account Administration:</h3><a ng-click="editadmin()" ng-show="isAdmin"><i class="glyphicon glyphicon-pencil"></i></a><br> <!--<label>{{orgdata[0].account_admin}}</label><br>--> <div ng-repeat="info in userdata | filter: { is_tenant_admin :\'1\'}"> <h4>{{info.email}}</h4> </div> <div ng-show="showadmin"> <div class="dropdown"> <select class="selectpicker" multiple data-toggle="dropdown" ng-options=" value.user_id as value.email for value in userdata" ng-model="adminsuser"> <span class="caret"></span>Select</select><br> </div><br> <button class="btn btn-primary" ng-click="saveadmin()">Save</button> <button class="btn btn-primary" ng-click="cancleeditadmin()">Cancel</button> </div> </div> </div> <br><br> <div class="panel-body"> <!--<h3>Currency:{{orgdata[0].currency_id}}--><br> <div ng-repeat="info in currancys | filter: { currencyid :money}"> <h3>Currency:{{info.currencyName}}</h3> </div> <a ng-click="collapsed=!collapsed" ng-hide="collapsed"><i class="glyphicon glyphicon-pencil"></i></a><br> <div class="row"> <div class="col-md-12"> <div ng-show="collapsed"> <div class="col-md-6"> <div class="dropdown"> <select class="form-control dropdown-toggle" type="button" data-toggle="dropdown" ng-options="m.currencyid as m.currencyName for m in currancys" ng-model="money"> <span class="caret"></span>Select</select> </div> </div><br> <div class="col-md-12"> <br> <button class="btn btn-primary" ng-click="currancy()">Save</button> <button class="btn btn-primary" ng-click="collapsed=!collapsed">Cancel</button> </div> </div> </div> </div> </div> </div> </div> </div> </div> </div> </div>'),
            a.put("views/createpage.html", '<div id="header" ng-include="\'views/header.html\'"></div> <!-- Navigation --> <aside id="menu" ng-include="\'views/navigation.html\'"></aside> <div id="wrapper"> <div class="setting"> <div id="container" class="content"> <div class="row"> <div class="col-md-4"> <h3 ng-hide="show">{{praposalname}} <a class="pull-right" ng-click="show=!show" ng-show="isAdmin"><i class="glyphicon glyphicon-pencil"></i></a></h3> </div> <!--<div class = "col-md-2">\r\n                <a class="pull-right" ng-click="show=!show" ng-show="isAdmin"><i class="glyphicon glyphicon-pencil"></i></a>\r\n            </div> --> <div class="col-md-4"> <input name="pname" ng-show="show" id="sender-Tenancy" type="text" placeholder="Praposal Name" class="form-control email" ng-model="pname" required> </div> <div class="col-md-2"> <button class="btn btn-primary" ng-show="show" ng-click="submitname()">Save</button> </div> </div> <div class="row"> <div class="col-md-12"> <div class="col-md-2 no-padding"> <div class="hpanel"> <div class="panel-body no-padding"> <div class="p20 themecolor"> <p>Widgets</p> </div> </div> </div> </div> <style>.p20 i img{width:20px !important;}</style> <div class="col-md-10 no-padding"> <div class="hpanel"> <div class="panel-body no-padding" ui-sortable="sortableOptions"> <div class="pull-left p20"> <i id="draggable" class="prl15 border-right"><img src="images/widget/text.d62f4b2b.png"></i> <i class="pe-7s-folder fa-2x prl15 border-right" db-draggable data-text="true"></i> <i class="pe-7s-monitor fa-2x prl15 border-right" db-draggable data-square="true"></i> <i class="pe-7s-close-circle fa-2x prl15 border-right" db-draggable data-circle="true"></i> <i class="pe-7s-video fa-2x prl15" db-draggable data-video="true"></i> <i class="pe-7s-video fa-2x prl15" db-draggable data-line="true"></i> <i class="prl15 border-right" db-draggable data-triangle="true"><img src="images/widget/shape.7c2630d9.png"></i> <i class="prl15 border-right" db-draggable data-table="true"><img src="images/widget/table.049d80eb.png"></i> <a ng-click="uploadimage()"><i class="prl15 border-right"><img src="images/widget/image.55ef2b73.png"></i></a> <i class="prl15 border-right"><img src="images/widget/video.849a679a.png"></i> <i class="prl15"></i> </div> <div class="pull-right light-blue p20"> <a ng-click="clonepraposal()"><i class="prl15 border-right"><img src="images/widget/copy.0910af3f.png"></i></a> <a ng-click="deletepraposal()"> <i class="prl15 border-right"><img src="images/widget/close.cc3e5159.png"></i></a> <a ng-click="priweviemode()"> <i class="prl15 border-right"><img src="images/widget/search.4b444c95.png"></i></a> <a ng-click="download()"> <i class="prl15 border-right"><img src="images/widget/download.96fad1d1.png"></i></a> <a ng-click="opencollab()"> <i class="prl15 border-right"><img src="images/widget/collab.333096da.png"></i></a> <a ng-click="emailwindow()"> <i class="prl15 border-right"><img src="images/widget/send.efe8b906.png"></i></a> </div> </div> </div> </div> </div> </div> <div class="row"> <div class="col-md-12"> <div class="col-md-2 no-padding"> <div class="hpanel zerobottom" ng-repeat="pagecnt in pagedata"> <div class="panel-body navy-blue text-center"> <a ng-click="sendpage(pagecnt)"> <!--<img alt="logo" class="img-circle img-small" src="images/a1.cfc46f77.jpg">--> <i class="pe-7s-config icon-lg"></i> <div class="m-t-sm"> <strong>{{pagecnt.template_page_name}}</strong> </div> </a> </div> </div> <!--<div class="hpanel zerobottom">\r\n                        <div class="panel-body text-center">\r\n                            <i class="pe-7s-config icon-lg" ></i>\r\n                            <div class="m-t-sm">\r\n                                <strong>Executive Summary</strong>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class="hpanel zerobottom">\r\n                        <div class="panel-body text-center">\r\n                            <i class="pe-7s-config icon-lg" ></i>\r\n                            <div class="m-t-sm">\r\n                                <strong>Pricing</strong>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    \r\n                    <div class="hpanel zerobottom">\r\n                        <div class="panel-body text-center">\r\n                            <i class="pe-7s-config icon-lg" ></i>\r\n                            <div class="m-t-sm">\r\n                                <strong>Terms & Conditions</strong>\r\n                            </div>\r\n                        </div>\r\n                    </div>--> </div> <div class="col-md-10"> <div class="hpanel"> <div db-droppable class="proposal-drop-container" id="proposalDropContainer"> <div data-ng-bind-html="htmlString" id="pagecontaint"> </div> </div> <!--<div class="panel-body"  ng-model="ssss"  medium-editor bind-options="{\'toolbar\': {\'buttons\': [\'bold\', \'italic\', \'underline\']}}"  id="droppable" style="border:2px solid #696969; padding:20px; margin:10px; height:800px;">\r\n                            <div class="pull-right">\r\n                                <img src="../images/chat.png">\r\n                            </div>\r\n                            \r\n                            <!--<h2 class="m-t-none border-all p20 text-center">You just created a new Proposal </h2>\r\n                            <p class="border-all p20 text-center">\r\n                                <br><br><br>\r\n                                Customize your page as you would like by dragging and dropping<br> thewidgets from the widgets panel above\r\n                                <br><br><br>\r\n                            </p>\r\n                            <br><br><br><br><br><br><br>\r\n                            \r\n                            \r\n                        </div>--> </div> <button class="btn btn-primary" ng-click="submitpage()">Save</button> <button class="btn btn-primary" ng-click="updatepage()">update</button> <!--<button class="btn btn-primary" ng-click="updatepage()" >update</button>--> </div> </div> </div> <ng-bind-html ng-bind-html="ssss"></ng-bind-html> <div class="row projects"> <div class="col-lg-12"> <div class="pull-right"> <img src="images/floating.png"> </div> </div> </div> </div> </div> </div> '), a.put("views/createproposal.html", '<!--<div id="header" ng-include="\'views/header.html\'"></div>\r\n<!-- Navigation \r\n<aside id="menu" ng-include="\'views/navigation.html\'"></aside>\r\n<div id="wrapper">--> <div class="modal-dialog modal-lg"> <div class="color-line"></div> <div class="modal-header"> <h4 class="modal-title">Add New Proposal<span class="pull-right"><a ng-click="closemodal()"> <i class="pe-7s-close fa-2x"></i></a> </span></h4> </div> <div class="modal-body"> <div class="row"> <div class="col-md-6"> <label class="control-label">Name</label> <div class="form-group required"> <input name="name" type="text" class="form-control" ng-maxlength="50" placeholder="Name of Proposal" ng-model="praposalname" maxlength="20" minlength="3" required> </div> </div> <div class="col-md-6"> <label class="control-label">Client Name:</label> <div class="form-group required"> <div class="dropdown"> <select class="form-control dropdown-toggle" type="button" data-toggle="dropdown" ng-options="info.id as info.firstname for info in clients" ng-model="cname">. <option selected></option> </select> </div> </div> </div> <div class="col-md-6"> <label class="control-label">End Date</label> <div class="form-group required"> <input type="date" id="exampleInput-txt" name="input" class="form-control" ng-model="myDate" placeholder="yyyy-MM-dd" required> </div> </div> <div class="col-md-6"> <label class="control-label">Multiple Collaborators</label> <div class="dropdown"> <select class="selectpicker form-control" multiple data-toggle="dropdown" ng-options="value.user_id as value.first_name for value in userdata.users " ng-model="coname">. <option selected></option> </select> </div> </div> <div class="col-md-3"> <br> <div class="hpanel" style="border:1px dotted #434E6E"> <div class="panel-body"> <div class="text-center"> <img src="images/portrait.0fa6f2b9.png"> </div> </div> </div> </div> <div class="col-md-4"> <br> <div class="hpanel" style="border:1px dotted #434E6E"> <div class="panel-body"> <div class="text-center"> <img src="images/ladscape.6e30e7b6.png"> </div> </div> </div> </div> <div class="col-md-4"> <br> <div class="hpanel hbggreen"> <a ng-click="submit()"> <div class="panel-body"> <div class="text-center"> <br> <i class="pe-7s-note fa-4x"></i><br> <small>Create Proposal</small> <br><br> </div> </div> </a> </div> </div> </div> <br><br><br> <div class="row"> <div class="col-md-12"> <strong> Select a Template from the gallery</strong> <hr> </div> </div> <div class="row"> <div class="col-md-3" style="" ng-repeat="temp in templates" ng-click="selecttemp(temp)"> <div class="hpanel" ng-class="{ \'hnavyblue\' : selected}"> <div class="panel-body"> <div class="text-center"> <i class="pe-7s-config icon-lg"></i><br> <small>{{temp.template.template_name}}</small> </div> </div> </div> </div> <!--<div class="col-md-3" style="">\r\n                                        <div class="hpanel hbgblue">\r\n                                            <div class="panel-body">\r\n                                                <div class="text-center">\r\n                                                    <i class="pe-7s-config icon-lg"></i><br>\r\n                                                    <small>IT Infrastructure and Delivery</small>\r\n                                                </div>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class="col-md-3" style="">\r\n                                        <div class="hpanel hbgyellow">\r\n                                            <div class="panel-body">\r\n                                                <div class="text-center">\r\n                                                    <i class="pe-7s-config icon-lg"></i><br>\r\n                                                    <small>Application Development</small>\r\n                                                </div>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class="col-md-3" style="">\r\n                                        <div class="hpanel hbgred">\r\n                                            <div class="panel-body">\r\n                                                <div class="text-center">\r\n                                                    <i class="pe-7s-config icon-lg"></i><br>\r\n                                                    <small>Hardware/Software License quote</small>\r\n                                                </div>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>--> </div> </div> <div class="modal-footer"> <button type="button" class="btn btn-default" data-dismiss="modal">Close</button> <button type="button" class="btn btn-primary">Save changes</button> </div> </div>'), a.put("views/createstyle.html", '<div id="header" ng-include="\'views/header.html\'"></div> <!-- Navigation --> <aside id="menu" ng-include="\'views/navigation.html\'"></aside> <div id="wrapper"> <container-directive></container-directive> <div id="container"> <uib-alert ng-repeat="alert in errors" class="display-alert" type="{{alert.type}}" close="closeAlert($index)" ng-click="closeAlert($index)" id="display-error-home">{{alert}}</uib-alert> <uib-alert ng-repeat="alert in alerts" class="display-alert" type="{{alert.type}}" close="closeAlerts($index)" ng-click="closeAlert($index)" id="display-error-home">{{alert.msg}}</uib-alert> <div class="panel-body no-padding"> <div summernote ng-model="summernoteTextTwo" config="summernoteOpt"></div> </div> <button class="btn btn-primary" ng-hide="update" ng-click="submitstyle()">Save</button> <button class="btn btn-primary" ng-show="update" ng-click="updatestyle()">Update</button> <!--<span  id="draggable"  >Text block\r\n</span>\r\n<div  id="d" data-ng-model="index.highlights">\r\n</div\r\n>\r\n<svg id="dragThis">\r\n  <rect  x="50" y="20" rx="20" ry="20" width="50" height="50"\r\n  style="fill:red;stroke:black;stroke-width:5;opacity:0.5" />\r\n</svg>\r\n\r\n<svg data-drag="true" ng-model="list1" jqyoui-draggable="{animate:true}" >\r\n  <circle cx="50" cy="50" r="40" stroke="green" stroke-width="4" fill="white" />\r\n</svg>\r\n<div id="container" >\r\n <svg height="210" width="500"  id="dragThis">\r\n  <line x1="0" y1="0" x2="200" y2="200" style="stroke:rgb(255,0,0);stroke-width:2" />\r\n</svg> \r\n</div>\r\n<svg xmlns="http://www.w3.org/2000/svg" version="1.1" class="svg-triangle"  id="dragThis">\r\n  <polygon points="0,0 100,0 50,100"/>\r\n</svg>\r\n\r\n</div><br><br>\r\n <div class="panel-body no-padding" >\r\n                <div summernote ng-model="summernoteTextTwo" config="summernoteOpt"></div>\r\n            </div>\r\n<h4>Drop Here</h4>\r\n<div ng-model="ssss"  medium-editor bind-options="{\'toolbar\': {\'buttons\': [\'bold\', \'italic\', \'underline\']}}"  id="droppable" style="border:2px solid #696969; padding:20px; margin:10px; height:800px;" >\r\n\t\r\n\t</div>\r\n\r\n{{summernoteTextTwo}}\r\n <ng-bind-html ng-bind-html="ssss"></ng-bind-html>\r\n <button class="btn btn-primary" ng-click="submitpage()">Save</button>\r\n <div ng-model="pdata"  medium-editor bind-options="{\'toolbar\': {\'buttons\': [\'bold\', \'italic\', \'underline\']}}"  id="droppable" style="border:2px solid #696969; padding:20px; margin:10px; height:800px;" >--> </div> </div>'), a.put("views/db-circle.html", '<div class="db-circle-widget" db-resizable> <p contenteditable="true" class="editable-area"> </p> <i class="fa fa-close" ng-click="removecircle()"></i> </div>'), a.put("views/db-image.html", '<div class="db-image-widget" db-resizable> <img ng-src="{{ imageSource }}"> </div>'), a.put("views/db-line.html", '<div class="db-line-widget" db-resizable> </div>'), a.put("views/db-square.html", '<div class="db-square-widget" db-resizable> <p contenteditable="true" class="editable-area"> </p> </div>'), a.put("views/db-table.html", '<div class="db-table-widget" ng-class="{\'show-config\': toggleShowHide}"> <table db-resizable class="table table-hover"> <!--<thead>\r\n      <th>\r\n        Demo 1\r\n      </th>\r\n      <th>\r\n        Demo 2\r\n      </th>\r\n      <th>\r\n        Demo 3\r\n      </th>\r\n    </thead>--> <tbody> <tr> <td> <p contenteditable="true" class="editable-area"> </p> </td> <td> <p contenteditable="true" class="editable-area"> </p> </td> <td> <p contenteditable="true" class="editable-area"> </p> </td> </tr> <tr> <td> <p contenteditable="true" class="editable-area"> </p> </td> <td> <p contenteditable="true" class="editable-area"> </p> </td> <td> <p contenteditable="true" class="editable-area"> </p> </td> </tr> <tr> <td> <p contenteditable="true" class="editable-area"> </p> </td> <td> <p contenteditable="true" class="editable-area"> </p> </td> <td> <p contenteditable="true" class="editable-area"> </p> </td> </tr> <tr> </tr> </tbody> </table> <div class="config-area"> <i class="fa fa-close" ng-click="removetable()"></i> <div class="row"> <div class="col-md-12"> <div class="hpanel hbgblue"> <div class="panel-body"> <div class="row"> <div class="col-md-2"> <select class="form-control-new"> <option>Heading 1</option> <option>Heading 2</option> <option>Heading 3</option> <option>Heading 4</option> </select> </div> <div class="col-md-2"> <select class="form-control-new"> <option>Font 1</option> <option>Font 2</option> <option>Font 3</option> <option>Font 4</option> </select> </div> <div class="col-md-2"> <i class="fa fa-tint fa-2x prl15"></i> </div> </div> <br> <div class="row"> <div class="col-md-3"> <select class="form-control-new"> <option>Size</option> <option>10</option> <option>12</option> <option>14</option> </select> </div> <!--<div class="col-md-9">\r\n                                <i class="fa fa-bold fa-2x prl15 border-right"></i> \r\n                                <i class="fa fa-italic fa-2x prl15 border-right"></i> \r\n                                <i class="fa fa-underline fa-2x prl15 border-right"></i>  \r\n                                <i class="fa fa-align-left fa-2x prl15 border-right"></i>\r\n                                <i class="fa fa-align-justify fa-2x prl15 border-right"></i>\r\n                                <i class="fa fa-align-right fa-2x prl15"></i>\r\n                            </div>--> </div> <br> </div> </div> </div> </div> </div> </div>'), a.put("views/db-text.html", '<div class="db-text-widget" db-resizable> <p contenteditable="true" class="editable-area" ng-model="dynamicId" medium-editor> </p> <i class="fa fa-close" ng-click="removetext()"></i> </div>'), a.put("views/db-triangle.html", '<div class="db-triangle-widget" db-resizable> <p contenteditable="true" class="editable-area"> </p> </div>'), a.put("views/db-video.html", '<div class="db-video-widget" db-resizable ng-class="{\'show-config\': toggleShowHide}"> <iframe class="video-container" ng-src="{{ trustSrc(videoSource) }}"> </iframe> <div class="config-area"> <div>URL : <input type="url" placeholder="Enter video url here" ng-model="videoUrl"></div> <br> <div><button type="button" class="btn btn-success" ng-click="submitUrl()">OK</button></div> <div><button type="button" class="btn btn-Danger" ng-click="delete()">Remove</button></div> </div> <div class="config-controlls"> <i class="pe-7s-edit fa-2x prl15 pull-right" ng-click="toggleShowHideConfig()"></i> </div> </div>'), a.put("views/demo.html", '<div id="header" ng-include="\'views/header.html\'"></div> <!-- Navigation --> <aside id="menu" ng-include="\'views/navigation.html\'"></aside> <style>.m-t-xl{margin-top:15px;}\r\n#example1 tr{background-color:#97a3c7;}\r\n#example1 th{padding:5px; background-color:#ffffff;}\r\n#example1 td{padding:5px; color:#ffffff;}\r\n#example1 .footable-row-detail-cell{background-color:#ffffff !important; padding:30px 0px;}\r\n.footable.breakpoint > tbody > tr > td > span.footable-toggle {\r\n    color: #ffffff;\r\n    padding: 10px;\r\n}\r\n.newtagtitile{\r\n    font-size: 18px !important;\r\n    font-weight: 300 !important;\r\n    margin:10px 0px !important;\r\n}</style> <div id="wrapper"> <div class="content animate-panel"> <div class="row"> <div class="col-lg-12"> <h3>Dashboard</h3><br> </div> </div> <div class="row"> <div class="col-lg-3"> <div class="hpanel"> <div class="panel-body h-200"> <div class="stats-title"> <h4> <img src="images/icons/dashboard/icon1.png"> &nbsp;Billing</h4> </div> <div class="m-t-xl"> <h1 class="m-xs">$100.90</h1> <small>Current billing period <br>Aug 01, 2016 to Jan 31, 2016</small> </div> </div> <div class="panel-footer"> <div class="row"> <div class="col-xs-1"><i class="pe-7s-right-arrow fa-2x pull-left"></i></div> <div class="col-xs-10"><h5>View Details </h5></div> </div> </div> </div> </div> <div class="col-lg-3"> <div class="hpanel stats"> <div class="panel-body h-200"> <div class="stats-title"> <h4><img src="images/icons/dashboard/icon2.png"> &nbsp;Proposals</h4> </div> <div class="m-t-xl"> <div class="row"> <div class="col-xs-5" style="border-right:1px solid #eeeeee"> <div class="m-xs font-bold no-margins">Open</div> <h1 class="m-xs">10</h1> </div> <div class="col-xs-7"> <div class="m-xs font-bold no-margins">Under Review <span class="pull-right">02</span></div> <div class="m-xs font-bold no-margins">Submitted <span class="pull-right">03</span></div> <div class="m-xs font-bold no-margins">Closed <span class="pull-right">20</span></div> </div> </div> </div> </div> <div class="panel-footer"> <div class="row"> <div class="col-xs-1"><i class="pe-7s-plus fa-2x pull-left"></i></div> <div class="col-xs-10"><h5> Create New </h5></div> </div> </div> </div> </div> <div class="col-lg-3"> <div class="hpanel stats"> <div class="panel-body h-200"> <div class="stats-title"> <h4> <img src="images/icons/dashboard/icon3.png"> &nbsp;Users</h4> </div> <div class="m-t-xl"> <div class="row"> <div class="col-xs-6" style="border-right:1px solid #eeeeee"> <div class="m-xs font-bold no-margins">Admin</div> <h1 class="m-xs">10</h1> </div> <div class="col-xs-6"> <div class="m-xs font-bold no-margins">End Users</div> <h1 class="m-xs">10</h1> </div> </div> </div> </div> <div class="panel-footer"> <div class="row"> <div class="col-xs-1"><i class="pe-7s-plus fa-2x pull-left"></i></div> <div class="col-xs-10"><h5> Create New </h5></div> </div> </div> </div> </div> <div class="col-lg-3"> <div class="hpanel stats"> <div class="panel-body h-200"> <div class="stats-title"> <h4> <img src="images/icons/dashboard/icon4.png"> &nbsp;Subscription</h4> </div> <div class="m-t-xl"> <div class="row"> <div class="col-xs-5" style="border-right:1px solid #eeeeee"> <div class="m-xs font-bold no-margins">Basic Plan</div> <h1 class="m-xs">3.0</h1> </div> <div class="col-xs-7"> <i class="fa fa-star" style="color:#ffd037"></i> <i class="fa fa-star" style="color:#ffd037"></i> <i class="fa fa-star" style="color:#ffd037"></i> <i class="fa fa-star"></i> <i class="fa fa-star"></i> </div> </div> </div> </div> <div class="panel-footer"> <div class="row"> <div class="col-xs-1"><i class="pe-7s-up-arrow fa-2x pull-left"></i></div> <div class="col-xs-10"><h5> Upgrade </h5></div> </div> </div> </div> </div> </div> <div class="row"> <div class="col-lg-3"> <div class="hpanel stats"> <div class="panel-body h-200"> <div class="stats-title"> <h4> <img src="images/icons/dashboard/icon5.png"> &nbsp;Proposals Won</h4> </div> <div class="m-t-xl"> <div class="row"> <div class="col-xs-5" style="border-right:1px solid #eeeeee"> <div class="m-xs font-bold no-margins">This month</div> <h1 class="m-xs">02</h1> </div> <div class="col-xs-7"> <div class="m-xs font-bold no-margins">Last Month <span class="pull-right">10</span></div> <div class="m-xs font-bold no-margins">This Quarter <span class="pull-right">03</span></div> <div class="m-xs font-bold no-margins">Last Quarter <span class="pull-right">20</span></div> </div> </div> </div> </div> <div class="panel-footer"> <div class="row"> <div class="col-xs-1"><i class="pe-7s-right-arrow fa-2x pull-left"></i></div> <div class="col-xs-10"><h5> View Details </h5></div> </div> </div> </div> </div> <div class="col-lg-3"> <div class="hpanel stats"> <div class="panel-body h-200"> <div class="stats-title"> <h4> <img src="images/icons/dashboard/icon6.png"> &nbsp;Proposals Lost</h4> </div> <div class="m-t-xl"> <div class="row"> <div class="col-xs-5" style="border-right:1px solid #eeeeee"> <div class="m-xs font-bold no-margins">This month</div> <h1 class="m-xs">02</h1> </div> <div class="col-xs-7"> <div class="m-xs font-bold no-margins">Last Month <span class="pull-right">10</span></div> <div class="m-xs font-bold no-margins">This Quarter <span class="pull-right">03</span></div> <div class="m-xs font-bold no-margins">Last Quarter <span class="pull-right">20</span></div> </div> </div> </div> </div> <div class="panel-footer"> <div class="row"> <div class="col-xs-1"><i class="pe-7s-right-arrow fa-2x pull-left"></i></div> <div class="col-xs-10"><h5> View Details </h5></div> </div> </div> </div> </div> <div class="col-lg-3"> <div class="hpanel stats"> <div class="panel-body h-200"> <div class="stats-title"> <h4> <img src="images/icons/dashboard/icon7.png"> &nbsp; Cost/Profit Analysis</h4> </div> <div class="m-t-xl"> <div class="row"> <div class="col-xs-6"> <h4>$140,000 </h4> <small class="stat-label">Proposal Value</small> <h4>$100,000.00 </h4> <small class="stat-label">Cost</small> </div> <div class="col-xs-6"> <h4 class="pull-right">40% <i class="fa fa-sort-up" style="color:#1da54b"></i> </h4> </div> </div> </div> </div> <div class="panel-footer"> <div class="row"> <div class="col-xs-1"><i class="pe-7s-right-arrow fa-2x pull-left"></i></div> <div class="col-xs-10"><h5> View Details </h5></div> </div> </div> </div> </div> <div class="col-lg-3"> <div class="hpanel stats"> <div class="panel-body h-200"> <div class="stats-title"> <h4> <img src="images/icons/dashboard/icon8.png"> &nbsp; Inhouse/Vendor Costs</h4> </div> <div class="m-t-xl"> <div class="row"> <div class="col-xs-6"> <h4>$140,000 </h4> <small class="stat-label">Proposal Value</small> <h4>$100,000.00 </h4> <small class="stat-label">Cost</small> </div> <div class="col-xs-6"> <br><br><br> <h4 class="pull-right">40% <i class="fa fa-sort-down" style="color:#ff6d6d"></i> </h4> </div> </div> </div> </div> <div class="panel-footer"> <div class="row"> <div class="col-xs-1"><i class="pe-7s-right-arrow fa-2x pull-left"></i></div> <div class="col-xs-10"><h5> View Details </h5></div> </div> </div> </div> </div> </div> <div class="row"> <div class="col-lg-6" style=""> <div class="hpanel"> <div class="panel-heading hbuilt"> <i class="fa fa-list-ul"></i> &nbsp; Recent ToDo\'s</div> <div class="panel-body"> <div class="table-responsive"> <table cellspacing="1" cellpadding="1" class="table table-striped"> <thead> <tr> <th width="56%">Task List</th> <th width="22%">Start Date</th> <th width="22%">End Date</th> </tr> </thead> <tbody> <tr> <td>Meeting</td> <td>Aug 15, 2016</td> <td>Aug 22, 2016</td> </tr> <tr> <td>Travel to California</td> <td>Sep 04, 2016</td> <td>Sep 06, 2016</td> </tr> <tr> <td>Training</td> <td>Sep 15, 2016</td> <td>Sep 19, 2016</td> </tr> </tbody> </table> </div> </div> </div> <div class="hpanel"> <div class="panel-heading hbuilt"><i class="pe-7s-note size20"></i> &nbsp; Recent Notes</div> <div class="panel-body"> <div class="table-responsive"> <table cellspacing="1" cellpadding="1" class="table table-striped"> <thead> <tr> <th width="78%">Subject</th> <th width="22%">Created On</th> </tr> </thead> <tbody> <tr> <td>New project details</td> <td>Aug 15, 2016</td> </tr> <tr> <td>Office address</td> <td>Sep 04, 2016</td> </tr> <tr> <td>Job openings</td> <td>Sep 15, 2016</td> </tr> </tbody> </table> </div> </div> </div> </div> <div class="col-lg-6" style=""> <div class="hpanel"> <div class="panel-heading hbuilt"> <i class="fa fa-list-ul"></i> &nbsp; Recent ToDo\'s</div> <div class="panel-body"> <div class="table-responsive"> <table cellspacing="1" cellpadding="1" class="table table-striped"> <thead> <tr> <th width="56%">Task List</th> <th width="22%">Start Date</th> <th width="22%">End Date</th> </tr> </thead> <tbody> <tr> <td>Meeting</td> <td>Aug 15, 2016</td> <td>Aug 22, 2016</td> </tr> <tr> <td>Travel to California</td> <td>Sep 04, 2016</td> <td>Sep 06, 2016</td> </tr> <tr> <td>Training</td> <td>Sep 15, 2016</td> <td>Sep 19, 2016</td> </tr> </tbody> </table> </div> </div> </div> </div> </div> <div class="row projects"> <div class="col-lg-12"> <h3>Proposal Summary View</h3> <br> <button class="btn w-xs btn-primary" type="button">All</button> <button class="btn w-xs btn-success" type="button">Open</button> <button class="btn w-xs btn-primary" type="button">Under Review</button> <button class="btn w-xs btn-primary" type="button">Closed</button> <br> <br> </div> <div class="col-lg-6"> <div class="hpanel hblue"> <div class="panel-body"> <div class="row"> <div class="col-sm-12"> <h4><a href="#"> Name of the Proposal</a></h4> <div class="well well-lg"> This where is you can see the description of the Proposal <br><small>01/02/16 10:26 AM, John started writing the proposal</small> </div> </div> <div class="col-sm-8" style="border-right:1px dashed #7384b6"> <div class="row"> <div class="col-sm-4"> <div class="project-label">CLIENT</div> <small>Acme & Co.</small> </div> <div class="col-sm-4"> <div class="project-label">VERSION</div> <small>1.0.4</small> </div> <div class="col-sm-4"> <div class="project-label">DEDLINE</div> <small>26.02.2015</small> </div> <div class="col-sm-12"> <h2 class="text-info"> $102,000.00</h2> </div> <div class="col-sm-12"> <br> <div class="project-people"> <img src="images/a1.cfc46f77.jpg" class="img-circle" alt="logo"> <img src="images/a2.7e977710.jpg" class="img-circle" alt="logo"> <img src="images/a3.0672b108.jpg" class="img-circle" alt="logo"> <img src="images/a4.0c52e074.jpg" class="img-circle" alt="logo"> <img src="images/a5.b602d90a.jpg" class="img-circle" alt="logo"> <img src="images/a6.b896f15f.jpg" class="img-circle" alt="logo"> <img src="images/a7.9547bc6a.jpg" class="img-circle" alt="logo"> <img src="images/a8.6eb90892.jpg" class="img-circle" alt="logo"> </div><br><br> </div> </div> </div> <div class="col-sm-4"> <div class="row"> <div class="col-sm-12"> <div class="project-label">Status</div> <small>Open <br> On Time</small> <br><br> </div> <div class="col-sm-12"> <div class="project-value" style="border-top:1px dashed #7384b6"> <h2 class="text-info">79%</h2> <div class="project-label">PROGRESS</div> <div class="progress m-t-xs full progress-small"> <div class="progress-bar progress-bar-info" style="width: 79%" aria-valuemax="100" aria-valuemin="0" aria-valuenow="43" role="progressbar"> </div> </div> </div> </div> </div> </div> </div> </div> <div class="panel-footer"> <div class="row"> <div class="col-sm-12"> <i class="pe-7s-upload fa-2x prl15 border-right"></i> <i class="pe-7s-unlock fa-2x prl15 border-right"></i> <i class="pe-7s-umbrella fa-2x prl15 border-right"></i> <i class="pe-7s-trash fa-2x prl15 border-right"></i> <i class="pe-7s-tools fa-2x prl15 border-right"></i> <i class="pe-7s-speaker fa-2x prl15 border-right"></i> <i class="pe-7s-ribbon fa-2x prl15"></i> </div> </div> </div> </div> </div> <div class="col-lg-6"> <div class="hpanel hblue"> <div class="panel-body"> <div class="row"> <div class="col-sm-12"> <h4><a href="#"> Name of the Proposal</a></h4> <div class="well well-lg"> This where is you can see the description of the Proposal <br><small>01/02/16 10:26 AM, John started writing the proposal</small> </div> </div> <div class="col-sm-8" style="border-right:1px dashed #7384b6"> <div class="row"> <div class="col-sm-4"> <div class="project-label">CLIENT</div> <small>Acme & Co.</small> </div> <div class="col-sm-4"> <div class="project-label">VERSION</div> <small>1.0.4</small> </div> <div class="col-sm-4"> <div class="project-label">DEDLINE</div> <small>26.02.2015</small> </div> <div class="col-sm-12"> <h2 class="text-info"> $102,000.00</h2> </div> <div class="col-sm-12"> <br> <div class="project-people"> <img src="images/a1.cfc46f77.jpg" class="img-circle" alt="logo"> <img src="images/a2.7e977710.jpg" class="img-circle" alt="logo"> <img src="images/a3.0672b108.jpg" class="img-circle" alt="logo"> <img src="images/a4.0c52e074.jpg" class="img-circle" alt="logo"> <img src="images/a5.b602d90a.jpg" class="img-circle" alt="logo"> <img src="images/a6.b896f15f.jpg" class="img-circle" alt="logo"> <img src="images/a7.9547bc6a.jpg" class="img-circle" alt="logo"> <img src="images/a8.6eb90892.jpg" class="img-circle" alt="logo"> </div><br><br> </div> </div> </div> <div class="col-sm-4"> <div class="row"> <div class="col-sm-12"> <div class="project-label">Status</div> <small>Open <br> On Time</small> <br><br> </div> <div class="col-sm-12"> <div class="project-value" style="border-top:1px dashed #7384b6"> <h2 class="text-info">79%</h2> <div class="project-label">PROGRESS</div> <div class="progress m-t-xs full progress-small"> <div class="progress-bar progress-bar-info" style="width: 79%" aria-valuemax="100" aria-valuemin="0" aria-valuenow="43" role="progressbar"> </div> </div> </div> </div> </div> </div> </div> </div> <div class="panel-footer"> <div class="row"> <div class="col-sm-12"> <i class="pe-7s-upload fa-2x prl15 border-right"></i> <i class="pe-7s-unlock fa-2x prl15 border-right"></i> <i class="pe-7s-umbrella fa-2x prl15 border-right"></i> <i class="pe-7s-trash fa-2x prl15 border-right"></i> <i class="pe-7s-tools fa-2x prl15 border-right"></i> <i class="pe-7s-speaker fa-2x prl15 border-right"></i> <i class="pe-7s-ribbon fa-2x prl15"></i> </div> </div> </div> </div> </div> </div> <div class="row"> <div class="col-lg-12"> <h3>Note</h3><br> </div> </div> <div class="row"> <div class="col-md-3"> <div class="hpanel panel-group"> <div class="panel-body"> <div class="text-center text-muted font-bold">Search note or add new</div> </div> <div class="panel-section"> <div class="input-group"> <input type="text" class="form-control" placeholder="Search note..."> <span class="input-group-btn"> <button class="btn btn-info" type="button"><i class="glyphicon glyphicon-plus small"></i> </button> </span> </div> <button type="button" data-toggle="collapse" data-target="#notes" class="btn-sm visible-xs visible-sm collapsed btn-default btn btn-block m-t-sm"> All notes <i class="fa fa-angle-down"></i> </button> </div> <div id="notes" class="collapse"> <div class="panel-body note-link"> <a href="#note1" data-toggle="tab"> <small class="pull-right text-muted">26.10.2016</small> <h5>Note Name #1</h5> <div class="small"> Note details </div> </a> </div> <div class="panel-body note-link"> <a href="#note2" data-toggle="tab"> <small class="pull-right text-muted">22.01.2016</small> <h5>Note Name #2</h5> <div class="small"> Note details </div> </a> </div> <div class="panel-body note-link"> <a href="#note3" data-toggle="tab"> <small class="pull-right text-muted">14.03.2016</small> <h5>Note Name #3</h5> <div class="small"> Note details </div> </a> </div> <div class="panel-body note-link"> <a href="#note4" data-toggle="tab"> <small class="pull-right text-muted">07.10.2015</small> <h5>Note Name #4</h5> <div class="small"> Note details </div> </a> </div> <div class="panel-body note-link"> <a href="#note5" data-toggle="tab"> <small class="pull-right text-muted">12.04.2015</small> <h5>Note Name #5</h5> <div class="small"> Note details </div> </a> </div> </div> </div> </div> <div class="col-md-9"> <div class="hpanel"> <div class="panel-body"> <div class="text-center hidden"> We couldn\'t find any notes for you. </div> <div class="tab-content"> <div id="note1" class="tab-pane active"> <div class="pull-right text-muted m-l-lg"> 26.10.2016 </div> <h3>Note Name #1</h3> <hr> <div class="note-content"> <p> It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using \'Content here, content here\', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for \'lorem ipsum\' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like). Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc. </p> <br><br><br><br><br><br> </div> <div class="btn-group pull-right"> <button class="btn btn-sm btn-default"><i class="fa fa-thumbs-o-up fa-2x"></i> </button> <button class="btn btn-sm btn-default"><i class="fa fa-thumbs-o-up fa-2x"></i> </button> <button class="btn btn-sm btn-default"><i class="fa fa-close fa-2x"></i> </button> </div> </div> <div id="note2" class="tab-pane"> <div class="pull-right text-muted m-l-lg"> 22.01.2016 </div> <h3>Latin literature from </h3> <hr> <div class="note-content"> <textarea class="form-control">\r\nLatin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.\r\n\r\nIt is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using \'Content here, content here\', making it look like readable English.\r\n\r\nMany desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for \'lorem ipsum\' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).\r\n\r\n                                </textarea> </div> <div class="btn-group"> <button class="btn btn-sm btn-default"><i class="fa fa-thumbs-o-up"></i> Save</button> <button class="btn btn-sm btn-default"><i class="fa fa-trash"></i> Remove</button> </div> </div> <div id="note3" class="tab-pane"> <div class="pull-right text-muted m-l-lg"> 14.03.2016 </div> <h3>The generated Lorem Ipsum </h3> <hr> <div class="note-content"> <textarea class="form-control">\r\nIt is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using \'Content here, content here\', making it look like readable English.\r\n\r\nMany desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for \'lorem ipsum\' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).\r\n\r\nLatin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.\r\n\r\nMany desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for \'lorem ipsum\' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).\r\n\r\n                                </textarea> </div> <div class="btn-group"> <button class="btn btn-sm btn-default"><i class="fa fa-thumbs-o-up"></i> Save</button> <button class="btn btn-sm btn-default"><i class="fa fa-trash"></i> Remove</button> </div> </div> <div id="note4" class="tab-pane"> <div class="pull-right text-muted m-l-lg"> 07.10.2015 </div> <h3>Neque porro quisquam</h3> <hr> <div class="note-content"> <textarea class="form-control">\r\nIt is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using \'Content here, content here\', making it look like readable English.\r\n\r\nLatin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.\r\n                                </textarea> </div> <div class="btn-group"> <button class="btn btn-sm btn-default"><i class="fa fa-thumbs-o-up"></i> Save</button> <button class="btn btn-sm btn-default"><i class="fa fa-trash"></i> Remove</button> </div> </div> <div id="note5" class="tab-pane"> <div class="pull-right text-muted m-l-lg"> 12.04.2015 </div> <h3>The first line of Lorem Ipsum </h3> <hr> <div class="note-content"> <textarea class="form-control">\r\n\r\nLatin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.\r\n\r\nMany desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for \'lorem ipsum\' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).\r\n\r\n                                </textarea> </div> <div class="btn-group"> <button class="btn btn-sm btn-default"><i class="fa fa-thumbs-o-up"></i> Save</button> <button class="btn btn-sm btn-default"><i class="fa fa-trash"></i> Remove</button> </div> </div> </div> </div> </div> </div> </div> <div class="row"> <div class="col-lg-12"> <h3>ToDo List</h3><br> <br> <button class="btn w-xs btn-success" type="button">All</button> <button class="btn w-xs btn-primary" type="button">Active</button> <button class="btn w-xs btn-primary" type="button">Completed</button> <br> <br> </div> </div> <div class="row"> <div class="col-lg-12"> <div class="form-group"><textarea class="form-control" placeholder="What needs to be done? Start writing your task in this text field" name="message" rows="3"></textarea></div> </div> <div class="col-lg-12"> <div class="hpanel forum-box"> <div class="panel-body"> <div class="row"> <div class="col-md-11 forum-heading border-right"> <div class="form-group"> <div class="checkbox"> <label> <input type="checkbox" class="i-checks"> <h4> Tash Name</h4> </label> </div> </div> </div> <div class="col-md-1"> <div class="form-group" style="margin-top:15px"> <span> <i class="fa fa-edit"></i> Edit</span> </div> </div> </div> </div> </div> <div class="hpanel forum-box"> <div class="panel-body"> <div class="row"> <div class="col-md-11 forum-heading border-right"> <div class="form-group"> <div class="checkbox"> <label> <input type="checkbox" class="i-checks"> <h4> Mark all as completed</h4> </label> </div> </div> </div> <div class="col-md-1"> <div class="form-group" style="margin-top:15px"> <span> <i class="fa fa-edit"></i> Edit</span> </div> </div> </div> </div> </div> </div> </div> </div> <div class="setting"> <div class="content" animate-panel effect="zoomIn"> <div class="row"> <div class="col-md-2"> <div class="font-bold m-b-sm text-center"> Settings </div> <div class="row"> <div class="col-md-12"> <div class="hpanel zerobottom"> <div class="panel-body navy-blue text-center"> <!-- <img alt="logo" class="img-circle img-small" src="images/a1.cfc46f77.jpg">--> <i class="pe-7s-config icon-lg"></i> <div class="m-t-sm"> <strong>Company</strong> </div> </div> </div> <div class="hpanel zerobottom"> <div class="panel-body text-center"> <i class="pe-7s-config icon-lg"></i> <div class="m-t-sm"> <strong>Task Categories</strong> </div> </div> </div> <div class="hpanel zerobottom"> <div class="panel-body text-center"> <i class="pe-7s-config icon-lg"></i> <div class="m-t-sm"> <strong>Project Tasks</strong> </div> </div> </div> <div class="hpanel zerobottom"> <div class="panel-body text-center"> <i class="pe-7s-config icon-lg"></i> <div class="m-t-sm"> <strong>Pricing</strong> </div> </div> </div> <div class="hpanel zerobottom"> <div class="panel-body text-center"> <i class="pe-7s-config icon-lg"></i> <div class="m-t-sm"> <strong>Vendors</strong> </div> </div> </div> <div class="hpanel zerobottom"> <div class="panel-body text-center"> <i class="pe-7s-config icon-lg"></i> <div class="m-t-sm"> <strong>Resource Types</strong> </div> </div> </div> <div class="hpanel zerobottom"> <div class="panel-body text-center"> <i class="pe-7s-config icon-lg"></i> <div class="m-t-sm"> <strong>Clients</strong> </div> </div> </div> <div class="hpanel zerobottom"> <div class="panel-body text-center"> <i class="pe-7s-config icon-lg"></i> <div class="m-t-sm"> <strong>Styles</strong> </div> </div> </div> </div> </div> </div> <div class="col-md-10"> <div class="font-bold m-b-sm"> Project details </div> <div class="hpanel"> <div class="panel-body"> <div class="pull-right"> <button class="btn btn-success btn-xs"> Active</button> <button class="btn btn-default btn-xs"> <i class="fa fa-pencil"></i> Edit</button> </div> <h2 class="m-t-none">Common project </h2> <small> A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence in this spot, which was created for the bliss of souls like mine. </small> <div class="small m-t-xs"> <strong>Create by:</strong> Anthony Novic<br> <strong>Client:</strong> Nordic Company Walking </div> <div class="m-t-md"> <canvas id="lineOptions" height="60"></canvas> </div> </div> </div> </div> </div> <br><br> <div class="row"> <div class="col-lg-12"> <h3>Proposal Name</h3><br> </div> </div> <div class="row"> <div class="col-md-12"> <div class="col-md-2 no-padding"> <div class="hpanel"> <div class="panel-body no-padding"> <div class="p20 themecolor"> <p>Widgets</p> </div> </div> </div> </div> <div class="col-md-10 no-padding"> <div class="hpanel"> <div class="panel-body no-padding"> <div class="pull-left p20"> <i class="pe-7s-upload fa-2x prl15 border-right"></i> <i class="pe-7s-unlock fa-2x prl15 border-right"></i> <i class="pe-7s-umbrella fa-2x prl15 border-right"></i> <i class="pe-7s-trash fa-2x prl15 border-right"></i> <i class="pe-7s-tools fa-2x prl15 border-right"></i> <i class="pe-7s-speaker fa-2x prl15"></i> </div> <div class="pull-right light-blue p20"> <i class="pe-7s-upload fa-2x prl15 border-right"></i> <i class="pe-7s-unlock fa-2x prl15 border-right"></i> <i class="pe-7s-umbrella fa-2x prl15 border-right"></i> <i class="pe-7s-trash fa-2x prl15 border-right"></i> <i class="pe-7s-tools fa-2x prl15 border-right"></i> <i class="pe-7s-speaker fa-2x prl15"></i> </div> </div> </div> </div> </div> </div> <div class="row"> <div class="col-md-12"> <div class="col-md-2 no-padding"> <div class="hpanel zerobottom"> <div class="panel-body navy-blue text-center"> <!-- <img alt="logo" class="img-circle img-small" src="images/a1.cfc46f77.jpg">--> <i class="pe-7s-config icon-lg"></i> <div class="m-t-sm"> <strong>Cover Page</strong> </div> </div> </div> <div class="hpanel zerobottom"> <div class="panel-body text-center"> <i class="pe-7s-config icon-lg"></i> <div class="m-t-sm"> <strong>Executive Summary</strong> </div> </div> </div> <div class="hpanel zerobottom"> <div class="panel-body text-center"> <i class="pe-7s-config icon-lg"></i> <div class="m-t-sm"> <strong>Pricing</strong> </div> </div> </div> <div class="hpanel zerobottom"> <div class="panel-body text-center"> <i class="pe-7s-config icon-lg"></i> <div class="m-t-sm"> <strong>Terms & Conditions</strong> </div> </div> </div> </div> <div class="col-md-10"> <div class="hpanel"> <div class="panel-body"> <div class="pull-right"> <img src="../images/chat.png"> </div> <h2 class="m-t-none border-all p20 text-center">You just created a new Proposal </h2> <p class="border-all p20 text-center"> <br><br><br> Customize your page as you would like by dragging and dropping<br> thewidgets from the widgets panel above <br><br><br> </p> <br><br><br><br><br><br><br> </div> </div> </div> </div> </div> <div class="row projects"> <div class="col-lg-12"> <div class="pull-right"> <img src="../images/floating.png"> </div> </div> </div> <br><br><br> <div class="row projects"> <div class="col-lg-12"> <h3>Users</h3><br> </div> </div> <div class="row projects"> <div class="col-lg-6"> <div class="row"> <div class="col-sm-11 no-padding"> <div class="hpanel"> <div class="panel-body"> <div class="row"> <div class="col-sm-12"> <div class="row"> <div class="col-sm-12"> <div class="col-sm-6 border-right"> <div class="row"> <div class="col-sm-4"> <img class="img-circle" src="images/a1.cfc46f77.jpg" alt="logo"> </div> <div class="col-sm-8"> <div class="m-t-sm"> <strong>Kenneth Delgado</strong> <p class="small"><i class="fa fa-user"></i> &nbsp; Admin</p> </div> </div> </div> </div> <div class="col-sm-6"> <div class="row"> <div class="col-sm-12"> <div class="m-t-sm"> <p class="small">Feb 05, 16 10:26 AM, John started writing the proposal</p> </div> </div> </div> </div> </div> <div class="col-sm-12"> <hr> </div> <div class="col-sm-12"> <div class="row"> <div class="col-sm-3 border-right"> <div class="m-t-sm"><strong>Proposals</strong></div> <h2 class="text-info"> 20</h2> </div> <div class="col-sm-5 border-right"> <div class="m-t-sm"><strong>Value</strong></div> <h2 class="text-info"> $102,000</h2> </div> <div class="col-sm-4"> <div class="m-t-sm"><strong>Win/Loss Ratio</strong></div> <h2 class="text-info"> 80%</h2> </div> </div> </div> </div> </div> </div> </div> </div> </div> <div class="col-sm-1 no-padding"> <div class="hpanel"> <div class="panel-body no-padding"> <div class="col-sm-12 no-padding"><a class="btn btn-info btn-block newbtn"> <i class="fa fa-user"></i></a></div> <div class="col-sm-12 no-padding"><a class="btn btn-info btn-block newbtn"> <i class="fa fa-user"></i></a></div> <div class="col-sm-12 no-padding"><a class="btn btn-info btn-block newbtn"> <i class="fa fa-user"></i></a></div> </div> </div> </div> </div> </div> </div> <div class="row"> <div class="col-lg-12"> <div class="hpanel"> <div class="panel-heading"> <div class="panel-tools"> <a class="showhide"><i class="fa fa-chevron-up"></i></a> <a class="closebox"><i class="fa fa-times"></i></a> </div> FooTable with row toggler, sorting, filter and pagination </div> <div class="panel-body"> <input type="text" class="form-control input-sm m-b-md" id="filter" placeholder="Search in table"> <table id="example1" class="footable table toggle-arrow-tiny" data-page-size="8" data-filter="#filter"> <thead> <tr> <th data-toggle="true"></th> <th></th> <th width="60px"></th> <th></th> <th></th> <th data-hide="all"></th> </tr> </thead> <tbody> <tr> <td></td> <td><h3 class="newtagtitile">Task 1 - Task summary one liner</h3></td> <td><img class="img-circle" src="images/a1.cfc46f77.jpg" style="width:40px" alt="logo"></td> <td>herzog_leo@gleason.us<br>2 hours ago</td> <td><i class="pe-7s-angle-down-circle fa-3x"></i> &nbsp;&nbsp;&nbsp;&nbsp; <i class="pe-7s-close-circle fa-3x"></i></td> <td class="test"> <div class="row"> <div class="col-md-6"> <div class="form-group required"> <input name="name" type="text" class="form-control" ng-maxlength="50" placeholder="Task Category" required> </div> </div> <div class="col-md-6"> <div class="form-group required"> <input name="client_name" type="text" class="form-control" ng-maxlength="50" placeholder="One liner task description " required> </div> </div> <div class="col-md-3"> <div class="form-group required"> <input name="collebrators" type="text" class="form-control" ng-maxlength="50" placeholder="Man Days" required> </div> </div> <div class="col-md-3"> <div class="form-group required"> <input name="collebrators" type="text" class="form-control" ng-maxlength="50" placeholder="Resource Type" required> </div> </div> <div class="col-md-3"> <div class="form-group required"> <input name="collebrators" type="text" class="form-control" ng-maxlength="50" placeholder="Yes" required> </div> </div> <div class="col-md-3"> <div class="form-group required"> <input name="collebrators" type="text" class="form-control" ng-maxlength="50" placeholder="Vendor Name" required> </div> </div> <div class="col-md-3"> <div class="form-group required"> <input name="collebrators" type="text" class="form-control" ng-maxlength="50" placeholder="Daily Cost" required> </div> </div> <div class="col-md-3"> <div class="form-group required"> <input name="collebrators" type="text" class="form-control" ng-maxlength="50" placeholder="Total Cost" required> </div> </div> <div class="col-md-3"> <div class="form-group required"> <input name="collebrators" type="text" class="form-control" ng-maxlength="50" placeholder="Daily Rate" required> </div> </div> <div class="col-md-3"> <div class="form-group required"> <input name="collebrators" type="text" class="form-control" ng-maxlength="50" placeholder="Total Rate" required> </div> </div> <div class="col-md-12"> <div class="form-group required"> <textarea class="form-control" placeholder="Task Detailed Summary" row="5"></textarea> </div> </div> </div> </td> </tr> <tr> <td></td> <td><h3 class="newtagtitile">Task 1 - Task summary one liner</h3></td> <td><img class="img-circle" src="images/a1.cfc46f77.jpg" style="width:40px" alt="logo"></td> <td>herzog_leo@gleason.us<br>2 hours ago</td> <td><i class="pe-7s-angle-down-circle fa-3x"></i> &nbsp;&nbsp;&nbsp;&nbsp; <i class="pe-7s-close-circle fa-3x"></i></td> <td class="test"> <div class="row"> <div class="col-md-6"> <div class="form-group required"> <input name="name" type="text" class="form-control" ng-maxlength="50" placeholder="Task Category" required> </div> </div> <div class="col-md-6"> <div class="form-group required"> <input name="client_name" type="text" class="form-control" ng-maxlength="50" placeholder="One liner task description " required> </div> </div> <div class="col-md-3"> <div class="form-group required"> <input name="collebrators" type="text" class="form-control" ng-maxlength="50" placeholder="Man Days" required> </div> </div> <div class="col-md-3"> <div class="form-group required"> <input name="collebrators" type="text" class="form-control" ng-maxlength="50" placeholder="Resource Type" required> </div> </div> <div class="col-md-3"> <div class="form-group required"> <input name="collebrators" type="text" class="form-control" ng-maxlength="50" placeholder="Yes" required> </div> </div> <div class="col-md-3"> <div class="form-group required"> <input name="collebrators" type="text" class="form-control" ng-maxlength="50" placeholder="Vendor Name" required> </div> </div> <div class="col-md-3"> <div class="form-group required"> <input name="collebrators" type="text" class="form-control" ng-maxlength="50" placeholder="Daily Cost" required> </div> </div> <div class="col-md-3"> <div class="form-group required"> <input name="collebrators" type="text" class="form-control" ng-maxlength="50" placeholder="Total Cost" required> </div> </div> <div class="col-md-3"> <div class="form-group required"> <input name="collebrators" type="text" class="form-control" ng-maxlength="50" placeholder="Daily Rate" required> </div> </div> <div class="col-md-3"> <div class="form-group required"> <input name="collebrators" type="text" class="form-control" ng-maxlength="50" placeholder="Total Rate" required> </div> </div> <div class="col-md-12"> <div class="form-group required"> <textarea class="form-control" placeholder="Task Detailed Summary" row="5"></textarea> </div> </div> </div> </td> </tr> <tr> <td></td> <td><h3 class="newtagtitile">Task 1 - Task summary one liner</h3></td> <td><img class="img-circle" src="images/a1.cfc46f77.jpg" style="width:40px" alt="logo"></td> <td>herzog_leo@gleason.us<br>2 hours ago</td> <td><i class="pe-7s-angle-down-circle fa-3x"></i> &nbsp;&nbsp;&nbsp;&nbsp; <i class="pe-7s-close-circle fa-3x"></i></td> <td class="test"> <div class="row"> <div class="col-md-6"> <div class="form-group required"> <input name="name" type="text" class="form-control" ng-maxlength="50" placeholder="Task Category" required> </div> </div> <div class="col-md-6"> <div class="form-group required"> <input name="client_name" type="text" class="form-control" ng-maxlength="50" placeholder="One liner task description " required> </div> </div> <div class="col-md-3"> <div class="form-group required"> <input name="collebrators" type="text" class="form-control" ng-maxlength="50" placeholder="Man Days" required> </div> </div> <div class="col-md-3"> <div class="form-group required"> <input name="collebrators" type="text" class="form-control" ng-maxlength="50" placeholder="Resource Type" required> </div> </div> <div class="col-md-3"> <div class="form-group required"> <input name="collebrators" type="text" class="form-control" ng-maxlength="50" placeholder="Yes" required> </div> </div> <div class="col-md-3"> <div class="form-group required"> <input name="collebrators" type="text" class="form-control" ng-maxlength="50" placeholder="Vendor Name" required> </div> </div> <div class="col-md-3"> <div class="form-group required"> <input name="collebrators" type="text" class="form-control" ng-maxlength="50" placeholder="Daily Cost" required> </div> </div> <div class="col-md-3"> <div class="form-group required"> <input name="collebrators" type="text" class="form-control" ng-maxlength="50" placeholder="Total Cost" required> </div> </div> <div class="col-md-3"> <div class="form-group required"> <input name="collebrators" type="text" class="form-control" ng-maxlength="50" placeholder="Daily Rate" required> </div> </div> <div class="col-md-3"> <div class="form-group required"> <input name="collebrators" type="text" class="form-control" ng-maxlength="50" placeholder="Total Rate" required> </div> </div> <div class="col-md-12"> <div class="form-group required"> <textarea class="form-control" placeholder="Task Detailed Summary" row="5"></textarea> </div> </div> </div> </td> </tr> <tr> <td></td> <td><h3 class="newtagtitile">Task 1 - Task summary one liner</h3></td> <td><img class="img-circle" src="images/a1.cfc46f77.jpg" style="width:40px" alt="logo"></td> <td>herzog_leo@gleason.us<br>2 hours ago</td> <td><i class="pe-7s-angle-down-circle fa-3x"></i> &nbsp;&nbsp;&nbsp;&nbsp; <i class="pe-7s-close-circle fa-3x"></i></td> <td class="test"> <div class="row"> <div class="col-md-6"> <div class="form-group required"> <input name="name" type="text" class="form-control" ng-maxlength="50" placeholder="Task Category" required> </div> </div> <div class="col-md-6"> <div class="form-group required"> <input name="client_name" type="text" class="form-control" ng-maxlength="50" placeholder="One liner task description " required> </div> </div> <div class="col-md-3"> <div class="form-group required"> <input name="collebrators" type="text" class="form-control" ng-maxlength="50" placeholder="Man Days" required> </div> </div> <div class="col-md-3"> <div class="form-group required"> <input name="collebrators" type="text" class="form-control" ng-maxlength="50" placeholder="Resource Type" required> </div> </div> <div class="col-md-3"> <div class="form-group required"> <input name="collebrators" type="text" class="form-control" ng-maxlength="50" placeholder="Yes" required> </div> </div> <div class="col-md-3"> <div class="form-group required"> <input name="collebrators" type="text" class="form-control" ng-maxlength="50" placeholder="Vendor Name" required> </div> </div> <div class="col-md-3"> <div class="form-group required"> <input name="collebrators" type="text" class="form-control" ng-maxlength="50" placeholder="Daily Cost" required> </div> </div> <div class="col-md-3"> <div class="form-group required"> <input name="collebrators" type="text" class="form-control" ng-maxlength="50" placeholder="Total Cost" required> </div> </div> <div class="col-md-3"> <div class="form-group required"> <input name="collebrators" type="text" class="form-control" ng-maxlength="50" placeholder="Daily Rate" required> </div> </div> <div class="col-md-3"> <div class="form-group required"> <input name="collebrators" type="text" class="form-control" ng-maxlength="50" placeholder="Total Rate" required> </div> </div> <div class="col-md-12"> <div class="form-group required"> <textarea class="form-control" placeholder="Task Detailed Summary" row="5"></textarea> </div> </div> </div> </td> </tr> </tbody> </table> </div> </div> </div> </div> <div class="row projects"> <div class="col-lg-12"> <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#myModal5"> Large Modal </button> <div class="modal modalnew animated fadeInRight" id="myModal5" tabindex="-1" role="dialog" aria-hidden="true"> <div class="modal-dialog modal-lg"> <div class="modal-content"> <div class="color-line"></div> <div class="modal-header"> <h4 class="modal-title">Add a new proposal <span class="pull-right"><a data-dismiss="modal"> <i class="pe-7s-close fa-2x"></i></a> </span></h4> </div> <div class="modal-body"> <div class="row"> <div class="col-md-6"> <div class="form-group required"> <input name="name" type="text" class="form-control" ng-maxlength="50" placeholder="Name of Proposal" required> </div> </div> <div class="col-md-6"> <div class="form-group required"> <input name="client_name" type="text" class="form-control" ng-maxlength="50" placeholder="Client Name " required> </div> </div> <div class="col-md-6"> <div class="form-group required"> <input name="date" type="text" class="form-control" ng-maxlength="50" placeholder="DD/MM/YYYY" required> </div> </div> <div class="col-md-6"> <div class="form-group required"> <input name="collebrators" type="text" class="form-control" ng-maxlength="50" placeholder="Multiple Collebrators" required> </div> </div> <div class="col-md-3"> <div class="hpanel" style="border:1px dotted #434E6E"> <div class="panel-body"> <div class="text-center"> <img src="images/portrait.0fa6f2b9.png"> </div> </div> </div> </div> <div class="col-md-4"> <div class="hpanel" style="border:1px dotted #434E6E"> <div class="panel-body"> <div class="text-center"> <img src="images/ladscape.6e30e7b6.png"> </div> </div> </div> </div> <div class="col-md-4"> <div class="hpanel hbggreen"> <div class="panel-body"> <div class="text-center"> <br> <i class="pe-7s-note fa-4x"></i><br> <small>Create Proposal</small> <br><br> </div> </div> </div> </div> </div> <br><br><br> <div class="row"> <div class="col-md-12"> <strong> Select a template from the gallery</strong> <hr> </div> </div> <div class="row"> <div class="col-md-3" style=""> <div class="hpanel hnavyblue"> <div class="panel-body"> <div class="text-center"> <i class="pe-7s-config icon-lg"></i><br> <small>Web Design and Development</small> </div> </div> </div> </div> <div class="col-md-3" style=""> <div class="hpanel hbgblue"> <div class="panel-body"> <div class="text-center"> <i class="pe-7s-config icon-lg"></i><br> <small>IT Infrastructure and Delivery</small> </div> </div> </div> </div> <div class="col-md-3" style=""> <div class="hpanel hbgyellow"> <div class="panel-body"> <div class="text-center"> <i class="pe-7s-config icon-lg"></i><br> <small>Application Development</small> </div> </div> </div> </div> <div class="col-md-3" style=""> <div class="hpanel hbgred"> <div class="panel-body"> <div class="text-center"> <i class="pe-7s-config icon-lg"></i><br> <small>Hardware/Software License quote</small> </div> </div> </div> </div> </div> </div> <div class="modal-footer"> <button type="button" class="btn btn-default" data-dismiss="modal">Close</button> <button type="button" class="btn btn-primary">Save changes</button> </div> </div> </div> </div> </div> </div> </div> </div></div>'),
            a.put("views/email.html", '<div class="modal-dialog modal-lg"> <uib-alert ng-repeat="alert in errors" class="display-alert" type="{{alert.type}}" close="closeAlert($index)" ng-click="closeAlert($index)" id="display-error-home">{{alert}}</uib-alert> <uib-alert ng-repeat="alert in alerts" class="display-alert" type="{{alert.type}}" close="closeAlerts($index)" ng-click="closeAlert($index)" id="display-error-home">{{alert.msg}}</uib-alert> <span class="pull-right"> <a ng-click="closemodal()"> <i class="pe-7s-close fa-2x"></i> </a> </span> <div class="col-md-9"> <div class="hpanel email-compose"> <div class="panel-heading hbuilt"> <div class="p-xs h4"> New message </div> </div> <div class="panel-heading hbuilt"> <div class="p-xs"> <form method="get" class="form-horizontal"> <div class="form-group"><label class="col-sm-1 control-label text-left">To:</label> <div class="col-sm-11"><input type="text" ng-model="toemail" class="form-control input-sm" placeholder="example@email.com"></div> </div> <div class="form-group"><label class="col-sm-1 control-label text-left">Cc:</label> <div class="col-sm-11"><input type="text" ng-model="cc" class="form-control input-sm"></div> </div> <div class="form-group"><label class="col-sm-1 control-label text-left">Bcc:</label> <div class="col-sm-11"><input type="text" ng-model="bcc" class="form-control input-sm" placeholder="example@email.com"></div> </div> <div class="form-group"><label class="col-sm-1 control-label text-left">Sub:</label> <div class="col-sm-11"><input type="text" ng-model="subject" class="form-control input-sm" placeholder="Enter Email subject"></div> </div> </form> </div> </div> <div class="panel-body no-padding"> <div summernote ng-model="summernoteTextTwo" config="summernoteOpt"></div> </div> <div class="panel-footer"> <div class="pull-right"> <!--<div class="btn-group">\r\n                        <button class="btn btn-default"><i class="fa fa-edit"></i> Save</button>\r\n                        <button class="btn btn-default"><i class="fa fa-trash"></i> Discard</button>\r\n                    </div>--> </div> <button class="btn btn-primary" ng-click="send()">Send email</button> <!--<div class="btn-group">\r\n                    <button class="btn btn-default"><i class="fa fa-paperclip"></i> </button>\r\n                    <button class="btn btn-default"><i class="fa fa-image"></i> </button>\r\n                </div>--> </div> </div> </div> </div>'), a.put("views/forgot-password.html", '<div class="panel-body"> <uib-alert ng-repeat="alert in errors" class="display-alert" type="{{alert.type}}" close="closeAlert($index)" ng-click="closeAlert($index)" id="display-error-home">{{alert}}</uib-alert> <uib-alert ng-repeat="alert in alerts" class="display-alert" type="{{alert.type}}" close="closeAlert($index)" ng-click="closeAlert($index)" id="display-error-home">{{alert.msg}}</uib-alert> <div class="form-group required"> <label for="sender-email" class="control-label">Email</label> <div class="input-icon"> <i class="fa fa-user"></i> <input name="userphone" id="sender-email" type="text" placeholder="Email" class="form-control email" ng-model="email" required> </div><br> <div> </div> <div class="form-group"> <button class="btn btn-success" type="button" ng-click="forgetPassword()" ng-disabled="loginForm.$invalid"><strong>Send</strong></button> </div> </div></div>'), a.put("views/header.html", '<div class="color-line"> </div> <div id="logo" class="light-version"> <span> <a ng-href="#/main"><img src="images/docbasiclogo1.5e053b55.png"></a> </span> </div> <nav role="navigation"> <minimaliza-menu></minimaliza-menu> <div class="small-logo"> <span class="text-primary">HOMER APP</span> </div> <form role="search" class="navbar-form-custom" method="post" action="#"> <!-- <div class="form-group">\r\n            <input type="text" placeholder="Search something special" class="form-control" name="search">\r\n        </div> --> <div class="input-group"> <input type="text" placeholder="Searching..." class="form-control searchpra"> <span class="input-group-btn"> <button type="button" class="btn btn-default btntran"><i class="fa fa-search" style="color: #7384b6 !important"></i></button> </span> </div> </form> <div class="mobile-menu"> <button type="button" class="navbar-toggle mobile-menu-toggle" data-toggle="collapse" data-target="#mobile-collapse"> <i class="fa fa-chevron-down"></i> </button> <!--<div class="collapse mobile-navbar" id="mobile-collapse">\r\n            <ul class="nav navbar-nav">\r\n                <li>\r\n                    <a ui-sref="common.login">Login</a>\r\n                </li>\r\n                <li>\r\n                    <a ui-sref="common.register">Logout</a>\r\n                </li>\r\n                <li>\r\n                    <a ui-sref="app_views.profile">Profile</a>\r\n                </li>\r\n            </ul>\r\n        </div>\r\n    </div>--> <div class="navbar-right"> <ul class="nav navbar-nav no-borders"> <li uib-dropdown> <a href="#" uib-dropdown-toggle> <i class="pe-7s-bell"></i> </a> <ul uib-dropdown-menu class="hdropdown notification animated flipInX"> <li> <a> <span class="label label-success">NEW</span> It is a long established. </a> </li> <li> <a> <span class="label label-warning">WAR</span> There are many variations. </a> </li> <li> <a> <span class="label label-danger">ERR</span> Contrary to popular belief. </a> </li> <li class="summary"><a href="#">See all notifications</a></li> </ul> </li> <li uib-dropdown> <a uib-dropdown-toggle ng-href="#/companysetting"> <i class="pe-7s-config"></i> </a> <!--   <div uib-dropdown-menu class="hdropdown bigmenu animated flipInX">\r\n\r\n                    <table>\r\n                        <tbody>\r\n                        <tr>\r\n                            <td>\r\n                                <a ui-sref="app_views.projects">\r\n                                    <i class="pe pe-7s-portfolio text-info"></i>\r\n                                    <h5>Projects</h5>\r\n                                </a>\r\n                            </td>\r\n                            <td>\r\n                                <a ui-sref="app_views.mailbox">\r\n                                    <i class="pe pe-7s-mail text-warning"></i>\r\n                                    <h5>Email</h5>\r\n                                </a>\r\n                            </td>\r\n                            <td>\r\n                                <a ui-sref="app_views.contacts">\r\n                                    <i class="pe pe-7s-users text-success"></i>\r\n                                    <h5>Contacts</h5>\r\n                                </a>\r\n                            </td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>\r\n                                <a ui-sref="app_views.forum">\r\n                                    <i class="pe pe-7s-comment text-info"></i>\r\n                                    <h5>Forum</h5>\r\n                                </a>\r\n                            </td>\r\n                            <td>\r\n                                <a ui-sref="analytics">\r\n                                    <i class="pe pe-7s-graph1 text-danger"></i>\r\n                                    <h5>Analytics</h5>\r\n                                </a>\r\n                            </td>\r\n                            <td>\r\n                                <a ui-sref="app_views.file_manager">\r\n                                    <i class="pe pe-7s-box1 text-success"></i>\r\n                                    <h5>Files</h5>\r\n                                </a>\r\n                            </td>\r\n                        </tr>\r\n                        </tbody>\r\n                    </table>\r\n\r\n\r\n\r\n                </div> --> </li> <li uib-dropdown> <a class="label-menu-corner" href="#" uib-dropdown-toggle> <i class="fa fa-question"></i> </a> <!--<ul uib-dropdown-menu class="hdropdown animated flipInX">\r\n                    <div class="title">\r\n                        You have 4 new messages\r\n                    </div>\r\n                    <li>\r\n                        <a>\r\n                            It is a long established.\r\n                        </a>\r\n                    </li>\r\n                    <li>\r\n                        <a>\r\n                            There are many variations.\r\n                        </a>\r\n                    </li>\r\n                    <li>\r\n                        <a>\r\n                            Lorem Ipsum is simply dummy.\r\n                        </a>\r\n                    </li>\r\n                    <li>\r\n                        <a>\r\n                            Contrary to popular belief.\r\n                        </a>\r\n                    </li>\r\n                    <li class="summary"><a href="#">See All Messages</a></li>\r\n                </ul>--> </li> <li> <a ng-href="#/login"> <i class="pe-7s-power pe-rotate-90"></i> </a> </li> <li uib-dropdown> <a class="label-menu-corner" href="#" uib-dropdown-toggle> <!--<img class="img-circle m-b pull-left" alt="logo" src="images/profile.052286fb.jpg" width="25px" height="25px">--> <span class="pull-right" style="font-size:13px; padding-left:10px">{{username}}</span> </a> <ul uib-dropdown-menu class="hdropdown animated flipInX"> <!--<div class="title">\r\n                        Profile Setting\r\n                    </div>--> <!--<li><a><i class="fa fa-edit"> </i>&nbsp; Edit Profile </a></li>\r\n                    <li><a><i class="fa fa-key"> </i>&nbsp; Change Password</a></li>\r\n\t\t\t\t\t<li><a ng-href="#/login"><i class="pe-7s-power"></i>&nbsp; Logout</a></li>--> </ul> </li> </ul> </div> </div></nav>'), a.put("views/header_old.html", '<div class="color-line"> </div> <div id="logo" class="light-version"> <span> <img src="images/docbasiclogo1.5e053b55.png"> </span> </div> <nav role="navigation"> <minimaliza-menu></minimaliza-menu> <div class="small-logo"> <span class="text-primary">HOMER APP</span> </div> <form role="search" class="navbar-form-custom" method="post" action="#"> <div class="form-group"> <input type="text" placeholder="Search something special" class="form-control" name="search"> </div> </form> <div class="mobile-menu"> <button type="button" class="navbar-toggle mobile-menu-toggle" data-toggle="collapse" data-target="#mobile-collapse"> <i class="fa fa-chevron-down"></i> </button> <!--<div class="collapse mobile-navbar" id="mobile-collapse">\r\n            <ul class="nav navbar-nav">\r\n                <li>\r\n                    <a ui-sref="common.login">Login</a>\r\n                </li>\r\n                <li>\r\n                    <a ui-sref="common.register">Logout</a>\r\n                </li>\r\n                <li>\r\n                    <a ui-sref="app_views.profile">Profile</a>\r\n                </li>\r\n            </ul>\r\n        </div>\r\n    </div>--> <div class="navbar-right"> <ul class="nav navbar-nav no-borders"> <li uib-dropdown> <a href="#" uib-dropdown-toggle> <i class="pe-7s-speaker"></i> </a> <ul uib-dropdown-menu class="hdropdown notification animated flipInX"> <li> <a> <span class="label label-success">NEW</span> It is a long established. </a> </li> <li> <a> <span class="label label-warning">WAR</span> There are many variations. </a> </li> <li> <a> <span class="label label-danger">ERR</span> Contrary to popular belief. </a> </li> <li class="summary"><a href="#">See all notifications</a></li> </ul> </li> <li uib-dropdown> <a href="#" uib-dropdown-toggle> <i class="pe-7s-keypad"></i> </a> <div uib-dropdown-menu class="hdropdown bigmenu animated flipInX"> <table> <tbody> <tr> <td> <a ui-sref="app_views.projects"> <i class="pe pe-7s-portfolio text-info"></i> <h5>Projects</h5> </a> </td> <td> <a ui-sref="app_views.mailbox"> <i class="pe pe-7s-mail text-warning"></i> <h5>Email</h5> </a> </td> <td> <a ui-sref="app_views.contacts"> <i class="pe pe-7s-users text-success"></i> <h5>Contacts</h5> </a> </td> </tr> <tr> <td> <a ui-sref="app_views.forum"> <i class="pe pe-7s-comment text-info"></i> <h5>Forum</h5> </a> </td> <td> <a ui-sref="analytics"> <i class="pe pe-7s-graph1 text-danger"></i> <h5>Analytics</h5> </a> </td> <td> <a ui-sref="app_views.file_manager"> <i class="pe pe-7s-box1 text-success"></i> <h5>Files</h5> </a> </td> </tr> </tbody> </table> </div> </li> <li uib-dropdown> <a class="label-menu-corner" href="#" uib-dropdown-toggle> <i class="pe-7s-mail"></i> <span class="label label-success">4</span> </a> <ul uib-dropdown-menu class="hdropdown animated flipInX"> <div class="title"> You have 4 new messages </div> <li> <a> It is a long established. </a> </li> <li> <a> There are many variations. </a> </li> <li> <a> Lorem Ipsum is simply dummy. </a> </li> <li> <a> Contrary to popular belief. </a> </li> <li class="summary"><a href="#">See All Messages</a></li> </ul> </li> <li> <a ui-sref="common.login"> <i class="pe-7s-upload pe-rotate-90"></i> </a> </li> <li> <a ng-click="$root.rightSidebar = !$root.rightSidebar"> <i class="pe-7s-upload pe-7s-news-paper"></i> </a> </li> <li> </li></ul> </div> </div></nav>'), a.put("views/imageupload.html", '<div class="panel-body"> <div class="row"> <div class="col-md-12"> <h4>Select From Library</h4> <div ng-repeat="thumbs in iamgedata"> <a ng-click="selectimage(thumbs)"><img style="margin-bottom:5px; border: 5px solid #e0e1e7" height="100" width="100" ng-src="{{thumbs.image_path}}"></a> </div> </div> </div> <div class="row"> <div class="col-md-12"> <input type="file" ng-model="files" name="files" multiple accept="image/*, .zip" maxsize="500" required base-sixty-four-input> <span ng-show="logovalidate.files.$error.maxsize">Files must not exceed 500 KB</span><br> <button class="btn btn-primary" ng-click="imageupload()">Upload</button> </div> </div> </div>'), a.put("views/login.html", '<!--<div class="color-line"></div>\r\n\r\n<div class="back-link">\r\n</div>--> <div class="bgimg"> <div class="login-container" data-ng-init="init()"> <div class="row"> <div class="col-md-12"> <div class="col-md-4 col-md-offset-4 text-center m-b-md"> <img class="img-responsive" src="images/docubasic_white_logo.73f6b9c2.png"> <uib-alert ng-repeat="alert in errors" class="display-alert" type="{{alert.type}}" close="closeAlert($index)" ng-click="closeAlert($index)" id="display-error-home">{{alert}}</uib-alert> <uib-alert ng-repeat="alert in alerts" class="display-alert" type="{{alert.type}}" close="closeAlerts($index)" ng-click="closeAlert($index)" id="display-error-home">{{alert.msg}}</uib-alert> <uib-alert ng-repeat="alert in loginalerts" class="display-alert" type="{{alert.type}}" close="closeAlerts($index)" ng-click="closeAlert($index)" id="display-error-home">{{alert.msg}}</uib-alert> </div> </div> <div class="col-md-12"> <h3 class="login-h1 white">Sign In</h3> </div> <div class="col-md-12"> <div class="hpanel"> <div class="col-sm-7 no-padding"> <div class="doccolor"> <form id="loginForm"> <h3 class="login-h1">Sign in with your registered email ID</h3> <div class="form-group"> <div class="inner-addon left-addon"> <i class="glyphicon"><img src="images/icons/user.810c373f.png"></i> <input type="text" placeholder="example@gmail.com" title="Please enter your username" required value="" name="username" id="username" class="form-control" ng-model="email"> </div> </div> <div class="form-group"> <div class="inner-addon left-addon"> <i class="glyphicon"><img src="images/icons/password.d8afd8d3.png"></i> <input type="password" title="Please enter your password" placeholder="******" required value="" name="password" id="password" class="form-control" ng-model="password"> </div> </div> <!--<div>\r\n                                <input type="checkbox" ng-model="remember" ng-init="remember = true">\r\n                                Remember login\r\n                                <p class="help-block small">(if this is a private computer)</p>\r\n                               \r\n                            </div>--> <button class="btn btn-default btn-block h50" ng-click="loginSubmit()">Login <img class="loginarrow" src="images/icons/arrow_right.69c7b738.png"></button><br> <p class="text-center pull-left"> <a ng-click="forgotpassword()" class="white"> Forgot password? </a> </p> </form> </div> </div> <div class="col-sm-5 no-padding"> <div class="whitecolor"> <form id="loginForm"> <h3 class="login-h1">Sign in with your social media accounts</h3> <div class="inner-content"> <div class="icons-section"> <!-- <div class="twitter"><a ng-click="signup()"><span> </span> <lable> Register </lable>\r\n\t\t\t\t\t\t\t\t\t\t<div class="clear"></div></a>\r\n\t\t\t\t\t\t\t\t\t</div> --> <!--<div class="fb"><a href="#"><span> </span> <lable>Connect with Facebook</lable>\r\n\t\t\t\t\t\t\t\t\t\t\t<div class="clear"></div></a>\r\n\t\t\t\t\t\t\t\t\t</div>--> <div class="linkedin" linked-in><a><span> </span> <lable>Connect with Linkedin</lable> <div class="clear"></div></a> </div> <div class="google"><a ng-click="login()"><span> </span> <lable>Connect with Google+</lable> <div class="clear"></div></a> </div> <div class="clear"></div> </div> </div> </form> </div> </div> </div> </div> <div class="col-md-12"> <h3 class="login-h1 white" style="font-size:16px">Donâ€™t have an account? <a ng-click="signup()" style="color:#63C685">Sign Up Now</a></h3> </div> </div> <div class="row"> <div class="col-md-12 text-center"> </div> </div> </div> </div>'), a.put("views/login_1409.html", '<!--<div class="color-line"></div>\r\n\r\n<div class="back-link">\r\n</div>--> <div class="bgimg"> <div class="login-container" data-ng-init="init()"> <div class="row"> <div class="col-md-12"> <div class="col-md-4 col-md-offset-4 text-center m-b-md"> <img class="img-responsive" src="../images/docubasic_white_logo.73f6b9c2.png"> <uib-alert ng-repeat="alert in errors" class="display-alert" type="{{alert.type}}" close="closeAlert($index)" ng-click="closeAlert($index)" id="display-error-home">{{alert}}</uib-alert> <uib-alert ng-repeat="alert in alerts" class="display-alert" type="{{alert.type}}" close="closeAlerts($index)" ng-click="closeAlert($index)" id="display-error-home">{{alert.msg}}</uib-alert> <uib-alert ng-repeat="alert in loginalerts" class="display-alert" type="{{alert.type}}" close="closeAlerts($index)" ng-click="closeAlert($index)" id="display-error-home">{{alert.msg}}</uib-alert> </div> </div> <div class="col-md-12"> <div class="hpanel"> <div class="col-sm-7 no-padding"> <div class="doccolor"> <form id="loginForm"> <h3 class="login-h1">Sign in with your registered email ID</h3> <div class="form-group"> <!--<label class="control-label" for="username">Username</label>--> <div class="Rectangle-3"> <i class="form-control-feedback glyphicon glyphicon-user"></i> <input type="text" placeholder="example@gmail.com" title="Please enter your username" required value="" name="username" id="username" class="form-control" ng-model="email"> </div> <span class="help-block small">Your unique username</span> </div> <div class="form-group"> <label class="control-label" for="password">Password</label> <input type="password" title="Please enter your password" placeholder="******" required value="" name="password" id="password" class="form-control" maxlength="20" minlength="8" ng-model="password"> <span class="help-block small">Your strong password</span> </div> <div> <input type="checkbox" ng-model="remember" ng-init="remember = true"> Remember login <p class="help-block small">(if this is a private computer)</p> </div> <button class="btn btn-default btn-block" ng-click="loginSubmit()">Login</button><br> <p class="text-center pull-left"> <a ng-click="forgotpassword()"> Forgot password? </a> </p> <!--<a class="btn btn-warning btn-block" ng-click="signup()">Register</a>\r\n                            <a class="btn btn-block btn-social btn-google" ng-click="login()">\r\n                                <span class="fa fa-google"></span> Sign in with Google+\r\n                            </a>\r\n                            <a class="btn btn-block btn-social btn-linkedin" ng-click="getLinkedInData()">\r\n                                <span class="fa fa-linkedin"></span> Sign in with Linkedin\r\n                            </a>--> </form> </div> </div> <div class="col-sm-5 no-padding"> <div class="whitecolor"> <form id="loginForm"> <h3 class="login-h1">Sign in with your social media accounts</h3> <div class="inner-content"> <div class="icons-section"> <div class="twitter"><a ng-click="signup()"><span> </span> <lable> Register </lable> <div class="clear"></div></a> </div> <div class="linkedin"><a ng-click="getLinkedInData()"><span> </span> <lable>Sign in with Linkedin</lable> <div class="clear"></div></a> </div> <div class="google"><a ng-click="login()"><span> </span> <lable>Sign in with Google+</lable> <div class="clear"></div></a> </div> <div class="clear"></div> </div> </div> </form> </div> </div> </div> </div> </div> <div class="row"> <div class="col-md-12 text-center"> </div> </div> </div> </div>'), a.put("views/main.html", '<div id="header" ng-include="\'views/header.html\'"></div> <!-- Navigation --> <aside id="menu" ng-include="\'views/navigation.html\'"></aside> <style>.m-t-xl{margin-top:15px;}</style> <div id="right-sidebar" ng-include="\'views/right_sidebar.html\'" class="sidebar-open" ng-show="rightSidebar"></div> <div id="wrapper"> <div class="content animate-panel"> <div class="row"> <!--<div class="col-lg-3 ng-scope"  style="" ng-show="isAdmin">\n\t\t<div class="hpanel stats">\n\t\t\t<div class="panel-body h-200">\n\t\t\t\t<div class="stats-title pull-left">\n\t\t\t\t\t<h4>Billing Detail</h4>\n\t\t\t\t</div>\n\t\t\t\t<div class="stats-icon pull-right">\n\t\t\t\t\t<i class="pe-7s-battery fa-4x"></i>\n\t\t\t\t\t<a ng-href="#/billing"><button class="btn btn-success">Details</button></a>\n\t\t\t\t</div>\n\t\t\t\t<div class="clearfix"></div>\n\t\t\t\t<div class="m-t-xs" ng-repeat = "info in billingdata">\n\t\t\t\t\t<div class="row">\n\t\t\t\t\t\t<div class="col-xs-6" style="">\n\t\t\t\t\t\t\t<small class="stat-label">Current Plan</small>\n\t\t\t\t\t\t\t<h4>\n\t\t\t\t\t\t\t{{info.name}}\n\t\t\t\t\t\t\t<i class="fa fa-level-up text-success"></i>\n\t\t\t\t\t\t\t</h4>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class="col-xs-6" style="">\n\t\t\t\t\t\t\t<small class="stat-label">Due Date</small>\n\t\t\t\t\t\t\t<h4>\n\t\t\t\t\t\t\t{{info.due_date}}\n\t\t\t\t\t\t\t<i class="fa fa-level-up text-success"></i>\n\t\t\t\t\t\t\t</h4>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class="col-xs-6" style="">\n\t\t\t\t\t\t\t<small class="stat-label">Amount</small>\n\t\t\t\t\t\t\t<h4>\n\t\t\t\t\t\t\t{{info.amount}}\n\t\t\t\t\t\t\t<i class="fa fa-level-up text-success"></i>\n\t\t\t\t\t\t\t</h4>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class="row">\n\t\t\t\t\t\t<div class="col-xs-6" style="">\n\t\t\t\t\t\t\t<small class="stat-label">Start</small>\n\t\t\t\t\t\t\t<h4>\n\t\t\t\t\t\t\t{{info.start}}\n\t\t\t\t\t\t\t<i class="fa fa-level-up text-success"></i>\n\t\t\t\t\t\t\t</h4>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class="col-xs-6" style="">\n\t\t\t\t\t\t\t<small class="stat-label">End</small>\n\t\t\t\t\t\t\t<h4>\n\t\t\t\t\t\t\t{{info.end}}\n\t\t\t\t\t\t\t<i class="fa fa-level-up text-success"></i>\n\t\t\t\t\t\t\t</h4>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>--> <div class="row"> <div class="col-lg-12"> <h3>Dashboard</h3><br> </div> </div> <div class="row"> <div class="col-lg-3" ng-show="isAdmin"> <div class="hpanel" ng-repeat="info in billingdata"> <div class="panel-body h-200"> <div class="stats-title"> <h4> <img src="images/icons/dashboard/icon1.png"> &nbsp;Billing</h4> </div> <div class="m-t-xl"> <h1 class="m-xs">${{info.amount}}</h1> <small>Current billing period <br>{{info.start}} to {{info.end}}</small> </div> </div> <div class="panel-footer"> <div class="row"> <div class="col-xs-1"><i class="pe-7s-right-arrow fa-2x pull-left"></i></div> <a ng-href="#/billing"><div class="col-xs-10"><h5>View Details </h5></div></a> </div> </div> </div> </div> <!--<div class="col-lg-3" style="">\n          <div class="hpanel hgreen contact-panel">\n            <div class="panel-body"> \n            \n              <span  class="label label-success pull-right" ng-if="info.is_tenant_admin == 1">Admin</span>\n              <h3>\n              <a href="">User</a>\n              \n              <div class="stats-icon pull-right">\n              \t<a ng-href="#/users"><button class="btn btn-success">New</button></a>\n              </div>\n              </h3>\n              <div class="text-muted font-bold m-b-xs">{{usercount}}</div>\n              <p></p>\n            </div>\n            <div class="panel-footer contact-footer">\n              <div class="row">\n                <div class="col-md-4 border-right" style="">\n                  <div class="contact-stat">\n                   \n                  </div>\n                </div>\n                <div class="col-md-4 border-right" style="">\n                  <div class="contact-stat">\n                  \n                  </div>\n                </div>\n                <div class="col-md-4" style="">\n                  <div class="contact-stat">\n                  \n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>--> <div class="col-lg-3"> <div class="hpanel stats"> <div class="panel-body h-200"> <div class="stats-title"> <h4> <img src="images/icons/dashboard/icon3.png"> &nbsp;Users</h4> </div> <div class="m-t-xl"> <div class="row"> <div class="col-xs-6" style="border-right:1px solid #eeeeee"> <div class="m-xs font-bold no-margins">Admin</div> <h1 class="m-xs">{{admincount}}</h1> </div> <div class="col-xs-6"> <div class="m-xs font-bold no-margins">End Users</div> <h1 class="m-xs">{{usercount}}</h1> </div> </div> </div> </div> <div class="panel-footer"> <div class="row"> <div class="col-xs-1"><i class="pe-7s-plus fa-2x pull-left"></i></div> <div class="col-xs-10"><a ng-href="#/users"><h5> Create New </h5></a></div> </div> </div> </div> </div> <!--<div class="col-lg-3" style="">\n          <div class="hpanel hgreen contact-panel" >\n            <div class="panel-body" > \n            \n           \n              <h3>\n              <a href="">Proposal</a></h3>\n              \n              <div class="stats-icon pull-right" >\n             <button class="btn btn-success">New</button>\n              \t\n              </div>\n              </h3>\n              <div class="text-muted font-bold m-b-xs">Open\n              <p>{{praposals.OpenCount}}</p></div>\n              <div class="text-muted font-bold m-b-xs">Under Review\n              <p>{{praposals.underreviewCount}}</p></div>\n              <div class="text-muted font-bold m-b-xs">Submitted\n              <p>{{praposals.OpenCount}}</p></div>\n              <div class="text-muted font-bold m-b-xs">Closed\n              <p>{{praposals.closedCount}}</p></div>\n            </div>\n            <div class="panel-footer contact-footer">\n              <div class="row">\n                <div class="col-md-4 border-right" style="">\n                  <div class="contact-stat">\n                   \n                  </div>\n                </div>\n                <div class="col-md-4 border-right" style="">\n                  <div class="contact-stat">\n                  \n                  </div>\n                </div>\n                <div class="col-md-4" style="">\n                  <div class="contact-stat">\n                  \n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>--> <div class="col-lg-3"> <div class="hpanel stats"> <div class="panel-body h-200"> <div class="stats-title"> <h4><img src="images/icons/dashboard/icon2.png"> &nbsp;Proposals</h4> </div> <div class="m-t-xl"> <div class="row"> <div class="col-xs-5" style="border-right:1px solid #eeeeee"> <div class="m-xs font-bold no-margins">Open</div> <h1 class="m-xs">{{praposals.OpenCount}}</h1> </div> <div class="col-xs-7"> <div class="m-xs font-bold no-margins">Under Review <span class="pull-right">{{praposals.underreviewCount}}</span></div> <div class="m-xs font-bold no-margins">Submitted <span class="pull-right">{{praposals.submittedCount}}</span></div> <div class="m-xs font-bold no-margins">Closed <span class="pull-right">{{praposals.closedCount}}</span></div> </div> </div> </div> </div> <div class="panel-footer"> <div class="row"> <div class="col-xs-1"><i class="pe-7s-plus fa-2x pull-left"></i></div> <div class="col-xs-10"><a ng-click="createpraposal()"><h5> Create New </h5></a></div> </div> </div> </div> </div> <!--<div class="col-lg-3" style="" ng-show="isAdmin">\n          <div class="hpanel hgreen contact-panel">\n            <div class="panel-body" ng-repeat = "info in billingdata"> \n            \n             \n              <h3>\n              <a href="">Subscription</a>\n              \n              <div class="stats-icon pull-right">\n              \t<a ng-href="#/subscription"><button class="btn btn-success">Upgrade</button></a>\n              </div>\n              </h3>\n              <div class="text-muted font-bold m-b-xs">{{info.name}}</div>\n              <p></p>\n            </div>\n            <div class="panel-footer contact-footer">\n              <div class="row">\n                <div class="col-md-4 border-right" style="">\n                  <div class="contact-stat">\n                   \n                  </div>\n                </div>\n                <div class="col-md-4 border-right" style="">\n                  <div class="contact-stat">\n                  \n                  </div>\n                </div>\n                <div class="col-md-4" style="">\n                  <div class="contact-stat">\n                  \n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>--> <div class="col-lg-3"> <div class="hpanel stats"> <div class="panel-body h-200" ng-repeat="info in billingdata"> <div class="stats-title"> <h4> <img src="images/icons/dashboard/icon4.png"> &nbsp;Subscription</h4> </div> <div class="m-t-xl"> <div class="row"> <div class="col-xs-5" style="border-right:1px solid #eeeeee"> <div class="m-xs font-bold no-margins">{{info.name}}</div> <h1 class="m-xs">3.0</h1> </div> <div class="col-xs-7"> <i class="fa fa-star" style="color:#ffd037"></i> <i class="fa fa-star" style="color:#ffd037"></i> <i class="fa fa-star" style="color:#ffd037"></i> <i class="fa fa-star"></i> <i class="fa fa-star"></i> </div> </div> </div> </div> <div class="panel-footer"> <div class="row"> <div class="col-xs-1"><i class="pe-7s-up-arrow fa-2x pull-left"></i></div> <a ng-href="#/subscription"><div class="col-xs-10"><h5> Upgrade </h5></div></a> </div> </div> </div> </div> </div> <div class="row"> <div class="col-lg-3"> <div class="hpanel stats"> <div class="panel-body h-200"> <div class="stats-title"> <h4> <img src="images/icons/dashboard/icon5.png"> &nbsp;Proposals Won</h4> </div> <div class="m-t-xl"> <div class="row"> <div class="col-xs-5" style="border-right:1px solid #eeeeee"> <div class="m-xs font-bold no-margins">This month</div> <h1 class="m-xs">{{praposalswon.CurrentMonth}}</h1> </div> <div class="col-xs-7"> <div class="m-xs font-bold no-margins">Last Month <span class="pull-right">{{praposalswon.LastMonth}}</span></div> <div class="m-xs font-bold no-margins">This Quarter <span class="pull-right">{{praposalswon.Thisquarterwonproposal}}</span></div> <div class="m-xs font-bold no-margins">Last Quarter <span class="pull-right">{{praposalswon.Lastquarterwonproposal}}</span></div> </div> </div> </div> </div> <div class="panel-footer"> <div class="row"> <div class="col-xs-1"><i class="pe-7s-right-arrow fa-2x pull-left"></i></div> <div class="col-xs-10"><h5> View Details </h5></div> </div> </div> </div> </div> <div class="col-lg-3"> <div class="hpanel stats"> <div class="panel-body h-200"> <div class="stats-title"> <h4> <img src="images/icons/dashboard/icon6.png"> &nbsp;Proposals Lost</h4> </div> <div class="m-t-xl"> <div class="row"> <div class="col-xs-5" style="border-right:1px solid #eeeeee"> <div class="m-xs font-bold no-margins">This month</div> <h1 class="m-xs">{{praposalsloss.CurrentMonth}}</h1> </div> <div class="col-xs-7"> <div class="m-xs font-bold no-margins">Last Month <span class="pull-right">{{praposalsloss.LastMonth}}</span></div> <div class="m-xs font-bold no-margins">This Quarter <span class="pull-right">{{praposalsloss.Thisquarterlossproposal}}</span></div> <div class="m-xs font-bold no-margins">Last Quarter <span class="pull-right">{{praposalsloss.Lastquarterlossproposal}}</span></div> </div> </div> </div> </div> <div class="panel-footer"> <div class="row"> <div class="col-xs-1"><i class="pe-7s-right-arrow fa-2x pull-left"></i></div> <div class="col-xs-10"><h5> View Details </h5></div> </div> </div> </div> </div> <div class="col-lg-3"> <div class="hpanel stats"> <div class="panel-body h-200"> <div class="stats-title"> <h4> <img src="images/icons/dashboard/icon7.png"> &nbsp; Cost/Profit Analysis</h4> </div> <div class="m-t-xl"> <div class="row"> <div class="col-xs-6"> <h4>$140,000 </h4> <small class="stat-label">Proposal Value</small> <h4>$100,000.00 </h4> <small class="stat-label">Cost</small> </div> <div class="col-xs-6"> <h4 class="pull-right">40% <i class="fa fa-sort-up" style="color:#1da54b"></i> </h4> </div> </div> </div> </div> <div class="panel-footer"> <div class="row"> <div class="col-xs-1"><i class="pe-7s-right-arrow fa-2x pull-left"></i></div> <div class="col-xs-10"><h5> View Details </h5></div> </div> </div> </div> </div> <div class="col-lg-3"> <div class="hpanel stats"> <div class="panel-body h-200"> <div class="stats-title"> <h4> <img src="images/icons/dashboard/icon8.png"> &nbsp; Inhouse/Vendor Costs</h4> </div> <div class="m-t-xl"> <div class="row"> <div class="col-xs-6"> <h4>$140,000 </h4> <small class="stat-label">Proposal Value</small> <h4>$100,000.00 </h4> <small class="stat-label">Cost</small> </div> <div class="col-xs-6"> <br><br><br> <h4 class="pull-right">40% <i class="fa fa-sort-down" style="color:#ff6d6d"></i> </h4> </div> </div> </div> </div> <div class="panel-footer"> <div class="row"> <div class="col-xs-1"><i class="pe-7s-right-arrow fa-2x pull-left"></i></div> <div class="col-xs-10"><h5> View Details </h5></div> </div> </div> </div> </div> </div> <!--<div class="row">\n            <div class="col-lg-3">\n                <div class="hpanel stats">\n                    <div class="panel-body h-200">\n                        <div class="stats-title">\n                            <h4> <img src="images/icons/dashboard/icon5.png"> &nbsp;Proposals Won</h4>\n                        </div>\n                        <div class="m-t-xl">\n              <div class="row">\n                <div class="col-xs-5" style="border-right:1px solid #eeeeee;">\n                  <div class="m-xs font-bold no-margins">This month</div>\n                  <h1 class="m-xs">02</h1>\n                </div>\n                <div class="col-xs-7">\n                  <div class="m-xs font-bold no-margins">Last Month  <span class="pull-right">10</span></div>\n                  <div class="m-xs font-bold no-margins">This Quarter <span class="pull-right">03</span></div>\n                  <div class="m-xs font-bold no-margins">Last Quarter  <span class="pull-right">20</span></div>\n                </div>\n              </div>\n                         </div>\n                    </div>\n                    <div class="panel-footer">\n            <div class="row">\n                            <div class="col-xs-1"><i class="pe-7s-right-arrow fa-2x pull-left"></i></div>\n              <div class="col-xs-10"><h5> View Details </h5></div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <div class="col-lg-3">\n                <div class="hpanel stats">\n                    <div class="panel-body h-200">\n                        <div class="stats-title">\n                            <h4> <img src="images/icons/dashboard/icon6.png"> &nbsp;Proposals Lost</h4>\n                        </div>\n                        <div class="m-t-xl">\n              <div class="row">\n                <div class="col-xs-5" style="border-right:1px solid #eeeeee;">\n                  <div class="m-xs font-bold no-margins">This month</div>\n                  <h1 class="m-xs">02</h1>\n                </div>\n                <div class="col-xs-7">\n                  <div class="m-xs font-bold no-margins">Last Month  <span class="pull-right">10</span></div>\n                  <div class="m-xs font-bold no-margins">This Quarter <span class="pull-right">03</span></div>\n                  <div class="m-xs font-bold no-margins">Last Quarter  <span class="pull-right">20</span></div>\n                </div>\n              </div>\n                         </div>\n                    </div>\n                    <div class="panel-footer">\n            <div class="row">\n                            <div class="col-xs-1"><i class="pe-7s-right-arrow fa-2x pull-left"></i></div>\n              <div class="col-xs-10"><h5> View Details </h5></div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n      <div class="col-lg-3">\n                <div class="hpanel stats">\n                    <div class="panel-body h-200">\n                        <div class="stats-title">\n                            <h4> <img src="images/icons/dashboard/icon7.png"> &nbsp; Cost/Profit Analysis</h4>\n                        </div>\n                        <div class="m-t-xl">\n              <div class="row">\n                <div class="col-xs-6" >\n                     <h4>$140,000 </h4>\n                   <small class="stat-label">Proposal Value</small>\n                   <h4>$100,000.00 </h4>\n                   <small class="stat-label">Cost</small>\n                                    \n                </div>\n                <div class="col-xs-6">\n                  <h4 class="pull-right">40% <i class="fa fa-sort-up" style="color:#1da54b"></i> </h4>\n                </div>\n              </div>\n                         </div>\n                    </div>\n                    <div class="panel-footer">\n            <div class="row">\n                            <div class="col-xs-1"><i class="pe-7s-right-arrow fa-2x pull-left"></i></div>\n              <div class="col-xs-10"><h5> View Details </h5></div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n      <div class="col-lg-3">\n                <div class="hpanel stats">\n                    <div class="panel-body h-200">\n                        <div class="stats-title ">\n                            <h4> <img src="images/icons/dashboard/icon8.png"> &nbsp; Inhouse/Vendor Costs</h4>\n                        </div>\n                        <div class="m-t-xl">\n              <div class="row">\n                <div class="col-xs-6" >\n                     <h4>$140,000 </h4>\n                   <small class="stat-label">Proposal Value</small>\n                   <h4>$100,000.00 </h4>\n                   <small class="stat-label">Cost</small>\n                                    \n                </div>\n                <div class="col-xs-6">\n                <br><br><br>\n                  <h4 class="pull-right">40% <i class="fa fa-sort-down" style="color:#ff6d6d"></i> </h4>\n                </div>\n              </div>\n                         </div>\n                    </div>\n                    <div class="panel-footer">\n            <div class="row">\n                            <div class="col-xs-1"><i class="pe-7s-right-arrow fa-2x pull-left"></i></div>\n              <div class="col-xs-10"><h5> View Details </h5></div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>--> <div class="row"> <!--<div class="col-md-3" style="">\n\t<div class="hpanel panel-group">\n\t\t<div class="panel-body">\n\t\t\t<uib-alert ng-repeat="alert in alerts" class="display-alert" type="{{alert.type}}" close="closeAlert($index)" ng-click="closeAlert($index)" id="display-error-home">{{alert.msg}}</uib-alert>\n\t\t\t<div class="text-center text-muted font-bold">Recent Notes</div>\n\t\t\t\n\t\t</div>\n\t\t<div class="panel-section">\n\t\t\t<div class="input-group">\n\t\t\t\t\n\t\t\t\t<span class="input-group-btn">\n\t\t\t\t\t\n\t\t\t\t\t<button class="btn-sm visible-xs visible-sm collapsed btn-default btn btn-block m-t-sm" data-target="#notes" data-toggle="collapse" type="button">\n\t\t\t\t</div>\n\t\t\t\t<div id="notes">\n\t\t\t\t\t<div class="panel-body note-link" ng-repeat = "info in notes">\n\t\t\t\t\t\t<div class="panel-body note-link">\n\t\t\t\t\t\t\t<a ng-click="getnotesdata(info)">{{info.Name}}  <br>{{info.Created_at | date:\'medium\'}}</a>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>--> <div class="col-lg-6" style=""> <div class="hpanel"> <div class="panel-heading hbuilt"><i class="pe-7s-note size20"></i> &nbsp; Recent Notes</div> <div class="panel-body"> <div class="table-responsive"> <table cellspacing="1" cellpadding="1" class="table table-striped"> <thead> <tr> <th width="78%">Subject</th> <th width="22%">Created On</th> </tr> </thead> <tbody ng-repeat="info in notes"> <tr> <td>{{info.Name}}</td> <td>{{info.Created_at | date:\'medium\'}}</td> </tr> </tbody> </table> </div> </div> </div> </div> <div class="col-lg-6" style=""> <div class="hpanel"> <div class="panel-heading hbuilt"> <i class="fa fa-list-ul"></i> &nbsp; Recent ToDo\'s</div> <div class="panel-body"> <div class="table-responsive"> <table cellspacing="1" cellpadding="1" class="table table-striped"> <thead> <tr> <th width="56%">Task List</th> <th width="22%">Start Date</th> <th width="22%">End Date</th> </tr> </thead> <tbody ng-repeat="info in todos"> <tr> <td>{{info.TaskName}}</td> <td>{{info.start_date}}</td> <td>{{info.end_date}}</td> </tr> </tbody> </table> </div> </div> </div> </div> </div> </div> </div> <br><br><br><br><br><br><br><br><br><br><br><br><br><br><br> </div> '),
            a.put("views/main_old.html", '<div id="header" ng-include="\'views/header.html\'"></div> <!-- Navigation --> <aside id="menu" ng-include="\'views/navigation.html\'"></aside> <div id="right-sidebar" ng-include="\'views/right_sidebar.html\'" class="sidebar-open" ng-show="rightSidebar"></div> <div id="wrapper"> <div class="row"> <div class="col-lg-3 ng-scope" style=""> <div class="hpanel stats"> <div class="panel-body h-200"> <div class="stats-title pull-left"> <h4>Billing Detail</h4> </div> <div class="stats-icon pull-right"> <i class="pe-7s-battery fa-4x"></i> <button class="btn btn-success"><a ng-href="#/billing">Details</a></button> </div> <div class="clearfix"></div> <div class="m-t-xs" ng-repeat="info in billingdata"> <div class="row"> <div class="col-xs-6" style=""> <small class="stat-label">Current Plan</small> <h4> {{info.name}} <i class="fa fa-level-up text-success"></i> </h4> </div> <div class="col-xs-6" style=""> <small class="stat-label">Due Date</small> <h4> {{info.due_date}} <i class="fa fa-level-up text-success"></i> </h4> </div> <div class="col-xs-6" style=""> <small class="stat-label">Amount</small> <h4> {{info.amount}} <i class="fa fa-level-up text-success"></i> </h4> </div> </div> <div class="row"> <div class="col-xs-6" style=""> <small class="stat-label">Start</small> <h4> {{info.start}} <i class="fa fa-level-up text-success"></i> </h4> </div> <div class="col-xs-6" style=""> <small class="stat-label">End</small> <h4> {{info.end}} <i class="fa fa-level-up text-success"></i> </h4> </div> </div> </div> </div> </div> </div> <div class="col-lg-3" style=""> <div class="hpanel hgreen contact-panel"> <div class="panel-body"> <span class="label label-success pull-right" ng-if="info.is_tenant_admin == 1">Admin</span> <h3> <a href="">User</a> <div class="stats-icon pull-right"> <button class="btn btn-success"><a ng-href="#/users">New</a></button> </div> </h3> <div class="text-muted font-bold m-b-xs">{{usercount}}</div> <p></p> </div> <div class="panel-footer contact-footer"> <div class="row"> <div class="col-md-4 border-right" style=""> <div class="contact-stat"> </div> </div> <div class="col-md-4 border-right" style=""> <div class="contact-stat"> </div> </div> <div class="col-md-4" style=""> <div class="contact-stat"> </div> </div> </div> </div> </div> </div> <div class="col-lg-3" style=""> <div class="hpanel hgreen contact-panel"> <div class="panel-body"> <h3> <a href="">Proposal</a></h3> <div class="stats-icon pull-right"> <button class="btn btn-success"><a ng-href="#/users">New</a></button> </div>  <div class="text-muted font-bold m-b-xs">Open <p>{{praposals.OpenCount}}</p></div> <div class="text-muted font-bold m-b-xs">Under Review <p>{{praposals.underreviewCount}}</p></div> <div class="text-muted font-bold m-b-xs">Submitted <p>{{praposals.OpenCount}}</p></div> <div class="text-muted font-bold m-b-xs">Closed <p>{{praposals.closedCount}}</p></div> </div> <div class="panel-footer contact-footer"> <div class="row"> <div class="col-md-4 border-right" style=""> <div class="contact-stat"> </div> </div> <div class="col-md-4 border-right" style=""> <div class="contact-stat"> </div> </div> <div class="col-md-4" style=""> <div class="contact-stat"> </div> </div> </div> </div> </div> </div> <div class="col-lg-3" style=""> <div class="hpanel hgreen contact-panel"> <div class="panel-body" ng-repeat="info in billingdata"> <h3> <a href="">Subscription</a> <div class="stats-icon pull-right"> <button class="btn btn-success"><a ng-href="#/subscription">Upgrade</a></button> </div> </h3> <div class="text-muted font-bold m-b-xs">{{info.name}}</div> <p></p> </div> <div class="panel-footer contact-footer"> <div class="row"> <div class="col-md-4 border-right" style=""> <div class="contact-stat"> </div> </div> <div class="col-md-4 border-right" style=""> <div class="contact-stat"> </div> </div> <div class="col-md-4" style=""> <div class="contact-stat"> </div> </div> </div> </div> </div> </div> </div> <div class="row"> <div class="col-md-3" style=""> <div class="hpanel panel-group"> <div class="panel-body"> <uib-alert ng-repeat="alert in alerts" class="display-alert" type="{{alert.type}}" close="closeAlert($index)" ng-click="closeAlert($index)" id="display-error-home">{{alert.msg}}</uib-alert> <div class="text-center text-muted font-bold">Recent Notes</div> <button class="btn btn-default" type="button" ng-click="addnote()"> <i class="glyphicon glyphicon-plus small"></i> </button> </div> <div class="panel-section"> <div class="input-group"> <span class="input-group-btn"> <button class="btn-sm visible-xs visible-sm collapsed btn-default btn btn-block m-t-sm" data-target="#notes" data-toggle="collapse" type="button"> </button></span></div> <div id="notes"> <div class="panel-body note-link" ng-repeat="info in notes"> <div class="panel-body note-link"> <a ng-click="getnotesdata(info)">{{info.Name}} <br>{{info.Created_at | date:\'medium\'}}</a> </div> </div> </div> </div> </div> </div> <div class="col-md-3" style=""> <div class="hpanel panel-group"> <div class="panel-body"> <div class="text-center text-muted font-bold">Recent Task</div> <button class="btn btn-default" type="button" ng-click="addnote()"> <i class="glyphicon glyphicon-plus small"></i> </button> </div> <div class="panel-section" ng-repeat="info in todos"> <div class="input-group"> <span class="input-group-btn"> <button class="btn-sm visible-xs visible-sm collapsed btn-default btn btn-block m-t-sm" data-target="#notes" data-toggle="collapse" type="button"> </button></span></div> <div id="notes"> <div class="panel-body note-link"> <div class="panel-body note-link"> <a ng-click="getnotesdata(info)">{{info.TaskName}}<a> </a></div> </div> </div> </div> </div> </div> </div> </div>'), a.put("views/navigation.html", '<div id="navigation"> <!--<div class="profile-picture">\r\n        <a href="index.html">\r\n            <img src="images/yeoman.c582c4d1.png" class="img-circle m-b" alt="logo">\r\n        </a>\r\n\r\n        <div class="stats-label text-color">\r\n            <span class="font-extra-bold font-uppercase"></span>\r\n\r\n            <div class="dropdown" uib-dropdown>\r\n                <a uib-dropdown-toggle href>\r\n                    <small class="text-muted">{{username}}<b class="caret"></b></small>\r\n                </a>\r\n                <ul class="animated flipInX m-t-xs" uib-dropdown-menu>\r\n                   \r\n                    <li><a ng-href="#/login">Logout</a></li>\r\n                </ul>\r\n            </div>\r\n\r\n            <!--<div class="small-chart m-t-sm">\r\n            <div sparkline spark-data="barProfileData" spark-options="barProfileOptions"></div>\r\n            </div>\r\n            <div>\r\n                <h4 class="font-extra-bold m-b-xs">\r\n                    $260 104,200\r\n                </h4>\r\n                <small class="text-muted">Your income from the last year in sales product X.</small>\r\n            </div>\r\n        </div>\r\n    </div>--> <ul side-navigation class="nav" id="side-menu"> <li ui-sref-active="active" ng-class="{active: $route.current.activetab == \'dashboard\'}"> <a ng-href="#/main"> <i class="pe-7s-timer size20 pull-left"></i> <span class="nav-label"> Dashboard</span> <span class="label label-success pull-right"></span> </a> </li> <li ui-sref-active="active" ng-class="{active: $route.current.activetab == \'dashboard\'}"> <a ng-href="#/settingpage"> <i class="pe-7s-timer size20 pull-left"></i> <span class="nav-label">Setting</span> <span class="label label-success pull-right"></span> </a> </li> <!--<li ng-class="{active: $state.includes(\'dashbord\')}">\r\n            <a><i class="pe-7s-config size20 pull-left"></i><span class="nav-label">Settings</span><span class="fa arrow"></span> </a>\r\n            <ul class="nav nav-second-level" ng-class="{in: $state.includes(\'dashbord\')}">\r\n                <li ui-sref-active="active" >\r\n            <a ng-href="#/companysetting" > <span class="nav-label">Company </span> </a>\r\n        </li>\r\n        <li ui-sref-active="active">\r\n            <a ng-href="#/task"> <span class="nav-label">Task Categories</span> </a>\r\n        </li>\r\n         <li ui-sref-active="active">\r\n            <a ng-href="#/projecttask"> <span class="nav-label">Project Tasks</span> </a>\r\n        </li>\r\n         <li ui-sref-active="active">\r\n            <a ng-href="#/price"> <span class="nav-label">Pricing</span> </a>\r\n        </li>\r\n         <li ui-sref-active="active">\r\n            <a ng-href="#/vendors"> <span class="nav-label">Vendors</span> </a>\r\n        </li>\r\n         \r\n         <li ui-sref-active="active">\r\n            <a ng-href="#/resourcetype"> <span class="nav-label">Resource Types</span> </a>\r\n        </li>\r\n        \r\n         <li ui-sref-active="active">\r\n            <a ng-href="#/client"> <span class="nav-label">Clients</span> </a>\r\n        </li>\r\n       \r\n            </ul>\r\n        </li>--> <li ui-sref-active="active" ng-class="{active: $route.current.activetab == \'notes\'}"> <a ng-href="#/proposal-summery"><i class="pe-7s-note size20 pull-left"></i> <span class="nav-label">Proposal</span> </a> </li> <li ui-sref-active="active" ng-class="{active: $route.current.activetab == \'notes\'}"> <a ng-href="#/notes"><i class="pe-7s-note size20 pull-left"></i> <span class="nav-label">Notes</span> </a> </li> <li ui-sref-active="active" ng-class="{active: $route.current.activetab == \'todos\'}"> <a ng-href="#/todos"><i class="fa fa-list-ul size20 pull-left"></i> <span class="nav-label">Todo\'s</span> </a> </li> <li ui-sref-active="active" ng-class="{active: $route.current.activetab == \'users\'}"> <a ng-href="#/users"><i class="pe-7s-users size20 pull-left"></i> <span class="nav-label">Users</span> </a> </li> <!-- <li ui-sref-active="active">\r\n            <a ng-href="#/billing"> <span class="nav-label">billing</span> </a>\r\n        </li>\r\n      <li ui-sref-active="active">\r\n            <a ng-href="#/subscription"> <span class="nav-label">Subscription</span> </a>\r\n        </li>--> <!-- <li ui-sref-active="active">\r\n            <a ui-sref="analytics"> <span class="nav-label">Analytics</span><span class="label label-warning pull-right">NEW</span> </a>\r\n        </li>\r\n        <li ng-class="{active: $state.includes(\'interface\')}">\r\n            <a href="#"><span class="nav-label">Interface</span><span class="fa arrow"></span> </a>\r\n            <ul class="nav nav-second-level" ng-class="{in: $state.includes(\'interface\')}">\r\n                <li ui-sref-active="active"><a ui-sref="interface.panels">Panels design</a></li>\r\n                <li ui-sref-active="active"><a ui-sref="interface.typography">Typography</a></li>\r\n                <li ui-sref-active="active"><a ui-sref="interface.buttons">Colors &amp; Buttons</a></li>\r\n                <li ui-sref-active="active"><a ui-sref="interface.components">Components</a></li>\r\n                <li ui-sref-active="active"><a ui-sref="interface.alerts">Alerts</a></li>\r\n                <li ui-sref-active="active"><a ui-sref="interface.modals">Modals</a></li>\r\n                <li ui-sref-active="active"><a ui-sref="interface.loading_buttons">Loading buttons</a></li>\r\n                <li ui-sref-active="active"><a ui-sref="interface.draggable_panels">Draggable Panels</a></li>\r\n                <li ui-sref-active="active"><a ui-sref="interface.code_editor">Code editor</a></li>\r\n                <li ui-sref-active="active"><a href="email_template/email_template.html">Email template</a></li>\r\n                <li ui-sref-active="active"><a ui-sref="interface.list">List</a></li>\r\n                <li ui-sref-active="active"><a ui-sref="interface.tour">Tour</a></li>\r\n                <li ui-sref-active="active"><a ui-sref="interface.icons">Icons library</a></li>\r\n            </ul>\r\n        </li>\r\n        <li ng-class="{\'active\': $state.includes(\'app_views\') || $state.includes(\'blog_details\')}">\r\n            <a href="#"><span class="nav-label">App views</span><span class="fa arrow"></span> </a>\r\n            <ul class="nav nav-second-level" ng-class="{\'in\': $state.includes(\'app_views\') || $state.includes(\'blog_details\')}">\r\n                <li ui-sref-active="active"><a ui-sref="app_views.contacts">Contacts</a></li>\r\n                <li ui-sref-active="active"><a ui-sref="app_views.projects">Projects</a></li>\r\n                <li ui-sref-active="active"><a ui-sref="app_views.project_detail">Project detail</a></li>\r\n                <li ui-sref-active="active"><a ui-sref="app_views.app_plans">App plans</a></li>\r\n                <li ui-sref-active="active"><a ui-sref="app_views.social_board">Social board</a></li>\r\n                <li ui-sref-active="active"><a ui-sref="app_views.faq">FAQ</a></li>\r\n                <li ui-sref-active="active"><a ui-sref="app_views.timeline">Timeline</a></li>\r\n                <li ui-sref-active="active"><a ui-sref="app_views.notes">Notes</a></li>\r\n                <li ui-sref-active="active"><a ui-sref="app_views.mailbox">Mailbox</a></li>\r\n                <li ui-sref-active="active"><a ui-sref="app_views.email_compose">Email compose</a></li>\r\n                <li ui-sref-active="active"><a ui-sref="app_views.email_view">Email view</a></li>\r\n                <li ui-sref-active="active"><a ui-sref="app_views.profile">Profile</a></li>\r\n                <li ui-sref-active="active"><a ui-sref="app_views.blog">Blog</a></li>\r\n                <li ui-sref-active="active"><a ui-sref="blog_details">Blog article</a></li>\r\n                <li ui-sref-active="active"><a ui-sref="app_views.forum">Forum</a></li>\r\n                <li ui-sref-active="active"><a ui-sref="app_views.forum_details">Forum details</a></li>\r\n                <li ui-sref-active="active"><a ui-sref="app_views.gallery">Gallery</a></li>\r\n                <li ui-sref-active="active"><a ui-sref="app_views.calendar">Calendar</a></li>\r\n                <li ui-sref-active="active"><a ui-sref="app_views.invoice">Invoice</a></li>\r\n                <li ui-sref-active="active"><a ui-sref="app_views.file_manager">File manager</a></li>\r\n                <li ui-sref-active="active"><a ui-sref="app_views.chat_view">Chat view</a></li>\r\n                <li ui-sref-active="active"><a ui-sref="app_views.search">Search view</a></li>\r\n            </ul>\r\n        </li>\r\n        <li ng-class="{active: $state.includes(\'charts\')}">\r\n            <a href="#"><span class="nav-label">Charts</span><span class="fa arrow"></span> </a>\r\n            <ul class="nav nav-second-level" ng-class="{in: $state.includes(\'charts\')}">\r\n                <li ui-sref-active="active"><a ui-sref="charts.chartjs">ChartJs</a></li>\r\n                <li ui-sref-active="active"><a ui-sref="charts.flot">Flot charts</a></li>\r\n                <li ui-sref-active="active"><a ui-sref="charts.inline">Inline graphs</a></li>\r\n                <li ui-sref-active="active"><a ui-sref="charts.chartist">Chartist</a></li>\r\n                <li ui-sref-active="active"><a ui-sref="charts.c3Charts">C3 Charts</a></li>\r\n            </ul>\r\n        </li>\r\n        <li ng-class="{active: $state.includes(\'transitions\')}">\r\n            <a href="#"><span class="nav-label">Box transitions</span><span class="fa arrow"></span> </a>\r\n            <ul class="nav nav-second-level" ng-class="{in: $state.includes(\'transitions\')}">\r\n                <li ui-sref-active="active"><a ui-sref="transitions.overview"><span class="label label-success pull-right">Start</span> Overview </a>  </li>\r\n                <li ui-sref-active="active"><a ui-sref="transitions.transition_two">Columns from up</a></li>\r\n                <li ui-sref-active="active"><a ui-sref="transitions.transition_one">Columns custom</a></li>\r\n                <li ui-sref-active="active"><a ui-sref="transitions.transition_three">Panels zoom</a></li>\r\n                <li ui-sref-active="active"><a ui-sref="transitions.transition_four">Rows from down</a></li>\r\n                <li ui-sref-active="active"><a ui-sref="transitions.transition_five">Rows from right</a></li>\r\n            </ul>\r\n        </li>\r\n        <li>\r\n            <a href="#"><span class="nav-label">Common views</span><span class="fa arrow"></span> </a>\r\n            <ul class="nav nav-second-level">\r\n                <li ui-sref-active="active"><a ui-sref="common.login">Login</a></li>\r\n                <li ui-sref-active="active"><a ui-sref="common.register">Register</a></li>\r\n                <li ui-sref-active="active"><a ui-sref="common.error_one">Error 404</a></li>\r\n                <li ui-sref-active="active"><a ui-sref="common.error_two">Error 505</a></li>\r\n                <li ui-sref-active="active"><a ui-sref="common.lock">Lock screen</a></li>\r\n                <li ui-sref-active="active"><a ui-sref="common.password_recovery">Password recovery</a></li>\r\n            </ul>\r\n        </li>\r\n        <li ng-class="{active: $state.includes(\'tables\')}">\r\n            <a href="#"><span class="nav-label">Tables</span><span class="fa arrow"></span> </a>\r\n            <ul class="nav nav-second-level" ng-class="{in: $state.includes(\'tables\')}">\r\n                <li ui-sref-active="active"><a ui-sref="tables.tables_design">Tables design</a></li>\r\n                <li ui-sref-active="active"><a ui-sref="tables.datatables">Data tables</a></li>\r\n                <li ui-sref-active="active"><a ui-sref="tables.ng_grid">ngGrid</a></li>\r\n                <li ui-sref-active="active"><a ui-sref="tables.footable">Foo table</a></li>\r\n            </ul>\r\n        </li>\r\n        <li ui-sref-active="active">\r\n            <a ui-sref="widgets"> <span class="nav-label">Widgets</span> <span class="label label-success pull-right">Special</span></a>\r\n        </li>\r\n        <li ng-class="{active: $state.includes(\'forms\')}">\r\n            <a href="#"><span class="nav-label">Forms</span><span class="fa arrow"></span> </a>\r\n            <ul class="nav nav-second-level" ng-class="{in: $state.includes(\'forms\')}">\r\n                <li ui-sref-active="active"><a ui-sref="forms.forms_elements">Forms elements</a></li>\r\n                <li ui-sref-active="active"><a ui-sref="forms.forms_extended">Forms extended</a></li>\r\n                <li ui-sref-active="active"><a ui-sref="forms.text_editor">Text editor</a></li>\r\n                <li ui-sref-active="active"><a ui-sref="forms.wizard">Wizard</a></li>\r\n                <li ui-sref-active="active"><a ui-sref="forms.validation">Validation</a></li>\r\n            </ul>\r\n        </li>\r\n        <li ui-sref-active="active">\r\n            <a ui-sref="options"> <span class="nav-label">Layout options</span></a>\r\n        </li>\r\n        <li ui-sref-active="active">\r\n            <a ui-sref="grid_system"> <span class="nav-label">Grid system</span></a>\r\n        </li>\r\n        <li ui-sref-active="active">\r\n            <a ui-sref="landing"> <span class="nav-label">Landing page</span></a>\r\n        </li>--> </ul> </div>'), a.put("views/notes.html", '<div id="header" ng-include="\'views/header.html\'"></div> <!-- Navigation --> <aside id="menu" ng-include="\'views/navigation.html\'"></aside> <div id="wrapper"> <div class="normalheader transition animated fadeIn"> <div class="hpanel"> <div class="panel-body"> <div class="pull-right m-t-lg" id="hbreadcrumb"> <ol class="hbreadcrumb breadcrumb"> <li><a href="index.html">Dashboard</a></li> <li class="active"> <span>Notes</span> </li> </ol> </div> <h2 class="font-light m-b-xs"> Notes </h2> <small></small> </div> </div> </div> <div class="content animate-panel"> <uib-alert ng-repeat="error in errors" class="display-alert" type="{{alert.type}}" close="closeAlert($index)" ng-click="closeAlert($index)" id="display-error-home">{{error}}</uib-alert> <uib-alert ng-repeat="alert in alerts" class="display-alert" type="{{alert.type}}" close="closeAlerts($index)" ng-click="closeAlert($index)" id="display-error-home">{{alert.msg}}</uib-alert> <!--<div class="col-md-3" style="">\r\n\t<div class="hpanel panel-group">\r\n\t\t<div class="panel-body">\r\n\t\t\t<uib-alert ng-repeat="alert in alerts" class="display-alert" type="{{alert.type}}" close="closeAlerts($index)" ng-click="closeAlert($index)" id="display-error-home">{{alert.msg}}</uib-alert>\r\n   <uib-alert ng-repeat="error in errors" class="display-alert" type="{{alert.type}}" close="closeAlert($index)" ng-click="closeAlert($index)" id="display-error-home">{{error}}</uib-alert>\r\n\t\t\t<div class="text-center text-muted font-bold"> add new note</div>\r\n\t\t\t<button class="btn btn-default" type="button" ng-click="addnote()">\r\n\t\t\t\t\t<i class="glyphicon glyphicon-plus small"></i>\r\n\t\t\t\t\t</button>\r\n\t\t</div>\r\n\t\t<div class="panel-section">\r\n\t\t\t<div class="input-group">\r\n\t\t\t\t\r\n\t\t\t\t<span class="input-group-btn">\r\n\t\t\t\t\t\r\n\t\t\t\t\t<button class="btn-sm visible-xs visible-sm collapsed btn-default btn btn-block m-t-sm" data-target="#notes" data-toggle="collapse" type="button">\r\n\t\t\t\t</div>\r\n\t\t\t\t<div id="notes">\r\n\t\t\t\t\t<div class="panel-body note-link" ng-repeat = "info in notes">\r\n\t\t\t\t\t\t<div class="panel-body note-link">\r\n\t\t\t\t\t\t\t<a ng-click="getnotesdata(info)">{{info.Name}}<a/>{{info.CreatedDate}}\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>--> <div class="col-md-3"> <div class="hpanel panel-group"> <div class="panel-body"> <div class="text-center text-muted font-bold"><h4>Notes</h4></div> </div> <div class="panel-section"> <div class="input-group"> <input type="text" class="form-control" ng-model="searchnote" placeholder="Search note..."> <span class="input-group-btn"> <button class="btn btn-info" type="button" ng-click="addnote()"><i class="glyphicon glyphicon-plus small"></i> </button> </span> </div> <button type="button" data-toggle="collapse" data-target="#notes" class="btn-sm visible-xs visible-sm collapsed btn-default btn btn-block m-t-sm"> All notes <i class="fa fa-angle-down"></i> </button> </div> <div id="notes" class="collapse"> <div class="panel-body note-link" ng-repeat="info in notes | filter:searchnote"> <a href="#note1" data-toggle="tab"> <small class="pull-right text-muted">{{info.Created_at}}</small> <a ng-click="getnotesdata(info)"><h5>{{info.Name}}</h5></a> <div class="small"> {{info.ShortDescription}} </div> </a> </div> </div> </div> </div> <div class="col-md-9" ng-init="note = \'note1\'" style="" ng-show="edit"> <div class="hpanel"> <div class="panel-body"> <div class="text-center hidden"> We couldn\'t find any notes for you. </div> <div> <div class="" style=""> <div class="pull-right text-muted m-l-lg">{{date}}</div> <h4 style="margin-bottom:18px">Add New Note</h4> <label>Note Name </label><br> <input class="form-control" ng-model="notename">  <hr> <div class="note-content"> <label>Note Description </label><br> <textarea class="form-control" ng-model="notediscription"> </textarea> </div><br> <div class="btn-group"> <button class="btn btn-primary" ng-click="updatenote()"> Save </button>&nbsp;&nbsp;&nbsp; </div> <div class="btn-group"> <button class="btn btn-primary" ng-click="addnote()"> Cancel </button></div>  </div> </div> </div> </div> </div> <div class="col-md-9" ng-init="note = \'note1\'" ng-show="editdisplay"> <div class="hpanel"> <div class="panel-body"> <div class="text-center hidden"> We couldn\'t find any notes for you. </div> <div class="tab-content"> <div id="note1" class="tab-pane active"> <div class="pull-right text-muted m-l-lg"> {{date}} </div> <h4>{{notename}}</h4> <hr> <div class="note-content"> <p> {{notediscription}} </p> </div><br> <div class="btn-group pull-right"> <button class="btn btn-sm btn-default" ng-click="getnote()"><i class="fa fa-edit fa-2x"></i> </button> <button class="btn btn-sm btn-default" ng-click="deletenote()"><i class="fa fa-close fa-2x"></i> </button> </div> </div> </div> </div> </div> </div> <div class="col-md-9" ng-init="note = \'note1\'" style="" ng-show="display"> <div class="hpanel"> <div class="panel-body"> <div class="text-center hidden"> We couldn\'t find any notes for you. </div> <div> <div class="" style=""> <div class="pull-right text-muted m-l-lg"></div> <h4>Add New</h4> <label>Note Name</label><br> <input class="form-control" maxlength="20" ng-model="newnotename">  <hr> <div class="note-content"> <label>Note Description</label><br> <textarea class="form-control" ng-model="newnotediscription"> </textarea> </div><br> <div class="btn-group"> <button class="btn btn-primary" ng-click="submitnote()"> Save </button> </div> </div> </div> </div> </div> </div> </div> </div>'), a.put("views/notes_old.html", '<div id="header" ng-include="\'views/header.html\'"></div> <!-- Navigation --> <aside id="menu" ng-include="\'views/navigation.html\'"></aside> <div id="wrapper"> <div class="col-md-3" style=""> <div class="hpanel panel-group"> <div class="panel-body"> <uib-alert ng-repeat="alert in alerts" class="display-alert" type="{{alert.type}}" close="closeAlerts($index)" ng-click="closeAlert($index)" id="display-error-home">{{alert.msg}}</uib-alert> <uib-alert ng-repeat="error in errors" class="display-alert" type="{{alert.type}}" close="closeAlert($index)" ng-click="closeAlert($index)" id="display-error-home">{{error}}</uib-alert> <div class="text-center text-muted font-bold"> add new note</div> <button class="btn btn-default" type="button" ng-click="addnote()"> <i class="glyphicon glyphicon-plus small"></i> </button> </div> <div class="panel-section"> <div class="input-group"> <span class="input-group-btn"> <button class="btn-sm visible-xs visible-sm collapsed btn-default btn btn-block m-t-sm" data-target="#notes" data-toggle="collapse" type="button"> </button></span></div> <div id="notes"> <div class="panel-body note-link" ng-repeat="info in notes"> <div class="panel-body note-link"> <a ng-click="getnotesdata(info)">{{info.Name}}<a>{{info.CreatedDate}} </a></div> </div> </div> </div> </div> </div> <div class="col-md-9" ng-init="note = \'note1\'" style="" ng-hide="display"> <div class="hpanel"> <div class="panel-body"> <div class="text-center hidden"> We couldn\'t find any notes for you. </div> <div> <div class="" style=""> <div class="pull-right text-muted m-l-lg">{{date}}</div> <h3>Publishing packages</h3> <label>Note Name</label><br> <input class="form-control" ng-model="notename">  <hr> <div class="note-content"> <label>Note Description</label><br> <textarea class="form-control" ng-model="notediscription"> </textarea> </div> <div class="btn-group"> <button class="btn btn-sm btn-default" ng-click="updatenote()"> <i class="fa fa-thumbs-o-up"></i> Update </button> <button class="btn btn-sm btn-default" ng-click="deletenote()"> <i class="fa fa-trash"></i> Remove </button> </div> </div> </div> </div> </div> </div> <div class="col-md-9" ng-init="note = \'note1\'" style="" ng-show="display"> <div class="hpanel"> <div class="panel-body"> <div class="text-center hidden"> We couldn\'t find any notes for you. </div> <div> <div class="" style=""> <div class="pull-right text-muted m-l-lg"></div> <h3>Publishing packages</h3> <label>Note Name</label><br> <input class="form-control" ng-model="newnotename">  <hr> <div class="note-content"> <label>Note Description</label><br> <textarea class="form-control" ng-model="newnotediscription"> </textarea> </div> <div class="btn-group"> <button class="btn btn-sm btn-default" ng-click="submitnote()"> <i class="fa fa-thumbs-o-up"></i> Save </button> </div> </div> </div> </div> </div> </div> </div>'), a.put("views/pages.html", '<!--<div id="header" ng-include="\'views/header.html\'"></div>\r\n<!-- Navigation \r\n<aside id="menu" ng-include="\'views/navigation.html\'"></aside>\r\n<div id="wrapper">--><!--<div class="modal modalnew animated fadeInRight"  id="myModal5" tabindex="-1" role="dialog"  aria-hidden="true">--> <div class="modal-dialog modal-lg"> <div class="modal-content"> <div class="color-line"></div> <div class="panel-body"> <div class="pull-right"> <a ng-click="closemodal()"> <i class="pe-7s-close fa-2x"></i></a> </div> </div> <div class="modal-header"> <h4 class="modal-title">Add New Page<span class="pull-right"></span></h4> </div> <div class="modal-body"> <div class="row"> <button type="button" class="btn btn-primary" ng-click="show=!show">New Page</button><br><br> <div ng-show="show"> <div class="col-md-6"> <div class="form-group required"> <input name="name" type="text" class="form-control" ng-maxlength="50" placeholder="Name of Page" ng-model="pagename" maxlength="20" minlength="3" required> </div> </div> <button type="button" class="btn btn-primary" ng-click="create()">Create</button> </div> <!--<div class="col-md-6">\r\n                                        <div class="form-group required" >\r\n                                            <input name="client_name" type="text" class="form-control" ng-maxlength="50" placeholder="Client Name " required>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class="col-md-6">\r\n                                        <div class="form-group required" >\r\n                                            <input name="date" type="text" class="form-control" ng-maxlength="50" placeholder="DD/MM/YYYY" required>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class="col-md-6">\r\n                                        <div class="form-group required" >\r\n                                            <input name="collebrators" type="text" class="form-control" ng-maxlength="50" placeholder="Multiple Collebrators" required>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class="col-md-3">\r\n                                        <div class="hpanel" style="border:1px dotted #434E6E">\r\n                                            <div class="panel-body">\r\n                                                <div class="text-center">\r\n                                                    <img src="images/portrait.0fa6f2b9.png">\r\n                                                </div>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class="col-md-4">\r\n                                        <div class="hpanel" style="border:1px dotted #434E6E">\r\n                                            <div class="panel-body">\r\n                                                <div class="text-center">\r\n                                                   <img src="images/ladscape.6e30e7b6.png">\r\n                                                </div>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class="col-md-4">\r\n                                        <div class="hpanel hbggreen">\r\n                                            <div class="panel-body">\r\n                                                <div class="text-center">\r\n                                                <br>\r\n                                                    <i class="pe-7s-note fa-4x"></i><br>\r\n                                                    <small>Create Proposal</small>\r\n                                                    <br><br>\r\n                                                </div>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>--> </div> <br><br><br> <div class="row"> <div class="col-md-12"> <strong> Select a Styles from the gallery</strong> <hr> </div> </div> <div class="row"> <div class="col-md-3" style="" ng-repeat="page in sdata" ng-click="updatepage(page)"> <div class="hpanel hnavyblue"> <div class="panel-body"> <div class="text-center"> <i class="pe-7s-config icon-lg"></i><br> <small>{{page.PageName}}</small> </div> </div> </div> </div> <!--<div class="col-md-3" style="">\r\n                                        <div class="hpanel hbgblue">\r\n                                            <div class="panel-body">\r\n                                                <div class="text-center">\r\n                                                    <i class="pe-7s-config icon-lg"></i><br>\r\n                                                    <small>IT Infrastructure and Delivery</small>\r\n                                                </div>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class="col-md-3" style="">\r\n                                        <div class="hpanel hbgyellow">\r\n                                            <div class="panel-body">\r\n                                                <div class="text-center">\r\n                                                    <i class="pe-7s-config icon-lg"></i><br>\r\n                                                    <small>Application Development</small>\r\n                                                </div>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class="col-md-3" style="">\r\n                                        <div class="hpanel hbgred">\r\n                                            <div class="panel-body">\r\n                                                <div class="text-center">\r\n                                                    <i class="pe-7s-config icon-lg"></i><br>\r\n                                                    <small>Hardware/Software License quote</small>\r\n                                                </div>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>--> </div> </div> <!-- <div class="modal-footer">\r\n                                    <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>\r\n                                    <button type="button" class="btn btn-primary">Save changes</button>\r\n                                </div>--> </div> </div> <!--  </div>--> '),
            a.put("views/passwordsetup.html", '<!--<div class="color-line"></div>\r\n\r\n<div class="back-link">\r\n</div>--> <div class="bgimg"> <div class="forgot-container" data-ng-init="init()"> <div class="row"> <div class="col-md-12"> <div class="col-md-6 col-md-offset-3 text-center m-b-md"> <img class="img-responsive" src="images/docubasic_white_logo.73f6b9c2.png"> </div> </div> <div> <uib-alert ng-repeat="alert in alerts" class="display-alert" type="{{alert.type}}" close="closeAlerts($index)" ng-click="closeAlert($index)" id="display-error-home">{{alert.msg}}</uib-alert> <uib-alert ng-repeat="error in errors" class="display-alert" type="{{alert.type}}" close="closeAlerts($index)" ng-click="closeAlert($index)" id="display-error-home">{{error}}</uib-alert> </div> <div class="col-md-12"> <br><br> <h3 class="login-h1 white">Password Setup </h3> </div> <div class="col-md-12"> <div class="hpanel"> <div class="col-sm-12 no-padding"> <div class="forgot_doccolor"> {{tip}} <br> <form name="loginForm" role="form" ng-submit="loginSubmit()"> <br> <div class="form-group required" ng-class="{\'has-error\': loginForm.userphone.$touched && loginForm.userphone.$error.required}"> <div class="inner-addon left-addon"> <i class="glyphicon"><img src="images/icons/user.810c373f.png"></i> <input name="userpassword" id="sender-email" type="password" maxlength="20" minlength="8" placeholder="Password" class="form-control email" ng-model="password" required> </div> </div> <div class="form-group required" ng-class="{\'has-error\': loginForm.userpassword.$touched && loginForm.userpassword.$error.required}"> <div class="inner-addon left-addon"> <i class="glyphicon"><img src="images/icons/user.810c373f.png"></i> <input name="userpassword" type="password" class="form-control" maxlength="20" minlength="8" placeholder="Password" id="user-pass" ng-model="repassword" required> </div> </div> <!--<div>\r\n                                <input type="checkbox" ng-model="remember" ng-init="remember = true">\r\n                                Remember login\r\n                                <p class="help-block small">(if this is a private computer)</p>\r\n                               \r\n                            </div>--> <button class="btn btn-default btn-block h50" type="submit" ng-click="submit()">Submit <img class="loginarrow" src="images/icons/arrow_right.69c7b738.png"></button> <br> </form> </div> </div> </div> </div> </div> </div> </div>'), a.put("views/praposal.html", '<div id="header" ng-include="\'views/header.html\'"></div> <!-- Navigation --> <aside id="menu" ng-include="\'views/navigation.html\'"></aside> <div id="wrapper"> <container-directive></container-directive> <div db-droppable class="proposal-drop-container" id="proposalDropContainer"> <div data-ng-bind-html="htmlString"> </div> </div> <div class="setting"> <div id="container" class="content"> <div class="row"> <div class="col-md-4"> <h3 ng-hide="show">{{praposalname}} <a class="pull-right" ng-click="show=!show" ng-show="isAdmin"><i class="glyphicon glyphicon-pencil"></i></a></h3> </div> <!--<div class = "col-md-2">\r\n                <a class="pull-right" ng-click="show=!show" ng-show="isAdmin"><i class="glyphicon glyphicon-pencil"></i></a>\r\n            </div> --> <div class="col-md-4"> <input name="pname" ng-show="show" id="sender-Tenancy" type="text" placeholder="Praposal Name" class="form-control email" ng-model="pname" required> </div> <div class="col-md-2"> <button class="btn btn-primary" ng-show="show" ng-click="submitname()">Save</button> </div> </div> <div class="row"> <div class="col-md-12"> <div class="col-md-2 no-padding"> <div class="hpanel"> <div class="panel-body no-padding"> <div class="p20 themecolor"> <p>Widgets</p> </div> </div> </div> </div> <style>.p20 i img{width:20px !important;}</style> <div class="col-md-10 no-padding"> <div class="hpanel"> <div class="panel-body no-padding"> <div class="pull-left p20"> <i id="draggable" class="prl15 border-right"><img src="images/widget/text.d62f4b2b.png"></i> <i class="pe-7s-folder fa-2x prl15 border-right" db-draggable data-text="true"></i> <i class="pe-7s-monitor fa-2x prl15 border-right" db-draggable data-square="true"></i> <i class="pe-7s-close-circle fa-2x prl15 border-right" db-draggable data-circle="true"></i> <i class="pe-7s-video fa-2x prl15" db-draggable data-video="true"></i> <i class="pe-7s-video fa-2x prl15" db-draggable data-line="true"></i> <i class="prl15 border-right"><img src="images/widget/shape.7c2630d9.png"></i> <i class="prl15 border-right" db-draggable data-table="true"><img src="images/widget/table.049d80eb.png"></i> <a ng-click="uploadimage()"><i class="prl15 border-right"><img src="images/widget/image.55ef2b73.png"></i></a> <i class="prl15 border-right"><img src="images/widget/video.849a679a.png"></i> <i class="prl15"></i> </div> <div class="pull-right light-blue p20"> <a ng-click="clonepraposal()"><i class="prl15 border-right"><img src="images/widget/copy.0910af3f.png"></i></a> <a ng-click="deletepraposal()"> <i class="prl15 border-right"><img src="images/widget/close.cc3e5159.png"></i></a> <a ng-click="priweviemode()"> <i class="prl15 border-right"><img src="images/widget/search.4b444c95.png"></i></a> <a ng-click="download()"> <i class="prl15 border-right"><img src="images/widget/download.96fad1d1.png"></i></a> <a ng-click="opencollab()"> <i class="prl15 border-right"><img src="images/widget/collab.333096da.png"></i></a> <a ng-click="emailwindow()"> <i class="prl15 border-right"><img src="images/widget/send.efe8b906.png"></i></a> </div> </div> </div> </div> </div> </div> <div class="row"> <div class="col-md-12"> <div class="col-md-2 no-padding"> <div class="hpanel zerobottom" ng-repeat="pagecnt in pagedata"> <div class="panel-body navy-blue text-center"> <a ng-click="sendpage(pagecnt)"> <!--<img alt="logo" class="img-circle img-small" src="images/a1.cfc46f77.jpg">--> <i class="pe-7s-config icon-lg"></i> <div class="m-t-sm"> <strong>{{pagecnt.template_page_name}}</strong> </div> </a> </div> </div> <!--<div class="hpanel zerobottom">\r\n                        <div class="panel-body text-center">\r\n                            <i class="pe-7s-config icon-lg" ></i>\r\n                            <div class="m-t-sm">\r\n                                <strong>Executive Summary</strong>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class="hpanel zerobottom">\r\n                        <div class="panel-body text-center">\r\n                            <i class="pe-7s-config icon-lg" ></i>\r\n                            <div class="m-t-sm">\r\n                                <strong>Pricing</strong>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n\r\n                    <div class="hpanel zerobottom">\r\n                        <div class="panel-body text-center">\r\n                            <i class="pe-7s-config icon-lg" ></i>\r\n                            <div class="m-t-sm">\r\n                                <strong>Terms & Conditions</strong>\r\n                            </div>\r\n                        </div>\r\n                    </div>--> </div> <div class="col-md-10"> <div class="hpanel"> <div class="panel-body" ng-model="ssss" medium-editor bind-options="{\'toolbar\': {\'buttons\': [\'bold\', \'italic\', \'underline\']}}" id="droppable" style="border:2px solid #696969; padding:20px; margin:10px; height:800px"> <div class="pull-right"> <img src="../images/chat.png"> </div> <!--<h2 class="m-t-none border-all p20 text-center">You just created a new Proposal </h2>\r\n                            <p class="border-all p20 text-center">\r\n                                <br><br><br>\r\n                                Customize your page as you would like by dragging and dropping<br> thewidgets from the widgets panel above\r\n                                <br><br><br>\r\n                            </p>--> <br><br><br><br><br><br><br> </div> </div> <button class="btn btn-primary" ng-click="submitpage()">Save</button> <!--<button class="btn btn-primary" ng-click="updatepage()" >update</button>--> <div style="height:0;width:900px;border:0;border-bottom:3px;border-style: solid;border-color: #000000"></div> </div> </div> </div> <ng-bind-html ng-bind-html="ssss"></ng-bind-html> <div class="row projects"> <div class="col-lg-12"> <div class="pull-right"> <img src="../images/floating.png"> </div> </div> </div> </div> </div> </div> '), a.put("views/preview.html", '<!-- <div id="header" ng-include="\'views/header.html\'"></div>\r\n<!-- Navigation \r\n<aside id="menu" ng-include="\'views/navigation.html\'"></aside>\r\n<div id="wrapper">\r\n\r\n\r\n<div id="container" >\r\n\r\n\r\n            <div class="row" >\r\n                  <div class = "col-md-6">\r\n                <h3 ng-hide="show">{{templatename}}</h3><a  ng-click="show=!show" ng-show="isAdmin"><i class="glyphicon glyphicon-pencil"></i></a> <span class="pull-right"> <input name="pname" ng-show="show" id="sender-Tenancy" type="text" placeholder="Praposal Name" class="form-control email" ng-model="pname" required></span>\r\n          \r\n           \r\n                 \r\n            \r\n            </div>\r\n   \r\n        \r\n        \r\n        <!--<div class="row">\r\n        \r\n        <div class="col-md-12">\r\n            <div class="col-md-2 no-padding">\r\n                <div class="hpanel">\r\n                    <div class="panel-body no-padding">\r\n                         <div class="p20 themecolor">\r\n                         <p>Widgets</p>\r\n                         </div>\r\n                    </div>\r\n                </div>\r\n             </div>\r\n            \r\n            <div class="col-md-10 no-padding">\r\n                <div class="hpanel">\r\n                    <div class="panel-body no-padding">\r\n                        <div class="pull-left p20">\r\n                            <i id="draggable" class="pe-7s-upload fa-2x prl15 border-right"></i>\r\n                            <i class="pe-7s-unlock fa-2x prl15 border-right"></i>\r\n                            <i class="pe-7s-umbrella fa-2x prl15 border-right"></i>\r\n                            <i class="pe-7s-trash fa-2x prl15 border-right"></i>\r\n                            <i class="pe-7s-tools fa-2x prl15 border-right"></i>\r\n                            <i class="pe-7s-speaker fa-2x prl15"></i>\r\n                        </div>\r\n                        <div class="pull-right light-blue p20">\r\n                            <i class="pe-7s-upload fa-2x prl15 border-right"></i>\r\n                            <i class="pe-7s-unlock fa-2x prl15 border-right"></i>\r\n                            <i class="pe-7s-umbrella fa-2x prl15 border-right"></i>\r\n                            <i class="pe-7s-trash fa-2x prl15 border-right"></i>\r\n                            <i class="pe-7s-tools fa-2x prl15 border-right"></i>\r\n                            <i class="pe-7s-speaker fa-2x prl15"></i>\r\n                        </div>\r\n                    </div>  \r\n                </div>\r\n            </div>\r\n            </div>\r\n        </div>--> <h3>{{praposalname}}(Preview Mode)</h3> <div class="row"> <div class="col-md-12"> <div class="col-md-2 no-padding"> <div class="hpanel zerobottom" ng-repeat="pagecnt in pagedata"> <div class="panel-body navy-blue text-center"> <a ng-click="sendpage(pagecnt)"> <img alt="logo" class="img-circle img-small" src="images/a1.cfc46f77.jpg"> <i class="pe-7s-config icon-lg"></i> <div class="m-t-sm"> <strong>{{pagecnt.PageName}}</strong> </div> </a> </div> </div> <!--<div class="hpanel zerobottom">\r\n                            <div class="panel-body text-center">\r\n                                <i class="pe-7s-config icon-lg" ></i>\r\n                                <div class="m-t-sm">\r\n                                    <strong>Executive Summary</strong>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n\r\n                         <div class="hpanel zerobottom">\r\n                            <div class="panel-body text-center">\r\n                                <i class="pe-7s-config icon-lg" ></i>\r\n                                <div class="m-t-sm">\r\n                                    <strong>Pricing</strong>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        \r\n                        <div class="hpanel zerobottom">\r\n                            <div class="panel-body text-center">\r\n                                <i class="pe-7s-config icon-lg" ></i>\r\n                                <div class="m-t-sm">\r\n                                    <strong>Terms & Conditions</strong>\r\n                                </div>\r\n                            </div>\r\n                        </div>--> </div> <div class="col-md-10"> <div class="hpanel"> <div class="panel-body" ng-model="ssss" medium-editor id="droppable" style="border:2px solid #696969; padding:20px; margin:10px; height:800px" data-disable-editing="true"> <div class="pull-right"> <img src="../images/chat.png"> </div> <!--<h2 class="m-t-none border-all p20 text-center">You just created a new Proposal </h2>\r\n                        <p class="border-all p20 text-center">\r\n                        <br><br><br>\r\n                           Customize your page as you would like by dragging and dropping<br> thewidgets from the widgets panel above\r\n                           <br><br><br>\r\n                        </p>--> <br><br><br><br><br><br><br> </div> </div> <!--<button class="btn btn-primary" ng-click="submitpage()">Save</button>\r\n<!--<button class="btn btn-primary" ng-click="updatepage()" >update</button>--> </div> </div> </div> <div class="row projects"> <div class="col-lg-12"> <div class="pull-right"> <img src="../images/floating.png"> </div> </div> </div>  '), a.put("views/price.html", '<!--<div id="header" ng-include="\'views/header.html\'"></div>\r\n\r\n<!-- Navigation \r\n<aside id="menu" ng-include="\'views/navigation.html\'"></aside>\r\n<div id="wrapper">--> <div class="modal-dialog modal-lg"> <div class="normalheader transition animated fadeIn"> <div class="hpanel"> <div class="panel-body"> <div class="pull-right"> <a ng-click="closemodal()"> <i class="pe-7s-close fa-2x"></i></a> </div> </div> <div class="panel-body"> <div class="pull-right m-t-lg" id="hbreadcrumb"> <ol class="hbreadcrumb breadcrumb"> <li><a ng-href="#/main">Dashboard</a></li> <li class="active"> <span>Pricing</span> </li> </ol> </div> <h2 class="font-light m-b-xs"> Pricing </h2> <small></small> </div> </div> </div> <div class="setting"> <uib-alert ng-repeat="alert in alerts" class="display-alert" type="{{alert.type}}" close="closeAlerts($index)" ng-click="closeAlerts($index)" id="display-error-home">{{alert.msg}}</uib-alert> <uib-alert ng-repeat="error in errors" class="display-alert" type="{{alert.type}}" close="closeAlert($index)" ng-click="closeAlert($index)" id="display-error-home">{{error}}</uib-alert> <div class="content" animate-panel effect="zoomIn"> <div class="row"> <div class="col-lg-12"> <div class="hpanel"> <div class="panel-body"> <div class="pull-right"> <a id="top"></a> <button class="btn btn-primary" ng-model="collapsed" ng-click="pricesection()" ng-hide="pricesectionshow">New Price</button> <button class="btn btn-primary" ng-model="collapsed1" ng-click="discontsection()" ng-hide="collapsed1">New Discount</button> <button class="btn btn-primary" ng-model="collapsed2" ng-click="taxsection()" ng-hide="collapsed2">New Tax</button> </div> <br> <div class="takadd" ng-show="pricesectionshow"><br><br> <form name="priceForm"> <h3 class="font-light m-b-xs" ng-hide="updateprice"> Add Price Block </h3><br> <h3 class="font-light m-b-xs" ng-show="updateprice"> Update Price Block </h3><br> <div class="row"> <div class="col-md-4"> <div class="form-group required" ng-class="{\'has-error\': priceForm.Taskcategory.$touched && priceForm.Taskcategory.$error.required}"> <label class="control-label">Product/Service name</label><br> <input name="Taskcategory" type="text" class="form-control" placeholder="Product/Service name" id="user-pass" ng-model="productname" required> </div> </div> <div class="col-md-2"> <div class="form-group required" ng-class="{\'has-error\': priceForm.skid.$touched && priceForm.skid.$error.required}"> <label class="control-label">SKU</label><br> <input name="skid" type="text" class="form-control" placeholder="SKU" id="user-pass" ng-model="skuid" required> </div> </div> <div class="col-md-2"> <div class="form-group required" ng-class="{\'has-error\': priceForm.quntaty.$touched && priceForm.quntaty.$error.required}"> <label class="control-label">Quantity</label><br> <input name="quntaty" type="number" class="form-control" placeholder="Quantity" id="user-pass" ng-model="quantity" ng-blur="mulall(quantity,unitcost,unitprice)" ng-pattern="/^[0-9]+(\\.[0-9]{1,2})?$/" required> <span class="help-block" ng-show="priceForm.quntaty.$touched && priceForm.quntaty.$invalid">Invalid</span> </div> </div> <div class="col-md-2"> <div class="form-group required" ng-class="{\'has-error\': priceForm.ucost.$touched && priceForm.ucost.$error.required}"> <label class="control-label">Unit Cost</label><br> <input name="ucost" type="number" class="form-control" placeholder="Unit Cost" id="user-pass" ng-model="unitcost" required ng-blur="mul(quantity,unitcost)" ng-pattern="/^[0-9]+(\\.[0-9]{1,2})?$/"> <span class="help-block" ng-show="priceForm.ucost.$touched && priceForm.ucost.$invalid">Invalid</span> </div> </div> <div class="col-md-2"> <div class="form-group required" ng-class="{\'has-error\': priceForm.uprice.$touched && priceForm.uprice.$error.required}"> <label class="control-label">Unit Price</label><br> <input name="uprice" type="number" class="form-control" placeholder="Unit Price" id="user-pass" ng-model="unitprice" required ng-blur="mul1(quantity,unitprice)" ng-pattern="/^[0-9]+(\\.[0-9]{1,2})?$/"> <span class="help-block" ng-show="priceForm.uprice.$touched && priceForm.uprice.$invalid">Invalid</span> </div> </div> </div> <div class="row"> <div class="col-md-3"> <label class="control-label">Currency</label><br> <div class="dropdown"> <select class="form-control dropdown-toggle" type="button" data-toggle="dropdown" ng-options="money.currencyid as money.currencyName for money in currancys" ng-model="moneys"> Select</select> </div> </div> <div class="col-md-3"><label class="control-label">Source</label><br> <div class="dropdown"> <select class="form-control dropdown-toggle" type="button" data-toggle="dropdown" ng-model="source" ng-options="s.id as s.type for s in sources"> </select> </div> </div> <div class="col-md-2" ng-show="source == \'2\'"><label class="control-label">Vendors</label><br> <div class="dropdown"> <select class="form-control dropdown-toggle" type="button" data-toggle="dropdown" ng-model="vendors" ng-options="vd.vendor_id as vd.displayname for vd in vendorsdata "> select</select> </div> </div> <div class="col-md-2"> <div class="form-group required" ng-class="{\'has-error\': priceForm.uprice.$touched && priceForm.uprice.$error.required}"> <!--<input name="uprice" type="text" class="form-control" placeholder="Total Price" id="user-pass" ng-model="totalprice" required>--> <label class="control-label">Total Cost</label><br> <label class="control-label" ng-if="unitprice && unitcost">{{totalcost| number: 2}}</label> </div> </div> <div class="col-md-2"> <div class="form-group required" ng-class="{\'has-error\': priceForm.uprice.$touched && priceForm.uprice.$error.required}"> <!--<input name="uprice" type="text" class="form-control" placeholder="Total Cost" id="user-pass" ng-model="totalcost" required>--> <label class="control-label">Total Price</label><br> <label class="control-label" ng-if="unitcost && unitprice">{{totalprice| number: 2}}</label> </div> </div> </div> <div class="row"><br> <div class="col-md-10"> <label class="control-label">Price detailed summary</label><br> <textarea class="form-control" rows="5" id="comment" placeholder="Price detailed summary" ng-model="discriptions"></textarea> </div> </div><br> </form> <div class="row"> <div class="col-md-12"> <button class="btn btn-primary" ng-click="submitdata()" ng-disabled="priceForm.$invalid" ng-hide="updateprice">Save</button> <button class="btn btn-primary" ng-click="updatepriceblock()" ng-show="updateprice">Update</button> <button class="btn btn-primary" ng-click="closeprice()">Cancel</button> </div> </div> </div> <div class="discount" ng-show="collapsed1"><br><br> <form name="discountForm"> <h3 class="font-light m-b-xs" ng-hide="dupdate"> Add Discount Block </h3><br> <h3 class="font-light m-b-xs" ng-show="dupdate"> Update Discount Block </h3><br> <div class="row"> <div class="col-md-3"> <div class="form-group required" ng-class="{\'has-error\': discountForm.distname.$touched && discountForm.distname.$error.required}"> <label class="control-label">Discount Name</label><br> <input name="distname" type="text" class="form-control" placeholder="Discount Name" id="user-pass" ng-model="discountname" required> </div> </div> <div class="col-md-3"><label class="control-label">Discount Type </label> <div class="dropdown"> <select class="form-control dropdown-toggle" type="button" data-toggle="dropdown" ng-model="distype" ng-options="types.id as types.type for types in dbased"> <p>Select</p></select> </div> </div> <div class="col-md-3"> <div class="form-group required" ng-class="{\'has-error\': discountForm.val.$touched && discountForm.val.$error.required}"> <label class="control-label">Amount</label><br> <input name="val" type="number" class="form-control" placeholder="Amount/Percentage" id="user-pass" ng-model="value" ng-pattern="/^[0-9]+(\\.[0-9]{1,2})?$/" required> <span class="help-block" ng-show="discountForm.val.$touched && discountForm.val.$invalid">Invalid</span> </div> </div> </div> <div class="row"> <div class="col-md-6"> <button class="btn btn-primary" ng-click="adddiscount()" ng-disabled="discountForm.$invalid" ng-hide="dupdate">Save</button> <button class="btn btn-primary" ng-click="updatediscount()" ng-show="dupdate">Update</button> <button class="btn btn-primary" ng-click="closediscount()">Cancel</button> </div> </div> </form> </div> <div class="discount" ng-show="collapsed2"><br><br> <form name="taxForm"> <h3 class="font-light m-b-xs" ng-hide="tupdate"> Add Tax Block </h3><br> <h3 class="font-light m-b-xs" ng-show="tupdate"> Update Tax Block </h3><br> <div class="row"> <div class="col-md-4"> <div class="form-group required" ng-class="{\'has-error\': taxForm.Txname.$touched && taxForm.Txname.$error.required}"> <label class="control-label">Tax Name</label><br> <input name="Txname" type="text" class="form-control" placeholder="Tax Name" id="user-pass" ng-model="taxname" required> </div> </div> <div class="col-md-4"> <div class="form-group required" ng-class="{\'has-error\': taxForm.txPercentage.$touched && taxForm.txPercentage.$error.required}"> <label class="control-label">Percentage</label><br> <input name="txPercentage" type="number" class="form-control" placeholder="Percentage" id="user-pass" ng-model="taxPercentage" ng-pattern="/^[0-9]+(\\.[0-9]{1,2})?$/" required> <span class="help-block" ng-show="taxForm.txPercentage.$touched && taxForm.txPercentage.$invalid">Invalid</span> </div> </div> </div> <div class="row"> <div class="col-md-12"> <button class="btn btn-primary" ng-click="addtax()" ng-disabled="taxForm.$invalid" ng-hide="tupdate">Save</button> <button class="btn btn-primary" ng-click="updatetax()" ng-show="tupdate">Update</button> <button class="btn btn-primary" ng-click="closetax()">Cancel</button> </div> </div> </form> </div> </div> <br><br> <div class="panel-body pn"> <h2>Price Block</h2><br> <table datatable="ng" class="table table-striped table-bordered table-hover"> <thead> <tr> <th>Name</th> <th>Quantity</th> <th>Total Cost</th> <th>Created by</th> <th>Action</th> </tr> </thead> <tbody> <tr ng-repeat="info in pricealldata"> <td>{{info.productname}}</td> <td>{{info.quantity}}</td> <td>{{info.totalprice}}</td> <td> {{info.email}}<br> {{info.created_time}}</td> <td><a href="" title="Delete Category" ng-click="getdata(info)" class="btn"><i class="glyphicon glyphicon-pencil"></i></a> <a href="" title="Delete" ng-click="deleteprice(info)" class="btn"><i class="glyphicon glyphicon-trash"></i></a></td> </tr> </tbody> </table> </div><br> <hr> <div class="panel-body pn"> <h2>Discount Block</h2><br> <table datatable="ng" class="table table-striped table-bordered table-hover"> <thead> <tr> <th>Name</th> <th>Type</th> <th>Amount/Percentage</th> <th>Created by</th> <th>Action</th> </tr> </thead> <tbody> <tr ng-repeat="detail in discountblock"> <td>{{detail.discountname}}</td> <td ng-if="detail.type ==1">Amount</td> <td ng-if="detail.type ==2">Percentage</td> <td>{{detail.value}}</td> <td>{{detail.email}}<br> {{detail.created_time}}</td> <td><a href="" title="Delete Category" ng-click="discountdata(detail)" class="btn"><i class="glyphicon glyphicon-pencil"></i></a> <a href="" title="Delete" ng-click="deletediscount(detail)" class="btn"><i class="glyphicon glyphicon-trash"></i></a></td> </tr> </tbody> </table> </div><br> <hr> <div class="panel-body pn"> <h2>Tax Block</h2><br> <table datatable="ng" class="table table-striped table-bordered table-hover"> <thead> <tr> <th>Name</th> <th>Percentage</th> <th>Created by</th> <th>Action</th> </tr> </thead> <tbody> <tr ng-repeat="detail in taxblock"> <td>{{detail.taxname}}</td> <td>{{detail.percentage}}</td> <td>{{detail.email}}<br> {{detail.created_time}}</td> <td><a href="" title="Delete Category" ng-click="updatetaxdata(detail)" class="btn"><i class="glyphicon glyphicon-pencil"></i></a> <a href="" title="Delete" ng-click="deletetax(detail)" class="btn"><i class="glyphicon glyphicon-trash"></i></a></td> </tr> </tbody> </table> </div> </div> </div> </div> </div> </div></div>'), a.put("views/projecttask.html", '<div class="modal-dialog modal-lg animated fadeInRight in"> <div class="normalheader transition animated fadeIn"> <div class="hpanel"> <div class="panel-body"> <div class="pull-right"> <a ng-click="closemodal()"> <i class="pe-7s-close fa-2x"></i></a> </div> </div> <div class="panel-body"> <div class="pull-right m-t-lg" id="hbreadcrumb"> <ol class="hbreadcrumb breadcrumb"> <li><a href="index.html">Dashboard</a></li> <li class="active"> <span>Project Task</span> </li> </ol> </div> <h2 class="font-light m-b-xs"> Project Task </h2> <small></small> </div> </div> </div> <div class="setting"> <uib-alert ng-repeat="alert in alerts" class="display-alert" type="{{alert.type}}" close="closeAlerts($index)" ng-click="closeAlerts($index)" id="display-error-home">{{alert.msg}}</uib-alert> <uib-alert ng-repeat="error in errors" class="display-alert" type="{{alert.type}}" close="closeAlert($index)" ng-click="closeAlert($index)" id="display-error-home">{{error}}</uib-alert> <div class="content animate-panel" effect="zoomIn"> <div class="row"> <div class="col-lg-12"> <div class="hpanel"> <div class="panel-body"> <button class="btn btn-primary pull-right" ng-model="collapsed" ng-click="projecttasksection()" ng-hide="collapsed">Add New</button> <div class="takadd" ng-show="collapsed"> <form name="projecttaskform"> <h3 class="font-light m-b-xs" ng-hide="update"> Add Project Task </h3> <h3 class="font-light m-b-xs" ng-show="update"> Update Project Task </h3> <div class="row"> <br> <div class="col-md-6"> <label class="control-label">Task Category </label><br> <div class="dropdown"> <select class="form-control dropdown-toggle" type="button" data-toggle="dropdown" ng-model="category" ng-options="taskp.id as taskp.categoryname for taskp in tasks  "> <p>Select</p> </select> </div> </div> <div class="col-md-6"> <div class="form-group required" ng-class="{\'has-error\':projecttaskform.taskdsp.$touched && projecttaskform.taskdsp.$invalid}"> <label class="control-label">Task Description</label><br> <input name="taskdsp" type="text" class="form-control" ng-maxlength="50" placeholder="One Line Task Description " id="user-pass" ng-model="discription" required> <p ng-show="etuser.username.$error.maxlength" class="denger">Description is too long.</p> </div> </div> </div> <div class="row"> <div class="col-md-3"> <label class="control-label">Man Days </label><br> <input name="Task category" type="number" class="form-control" placeholder="Man Days" id="user-pass" ng-model="mandays" required> </div> <div class="col-md-3"><label class="control-label">Resource Type</label><br> <div class="dropdown"> <select class="form-control dropdown-toggle" type="button" data-toggle="dropdown" ng-model="source" ng-options="money.id as money.type for money in sources"> <p>Select</p></select> </div> </div> <div class="col-md-3" ng-show="source == \'2\'"> <label class="control-label">Vendors</label><br> <div class="dropdown"> <select class="form-control dropdown-toggle" type="button" data-toggle="dropdown" ng-model="vendors" ng-options="money.vendor_id  as money.displayname for money in vendorsdata"> <span class="caret"></span></select> </div> </div> <div class="col-md-3"> <div class="form-group" ng-class="{\'has-error\':projecttaskform.dcost.$touched && projecttaskform.dcost.$invalid}"> <label class="control-label">Daily Cost</label><br> <input type="number" name="dcost" class="form-control" placeholder="Daily Cost" id="user-pass" ng-model="dailycost" ng-pattern="/^[0-9]+(\\.[0-9]{1,2})?$/" required> <span class="help-block" ng-show="projecttaskform.dcost.$touched && projecttaskform.dcost.$invalid">Invalid</span> </div> </div> <div class="col-md-3"> <div class="form-group" ng-class="{\'has-error\':projecttaskform.tcost.$touched && projecttaskform.tcost.$invalid}"> <label class="control-label">Total cost</label><br> <input name="tcost" type="number" class="form-control" placeholder="Total cost" id="user-pass" ng-model="totalcost" ng-pattern="/^[0-9]+(\\.[0-9]{1,2})?$/" required> <p class="help-block" ng-show="projecttaskform.tcost.$touched && projecttaskform.tcost.$invalid">Invalid</p> </div> </div> </div> <div class="row"> <div class="col-md-6"> <div class="form-group" ng-class="{\'has-error\':projecttaskform.drate.$touched && projecttaskform.drate.$invalid}"> <label class="control-label">Daily Rate</label><br> <input name="drate" type="number" class="form-control" placeholder="Daily Rate" id="user-pass" ng-model="dailyrate" ng-pattern="/^[0-9]+(\\.[0-9]{1,2})?$/" required> <p ng-show="projecttaskform.drate.$touched && projecttaskform.drate.$invalid">Invalid</p> </div> </div> <div class="col-md-6"> <div class="form-group" ng-class="{\'has-error\':projecttaskform.trate.$touched && projecttaskform.trate.$invalid}"> <label class="control-label"> Total Price</label><br> <input name="trate" type="number" class="form-control" placeholder=" Total Price" id="user-pass" ng-model="totalrate" ng-pattern="/^[0-9]+(\\.[0-9]{1,2})?$/" required> <p ng-show="projecttaskform.trate.$touched && projecttaskform.trate.$invalid">Invalid</p> </div> </div> </div> <div class="row"> <div class="col-md-12"> <label class="control-label">Price Detailed Summary</label><br> <textarea class="form-control" rows="5" maxlenght="255" id="comment" placeholder="Price detailed summary" ng-model="taskdetail"></textarea> </div> </div><br> <div class="row"> <div class="col-md-8"> <button class="btn btn-primary" ng-click="submitprojecttask()" ng-hide="update" ng-disabled="projecttaskform.$invalid">Save</button> <button class="btn btn-primary" ng-click="updateprojecttaskdata()" ng-show="update">Update</button> <button class="btn btn-primary" ng-click="closeprojecttask()">Cancel</button> </div> </div></form> </div> </div> </div> <br><br> <div class="panel-body pn"> <table datatable="ng" class="table table-striped table-bordered table-hover"> <thead> <tr> <th>Name</th> <th>Man days</th> <th>Total Cost</th> <th>Created by</th> <th>Action</th> </tr> </thead> <tbody> <tr ng-repeat="detail in projecttask"> <td>{{detail.taskshortdesc}}</td> <td>{{detail.mandays}}</td> <td>{{detail.totalcost}}</td> <td>{{detail.email}}<br> {{detail.created_time}}</td> <td><a href="" title="Update" ng-click="updateprojecttask(detail)" class="btn"><i class="glyphicon glyphicon-pencil"></i></a> <a href="" title="Delete" ng-click="deleteprojecttask(detail)" class="btn"><i class="glyphicon glyphicon-trash"></i></a></td> </tr> </tbody> </table> </div> </div> </div> </div> </div></div>'),
            a.put("views/projecttask_old.html", '<div id="header" ng-include="\'views/header.html\'"></div> <!-- Navigation --> <aside id="menu" ng-include="\'views/navigation.html\'"></aside> <div id="wrapper"> <div class="normalheader transition animated fadeIn"> <div class="hpanel"> <div class="panel-body"> <div class="pull-right m-t-lg" id="hbreadcrumb"> <ol class="hbreadcrumb breadcrumb"> <li><a ng-href="#/main">Dashboard</a></li> <li class="active"> <span>Project Task</span> </li> </ol> </div> <h2 class="font-light m-b-xs"> Project Task </h2> <small></small> </div> </div> </div> <div class="setting"> <uib-alert ng-repeat="alert in alerts" class="display-alert" type="{{alert.type}}" close="closeAlerts($index)" ng-click="closeAlerts($index)" id="display-error-home">{{alert.msg}}</uib-alert> <uib-alert ng-repeat="error in errors" class="display-alert" type="{{alert.type}}" close="closeAlert($index)" ng-click="closeAlert($index)" id="display-error-home">{{error}}</uib-alert> <div class="content animate-panel" effect="zoomIn"> <div class="row"> <div class="col-lg-12"> <div class="hpanel"> <div class="panel-body"> <button class="btn btn-primary pull-right" ng-model="collapsed" ng-click="projecttasksection()">New Task</button> <div class="takadd" ng-show="collapsed"> <div class="row"> <br><br> <div class="col-md-4"> <div class="dropdown"> <select class="form-control dropdown-toggle" type="button" data-toggle="dropdown" ng-model="category" ng-options="taskp.id as taskp.categoryname for taskp in tasks  "> <p>Select</p> </select> </div> </div> <div class="col-md-4"> <input name="Task category" type="text" class="form-control" placeholder="One Line Task Discription " id="user-pass" ng-model="discription" required> </div> </div> <br> <div class="row"> <div class="col-md-2"> <input name="Task category" type="text" class="form-control" placeholder="Man Days" id="user-pass" ng-model="mandays" required> </div> <div class="col-md-2"> <div class="dropdown"> <select class="form-control dropdown-toggle" type="button" data-toggle="dropdown" ng-model="source" ng-options="money.id as money.type for money in sources"> <p>Select</p></select> </div> </div> <div class="col-md-2" ng-show="source == \'2\'"><p>Vendors:</p> <div class="dropdown"> <select class="form-control dropdown-toggle" type="button" data-toggle="dropdown" ng-model="vendors" ng-options="money.vendor_id  as money.displayname for money in vendorsdata"> <span class="caret"></span></select> </div> </div> <div class="col-md-2"> <input name="Task category" type="text" class="form-control" placeholder="Daily Cost" id="user-pass" ng-model="dailycost" required> </div> <div class="col-md-2"> <input name="Task category" type="text" class="form-control" placeholder="Total cost" id="user-pass" ng-model="totalcost" required> </div> </div><br> <div class="row"> <div class="col-md-4"> <input name="Task category" type="text" class="form-control" placeholder="Daily Rate" id="user-pass" ng-model="dailyrate" required> </div> <div class="col-md-4"> <input name="Task category" type="text" class="form-control" placeholder="Total Rate" id="user-pass" ng-model="totalrate" required> </div> </div><br> <div class="row"> <div class="col-md-8"> <textarea class="form-control" rows="5" id="comment" placeholder="Price detailed summary" ng-model="taskdetail"></textarea> </div> </div><br> <div class="row"> <div class="col-md-8"> <button class="btn btn-primary" ng-click="submitprojecttask()" ng-hide="update">save</button> <button class="btn btn-primary" ng-click="updateprojecttaskdata()" ng-show="update">Update</button> <button class="btn btn-primary" ng-click="closeprojecttask()">Close</button> </div> </div> </div> </div> <br><br> <div class="panel-body pn"> <table datatable="ng" class="table table-striped table-bordered table-hover"> <thead> <tr> <th>Name</th> <th>Mandays</th> <th>Total Cost</th> <th>Description</th> <th>Action</th> </tr> </thead> <tbody> <tr ng-repeat="detail in projecttask"> <td>{{detail.taskshortdesc}}</td> <td>{{detail.mandays}}</td> <td>{{detail.totalcost}}</td> <td>{{detail.description}}</td> <td><a href="" title="Update" ng-click="updateprojecttask(detail)" class="btn"><i class="glyphicon glyphicon-pencil"></i></a> <a href="" title="Delete" ng-click="deleteprojecttask(detail)" class="btn"><i class="glyphicon glyphicon-trash"></i></a></td> </tr> </tbody> </table> </div> </div> </div> </div> </div></div></div>'), a.put("views/proposal-summery.html", '<div id="header" ng-include="\'views/header.html\'"></div> <!-- Navigation --> <aside id="menu" ng-include="\'views/navigation.html\'"></aside> <div id="wrapper"> <div class="content animate-panel"> <div class="row"> <div class="col-lg-12"> <h3>Proposal Summary View</h3> <br> <button class="btn w-xs btn-primary" type="button" ng-click="allpraposal()">All</button> <button class="btn w-xs btn-success" type="button" ng-click="open()">Open</button> <button class="btn w-xs btn-primary" type="button" ng-click="underreview()">Under Review</button> <button class="btn w-xs btn-primary" type="button" ng-click="closed()">Closed</button> <br> <br> </div> <div class="col-lg-12"> <button class="btn btn-primary pull-right" ng-click="createpraposal()">New Praposal</button> </div> </div> <br> <div class="row"> <div class="col-lg-6" ng-show="praposalall" ng-repeat="detail in praposaldata"> <div class="hpanel" ng-repeat="info in praposalactivitydata"> <div class="panel-body"> <div class="row projects"> <div class="col-sm-12"> <h4><a href="#">{{detail.name}}</a></h4> <div class="well well-lg"> <p>{{info[0].created_at}}</p> <br><small>{{info[0].proposal_activity}}</small> </div> </div> <div class="col-sm-8" style="border-right:1px dashed #7384b6"> <div class="row"> <div class="col-sm-4"> <div class="project-label">CLIENT</div> <small>Acme & Co.</small> </div> <div class="col-sm-4"> <div class="project-label">VERSION</div> <small>1.0.4</small> </div> <div class="col-sm-4"> <div class="project-label">DEDLINE</div> <small>{{detail.delivery_date}}</small> </div> <div class="col-sm-12"> <h2 class="text-info"> ${{detail.cost}}</h2> </div> <div class="col-sm-12"> <br> <div class="project-people"> <p>{{detail[1].collaborator.first_name}}</p> <!--<img src="images/a1.cfc46f77.jpg" class="img-circle" alt="logo">\r\n                                            <img src="images/a2.7e977710.jpg" class="img-circle" alt="logo">\r\n                                            <img src="images/a3.0672b108.jpg" class="img-circle" alt="logo">\r\n                                            <img src="images/a4.0c52e074.jpg" class="img-circle" alt="logo">\r\n                                            <img src="images/a5.b602d90a.jpg" class="img-circle" alt="logo">\r\n                                            <img src="images/a6.b896f15f.jpg" class="img-circle" alt="logo">\r\n                                            <img src="images/a7.9547bc6a.jpg" class="img-circle" alt="logo">\r\n                                            <img src="images/a8.6eb90892.jpg" class="img-circle" alt="logo">--> </div><br><br> </div> </div> </div> <div class="col-sm-4"> <div class="row"> <div class="col-sm-12"> <div class="project-label">Status</div> <small>Open <br>{{detail.status}}</small> <br><br> </div> <div class="col-sm-12"> <div class="project-value" style="border-top:1px dashed #7384b6"> <h2 class="text-info">79%</h2> <div class="project-label">PROGRESS</div> <div class="progress m-t-xs full progress-small"> <div class="progress-bar progress-bar-info" style="width: 79%" aria-valuemax="100" aria-valuemin="0" aria-valuenow="43" role="progressbar"> </div> </div> </div> </div> </div> </div> </div> </div> <div class="panel-footer"> <div class="row"> <div class="col-sm-12"> <a ng-click="clonepraposal()"><i class="prl15 border-right"><img src="images/widget/summery/copy.png"></i></a> <a ng-click="deletepraposal()"><i class="prl15 border-right"><img src="images/widget/summery/close.png"></i></a> <a ng-click="priweviemode()"><i class="prl15 border-right"><img src="images/widget/summery/search.png"></i></a> <a ng-click="download()"><i class="prl15 border-right"><img src="images/widget/summery/download.png"></i></a> <a ng-click="opencollab()"><i class="prl15 border-right"><img src="images/widget/summery/pagesend.png"></i></a> <a ng-click="emailwindow()"><i class="prl15 border-right"><img src="images/widget/summery/send.png"></i></a> <!--<i class="pe-7s-ribbon fa-2x prl15"></i>--> </div> </div> </div> </div> </div> <div class="col-lg-6" ng-show="openpraposal" ng-repeat="detail in praposaldata | filter: { proposal_status: \'1\' }"> <div class="hpanel" ng-repeat="info in praposalactivitydata"> <div class="panel-body"> <div class="row projects"> <div class="col-sm-12"> <h4><a href="#">{{detail.name}}</a></h4> <div class="well well-lg"> <p>{{info[0].created_at}}</p> <br><small>{{info[0].proposal_activity}}</small> </div> </div> <div class="col-sm-8" style="border-right:1px dashed #7384b6"> <div class="row"> <div class="col-sm-4"> <div class="project-label">CLIENT</div> <small>Acme & Co.</small> </div> <div class="col-sm-4"> <div class="project-label">VERSION</div> <small>1.0.4</small> </div> <div class="col-sm-4"> <div class="project-label">DEDLINE</div> <small>{{detail.delivery_date}}</small> </div> <div class="col-sm-12"> <h2 class="text-info"> ${{detail.cost}}</h2> </div> <div class="col-sm-12"> <br> <div class="project-people"> <p>{{detail[1].collaborator.first_name}}</p> <!--<img src="images/a1.cfc46f77.jpg" class="img-circle" alt="logo">\r\n                                            <img src="images/a2.7e977710.jpg" class="img-circle" alt="logo">\r\n                                            <img src="images/a3.0672b108.jpg" class="img-circle" alt="logo">\r\n                                            <img src="images/a4.0c52e074.jpg" class="img-circle" alt="logo">\r\n                                            <img src="images/a5.b602d90a.jpg" class="img-circle" alt="logo">\r\n                                            <img src="images/a6.b896f15f.jpg" class="img-circle" alt="logo">\r\n                                            <img src="images/a7.9547bc6a.jpg" class="img-circle" alt="logo">\r\n                                            <img src="images/a8.6eb90892.jpg" class="img-circle" alt="logo">--> </div><br><br> </div> </div> </div> <div class="col-sm-4"> <div class="row"> <div class="col-sm-12"> <div class="project-label">Status</div> <small>Open <br>{{detail.status}}</small> <br><br> </div> <div class="col-sm-12"> <div class="project-value" style="border-top:1px dashed #7384b6"> <h2 class="text-info">79%</h2> <div class="project-label">PROGRESS</div> <div class="progress m-t-xs full progress-small"> <div class="progress-bar progress-bar-info" style="width: 79%" aria-valuemax="100" aria-valuemin="0" aria-valuenow="43" role="progressbar"> </div> </div> </div> </div> </div> </div> </div> </div> <div class="panel-footer"> <div class="row"> <div class="col-sm-12"> <a ng-click="clonepraposal()"><i class="prl15 border-right"><img src="images/widget/summery/copy.png"></i></a> <a ng-click="deletepraposal()"><i class="prl15 border-right"><img src="images/widget/summery/close.png"></i></a> <a ng-click="priweviemode()"><i class="prl15 border-right"><img src="images/widget/summery/search.png"></i></a> <a ng-click="download()"><i class="prl15 border-right"><img src="images/widget/summery/download.png"></i></a> <a ng-click="opencollab()"><i class="prl15 border-right"><img src="images/widget/summery/pagesend.png"></i></a> <a ng-click="emailwindow()"><i class="prl15 border-right"><img src="images/widget/summery/send.png"></i></a> <!--<i class="pe-7s-ribbon fa-2x prl15"></i>--> </div> </div> </div> </div> </div> <div class="col-lg-6" ng-show="underreviewpraposal" ng-repeat="detail in praposaldata | filter: { proposal_status: \'3\' }"> <div class="hpanel" ng-repeat="info in praposalactivitydata"> <div class="panel-body"> <div class="row projects"> <div class="col-sm-12"> <h4><a href="#">{{detail.name}}</a></h4> <div class="well well-lg"> <p>{{info[0].created_at}}</p> <br><small>{{info[0].proposal_activity}}</small> </div> </div> <div class="col-sm-8" style="border-right:1px dashed #7384b6"> <div class="row"> <div class="col-sm-4"> <div class="project-label">CLIENT</div> <small>Acme & Co.</small> </div> <div class="col-sm-4"> <div class="project-label">VERSION</div> <small>1.0.4</small> </div> <div class="col-sm-4"> <div class="project-label">DEDLINE</div> <small>{{detail.delivery_date}}</small> </div> <div class="col-sm-12"> <h2 class="text-info"> ${{detail.cost}}</h2> </div> <div class="col-sm-12"> <br> <div class="project-people"> <p>{{detail[1].collaborator.first_name}}</p> <!--<img src="images/a1.cfc46f77.jpg" class="img-circle" alt="logo">\r\n                                            <img src="images/a2.7e977710.jpg" class="img-circle" alt="logo">\r\n                                            <img src="images/a3.0672b108.jpg" class="img-circle" alt="logo">\r\n                                            <img src="images/a4.0c52e074.jpg" class="img-circle" alt="logo">\r\n                                            <img src="images/a5.b602d90a.jpg" class="img-circle" alt="logo">\r\n                                            <img src="images/a6.b896f15f.jpg" class="img-circle" alt="logo">\r\n                                            <img src="images/a7.9547bc6a.jpg" class="img-circle" alt="logo">\r\n                                            <img src="images/a8.6eb90892.jpg" class="img-circle" alt="logo">--> </div><br><br> </div> </div> </div> <div class="col-sm-4"> <div class="row"> <div class="col-sm-12"> <div class="project-label">Status</div> <small>Open <br>{{detail.status}}</small> <br><br> </div> <div class="col-sm-12"> <div class="project-value" style="border-top:1px dashed #7384b6"> <h2 class="text-info">79%</h2> <div class="project-label">PROGRESS</div> <div class="progress m-t-xs full progress-small"> <div class="progress-bar progress-bar-info" style="width: 79%" aria-valuemax="100" aria-valuemin="0" aria-valuenow="43" role="progressbar"> </div> </div> </div> </div> </div> </div> </div> </div> <div class="panel-footer"> <div class="row"> <div class="col-sm-12"> <a ng-click="clonepraposal()"><i class="prl15 border-right"><img src="images/widget/summery/copy.png"></i></a> <a ng-click="deletepraposal()"><i class="prl15 border-right"><img src="images/widget/summery/close.png"></i></a> <a ng-click="priweviemode()"><i class="prl15 border-right"><img src="images/widget/summery/search.png"></i></a> <a ng-click="download()"><i class="prl15 border-right"><img src="images/widget/summery/download.png"></i></a> <a ng-click="opencollab()"><i class="prl15 border-right"><img src="images/widget/summery/pagesend.png"></i></a> <a ng-click="emailwindow()"><i class="prl15 border-right"><img src="images/widget/summery/send.png"></i></a> <!--<i class="pe-7s-ribbon fa-2x prl15"></i>--> </div> </div> </div> </div> </div> <div class="col-lg-6" ng-show="closedpraposal" ng-repeat="detail in praposaldata | filter: { proposal_status: \'4\' }"> <div class="hpanel" ng-repeat="info in praposalactivitydata"> <div class="panel-body"> <div class="row projects"> <div class="col-sm-12"> <h4><a href="#">{{detail.name}}</a></h4> <div class="well well-lg"> <p>{{info[0].created_at}}</p> <br><small>{{info[0].proposal_activity}}</small> </div> </div> <div class="col-sm-8" style="border-right:1px dashed #7384b6"> <div class="row"> <div class="col-sm-4"> <div class="project-label">CLIENT</div> <small>Acme & Co.</small> </div> <div class="col-sm-4"> <div class="project-label">VERSION</div> <small>1.0.4</small> </div> <div class="col-sm-4"> <div class="project-label">DEDLINE</div> <small>{{detail.delivery_date}}</small> </div> <div class="col-sm-12"> <h2 class="text-info"> ${{detail.cost}}</h2> </div> <div class="col-sm-12"> <br> <div class="project-people"> <p>{{detail[1].collaborator.first_name}}</p> <!--<img src="images/a1.cfc46f77.jpg" class="img-circle" alt="logo">\r\n                                            <img src="images/a2.7e977710.jpg" class="img-circle" alt="logo">\r\n                                            <img src="images/a3.0672b108.jpg" class="img-circle" alt="logo">\r\n                                            <img src="images/a4.0c52e074.jpg" class="img-circle" alt="logo">\r\n                                            <img src="images/a5.b602d90a.jpg" class="img-circle" alt="logo">\r\n                                            <img src="images/a6.b896f15f.jpg" class="img-circle" alt="logo">\r\n                                            <img src="images/a7.9547bc6a.jpg" class="img-circle" alt="logo">\r\n                                            <img src="images/a8.6eb90892.jpg" class="img-circle" alt="logo">--> </div><br><br> </div> </div> </div> <div class="col-sm-4"> <div class="row"> <div class="col-sm-12"> <div class="project-label">Status</div> <small>Open <br>{{detail.status}}</small> <br><br> </div> <div class="col-sm-12"> <div class="project-value" style="border-top:1px dashed #7384b6"> <h2 class="text-info">79%</h2> <div class="project-label">PROGRESS</div> <div class="progress m-t-xs full progress-small"> <div class="progress-bar progress-bar-info" style="width: 79%" aria-valuemax="100" aria-valuemin="0" aria-valuenow="43" role="progressbar"> </div> </div> </div> </div> </div> </div> </div> </div> <div class="panel-footer"> <div class="row"> <div class="col-sm-12"> <a ng-click="clonepraposal()"><i class="prl15 border-right"><img src="images/widget/summery/copy.png"></i></a> <a ng-click="deletepraposal()"><i class="prl15 border-right"><img src="images/widget/summery/close.png"></i></a> <a ng-click="priweviemode()"><i class="prl15 border-right"><img src="images/widget/summery/search.png"></i></a> <a ng-click="download()"><i class="prl15 border-right"><img src="images/widget/summery/download.png"></i></a> <a ng-click="opencollab()"><i class="prl15 border-right"><img src="images/widget/summery/pagesend.png"></i></a> <a ng-click="emailwindow()"><i class="prl15 border-right"><img src="images/widget/summery/send.png"></i></a> <!--<i class="pe-7s-ribbon fa-2x prl15"></i>--> </div> </div> </div> </div> </div> </div> </div> </div>'), a.put("views/proposal.html", '<div id="header" ng-include="\'views/header.html\'"></div> <!-- Navigation --> <aside id="menu" ng-include="\'views/navigation.html\'"></aside> <div id="wrapper"> <div class="setting"> <div id="container" class="content"> <div class="row"> <div class="col-md-4"> <h3 ng-hide="show">{{praposalname}} <a class="pull-right" ng-click="show=!show" ng-show="isAdmin"><i class="glyphicon glyphicon-pencil"></i></a></h3> </div> <!--<div class = "col-md-2">\r\n                <a class="pull-right" ng-click="show=!show" ng-show="isAdmin"><i class="glyphicon glyphicon-pencil"></i></a>\r\n            </div> --> <div class="col-md-4"> <input name="pname" ng-show="show" id="sender-Tenancy" type="text" placeholder="Praposal Name" class="form-control email" ng-model="pname" required> </div> <div class="col-md-2"> <button class="btn btn-primary" ng-show="show" ng-click="submitname()">Save</button> </div> </div> <div class="row"> <div class="col-md-12"> <div class="col-md-2 no-padding"> <div class="hpanel"> <div class="panel-body no-padding"> <div class="p20 themecolor"> <p>Widgets</p> </div> </div> </div> </div> <style>.p20 i img{width:20px !important;}</style> <div class="col-md-10 no-padding"> <div class="hpanel"> <div class="panel-body no-padding" ui-sortable="sortableOptions"> <div class="pull-left p20"> <i id="draggable" class="prl15 border-right"><img src="images/widget/text.d62f4b2b.png"></i> <i class="pe-7s-folder fa-2x prl15 border-right" db-draggable data-text="true"></i> <i class="pe-7s-monitor fa-2x prl15 border-right" db-draggable data-square="true"></i> <i class="pe-7s-close-circle fa-2x prl15 border-right" db-draggable data-circle="true"></i> <i class="pe-7s-video fa-2x prl15" db-draggable data-video="true"></i> <i class="pe-7s-video fa-2x prl15" db-draggable data-line="true"></i> <i class="prl15 border-right" db-draggable data-triangle="true"><img src="images/widget/shape.7c2630d9.png"></i> <i class="prl15 border-right" db-draggable data-table="true"><img src="images/widget/table.049d80eb.png"></i> <a ng-click="uploadimage()"><i class="prl15 border-right"><img src="images/widget/image.55ef2b73.png"></i></a> <i class="prl15 border-right"><img src="images/widget/video.849a679a.png"></i> <i class="prl15"></i> </div> <div class="pull-right light-blue p20"> <a ng-click="clonepraposal()"><i class="prl15 border-right"><img src="images/widget/copy.0910af3f.png"></i></a> <a ng-click="deletepraposal()"> <i class="prl15 border-right"><img src="images/widget/close.cc3e5159.png"></i></a> <a ng-click="priweviemode()"> <i class="prl15 border-right"><img src="images/widget/search.4b444c95.png"></i></a> <a ng-click="download()"> <i class="prl15 border-right"><img src="images/widget/download.96fad1d1.png"></i></a> <a ng-click="opencollab()"> <i class="prl15 border-right"><img src="images/widget/collab.333096da.png"></i></a> <a ng-click="emailwindow()"> <i class="prl15 border-right"><img src="images/widget/send.efe8b906.png"></i></a> </div> </div> </div> </div> </div> </div> <div class="row"> <div class="col-md-12"> <div class="col-md-2 no-padding"> <div class="hpanel zerobottom" ng-repeat="pagecnt in pagedata"> <div class="panel-body navy-blue text-center"> <a ng-click="sendpage(pagecnt)"> <!--<img alt="logo" class="img-circle img-small" src="images/a1.cfc46f77.jpg">--> <i class="pe-7s-config icon-lg"></i> <div class="m-t-sm"> <strong>{{pagecnt.template_page_name}}</strong> </div> </a> </div> </div> <!--<div class="hpanel zerobottom">\r\n                        <div class="panel-body text-center">\r\n                            <i class="pe-7s-config icon-lg" ></i>\r\n                            <div class="m-t-sm">\r\n                                <strong>Executive Summary</strong>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class="hpanel zerobottom">\r\n                        <div class="panel-body text-center">\r\n                            <i class="pe-7s-config icon-lg" ></i>\r\n                            <div class="m-t-sm">\r\n                                <strong>Pricing</strong>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    \r\n                    <div class="hpanel zerobottom">\r\n                        <div class="panel-body text-center">\r\n                            <i class="pe-7s-config icon-lg" ></i>\r\n                            <div class="m-t-sm">\r\n                                <strong>Terms & Conditions</strong>\r\n                            </div>\r\n                        </div>\r\n                    </div>--> </div> <div class="col-md-10"> <div class="hpanel"> <div db-droppable class="proposal-drop-container" id="proposalDropContainer"> <div data-ng-bind-html="htmlString" id="pagecontaint"> </div> </div> <!--<div class="panel-body"  ng-model="ssss"  medium-editor bind-options="{\'toolbar\': {\'buttons\': [\'bold\', \'italic\', \'underline\']}}"  id="droppable" style="border:2px solid #696969; padding:20px; margin:10px; height:800px;">\r\n                            <div class="pull-right">\r\n                                <img src="../images/chat.png">\r\n                            </div>\r\n                            \r\n                            <!--<h2 class="m-t-none border-all p20 text-center">You just created a new Proposal </h2>\r\n                            <p class="border-all p20 text-center">\r\n                                <br><br><br>\r\n                                Customize your page as you would like by dragging and dropping<br> thewidgets from the widgets panel above\r\n                                <br><br><br>\r\n                            </p>\r\n                            <br><br><br><br><br><br><br>\r\n                            \r\n                            \r\n                        </div>--> </div> <button class="btn btn-primary" ng-click="submitpage()">Save</button> <!--<button class="btn btn-primary" ng-click="updatepage()" >update</button>--> </div> </div> </div> <ng-bind-html ng-bind-html="ssss"></ng-bind-html> <div class="row projects"> <div class="col-lg-12"> <div class="pull-right"> <img src="images/floating.png"> </div> </div> </div> </div> </div> </div> '), a.put("views/proposalReview.html", '<div id="header" ng-include="\'views/header.html\'"></div> <!-- Navigation --> <aside id="menu" ng-include="\'views/navigation.html\'"></aside> <div id="wrapper"> <div id="container"> <div class="row"> <div class="col-md-6"> </div> <div class="row"> <div class="col-md-12"> <div class="col-md-2 no-padding"> <div class="hpanel"> <div class="panel-body no-padding"> <div class="p20 themecolor"> <p>Widgets</p> </div> </div> </div> </div> <div class="col-md-10 no-padding"> <div class="hpanel"> <div class="panel-body no-padding"> <!--<div class="pull-left p20">\r\n                            <i id="draggable" class="pe-7s-upload fa-2x prl15 border-right"></i>\r\n                            <i class="pe-7s-unlock fa-2x prl15 border-right"></i>\r\n                            <i class="pe-7s-umbrella fa-2x prl15 border-right"></i>\r\n                            <i class="pe-7s-trash fa-2x prl15 border-right"></i>\r\n                            <i class="pe-7s-tools fa-2x prl15 border-right"></i>\r\n                            <i class="pe-7s-speaker fa-2x prl15"></i>\r\n                        </div>--> <div class="pull-right light-blue p20"> <a ng-click="opensign()" ng-hide="approve"><i class="pe-7s-upload fa-2x prl15 border-right">Signin and Approve</i><a> <!--<i class="pe-7s-unlock fa-2x prl15 border-right"></i>\r\n                            <i class="pe-7s-umbrella fa-2x prl15 border-right"></i>\r\n                            <i class="pe-7s-trash fa-2x prl15 border-right"></i>\r\n                            <i class="pe-7s-tools fa-2x prl15 border-right"></i>--> <a ng-click="openreject()"><i class="pe-7s-speaker fa-2x prl15">Reject</i></a> </a></a></div> </div> </div> </div> </div> </div> <h3>{{praposalname}}</h3> <div class="row"> <div class="col-md-12"> <div class="col-md-2 no-padding"> <div class="hpanel zerobottom" ng-repeat="pagecnt in pagecontent"> <div class="panel-body navy-blue text-center"> <a ng-click="sendpage(pagecnt)"> <i class="pe-7s-config icon-lg"></i> <div class="m-t-sm"> <strong>{{pagecnt.page_name}}</strong> </div> </a> </div> </div> <!--<div class="hpanel zerobottom">\r\n                            <div class="panel-body text-center">\r\n                                <i class="pe-7s-config icon-lg" ></i>\r\n                                <div class="m-t-sm">\r\n                                    <strong>Executive Summary</strong>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n\r\n                         <div class="hpanel zerobottom">\r\n                            <div class="panel-body text-center">\r\n                                <i class="pe-7s-config icon-lg" ></i>\r\n                                <div class="m-t-sm">\r\n                                    <strong>Pricing</strong>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        \r\n                        <div class="hpanel zerobottom">\r\n                            <div class="panel-body text-center">\r\n                                <i class="pe-7s-config icon-lg" ></i>\r\n                                <div class="m-t-sm">\r\n                                    <strong>Terms & Conditions</strong>\r\n                                </div>\r\n                            </div>\r\n                        </div>--> </div> <div class="col-md-10"> <div class="hpanel"> <div class="panel-body" ng-model="ssss" medium-editor id="droppable" style="border:2px solid #696969; padding:20px; margin:10px; height:800px"> </div> <div class="pull-right"> <img src="../images/chat.png"> </div> </div> <!--<button class="btn btn-primary" ng-click="submitpage()">Save</button>\r\n<button class="btn btn-primary" ng-click="updatepage()" >update</button>--> </div> </div> </div> <div class="row projects"> <div class="col-lg-12"> <div class="pull-right"> <img src="../images/floating.png"> </div> </div> </div> </div> </div></div>'), a.put("views/ragister.html", '<!--<div class="color-line"></div>\r\n\r\n<div class="back-link">\r\n</div>--> <div class="bgimg"> <div class="signup-container" data-ng-init="init()"> <div class="row"> <div class="col-md-12"> <div class="col-md-4 col-md-offset-4 text-center m-b-md"> <img class="img-responsive" src="images/docubasic_white_logo.73f6b9c2.png"> </div> </div> <div class="col-md-12"> <h3 class="login-h1 white">Sign Up <span class="pull-right"><a href="#">Sign In</a></span></h3> </div> <div class="col-md-12"> <div class="hpanel"> <div class="col-sm-6 no-padding"> <div class="signup_doccolor"> <form> <h3 class="login-h1">New Tenancy Users </h3> <div class="form-group"> <div class="inner-addon left-addon"> <i class="glyphicon"><img src="images/icons/user.810c373f.png"></i> <input type="text" placeholder="Organization Name" title="Organization Name" required value="" name="orgname" id="username" class="form-control" ng-model="email"> </div> </div> <div class="form-group"> <div class="inner-addon left-addon"> <i class="glyphicon"><img src="images/icons/user.810c373f.png"></i> <input type="text" placeholder="Tender ID" title="Tender ID" required value="" name="tenderid" id="tenderid" class="form-control" ng-model="email"> </div> </div> <div class="form-group"> <div class="inner-addon left-addon"> <i class="glyphicon"><img src="images/icons/user.810c373f.png"></i> <input type="text" placeholder="Full Name" title="Full Name" required value="" name="username" id="username" class="form-control" ng-model="email"> </div> </div> <div class="form-group"> <div class="inner-addon left-addon"> <i class="glyphicon"><img src="images/icons/password.d8afd8d3.png"></i> <input type="text" title="Email" placeholder="Email" required value="" name="email" id="email" class="form-control" ng-model="password"> </div> </div> <!--<div>\r\n                                <input type="checkbox" ng-model="remember" ng-init="remember = true">\r\n                                Remember login\r\n                                <p class="help-block small">(if this is a private computer)</p>\r\n                               \r\n                            </div>--> <button class="btn btn-default btn-block h50" ng-click="loginSubmit()">Sign Up <img class="loginarrow" src="images/icons/arrow_right.69c7b738.png"></button><br> </form> </div> </div> <div class="col-sm-6 no-padding"> <div class="signup_whitecolor"> <form> <h3 class="login-h1">Existing Tenancy Users </h3> <div class="form-group"> <div class="inner-addon left-addon"> <i class="glyphicon"><img src="images/icons/user.810c373f.png"></i> <input type="text" placeholder="Tender ID" title="Tender ID" required value="" name="tenderid" id="tenderid" class="form-control" ng-model="email"> </div> </div> <div class="form-group"> <div class="inner-addon left-addon"> <i class="glyphicon"><img src="images/icons/user.810c373f.png"></i> <input type="text" placeholder="Organization Name" title="Organization Name" required value="" name="orgname" id="username" class="form-control" ng-model="email"> </div> </div> <div class="form-group"> <div class="inner-addon left-addon"> <i class="glyphicon"><img src="images/icons/user.810c373f.png"></i> <input type="text" placeholder="Full Name" title="Full Name" required value="" name="username" id="username" class="form-control" ng-model="email"> </div> </div> <div class="form-group"> <div class="inner-addon left-addon"> <i class="glyphicon"><img src="images/icons/password.d8afd8d3.png"></i> <input type="text" title="Email" placeholder="Email" required value="" name="email" id="email" class="form-control" ng-model="password"> </div> </div> <!--<div>\r\n                                <input type="checkbox" ng-model="remember" ng-init="remember = true">\r\n                                Remember login\r\n                                <p class="help-block small">(if this is a private computer)</p>\r\n                               \r\n                            </div>--> <button class="btn btn-default btn-block h50" ng-click="loginSubmit()">Sign Up <img class="loginarrow" src="images/icons/arrow_right.69c7b738.png"></button><br> </form> </div> </div> </div> </div> </div> </div> </div>'),
            a.put("views/reject.html", '<!--<div id="header" ng-include="\'views/header.html\'"></div>\r\n<!-- Navigation \r\n<aside id="menu" ng-include="\'views/navigation.html\'"></aside>\r\n<div id="wrapper">--> <div class="modal-dialog modal-lg"> <div class="color-line"></div> <div class="modal-header"> <h4 class="modal-title"> Reject this proposal <span class="pull-right"><a data-dismiss="modal"> <i class="pe-7s-close fa-2x"></i></a> </span></h4> </div> <div class="modal-body"> <div class="row"> <div class="col-md-12"> <label class="control-label">Please input the reason for your rejection</label><br> <textarea class="form-control" rows="5" id="comment" placeholder="" ng-model="discriptions"></textarea> </div> </div> </div> <div class="modal-footer"> <!--<button type="button" class="btn btn-default" data-dismiss="modal">Close</button>--> <button type="button" class="btn btn-primary" ng-click="preject()">Reject</button> </div> </div>'), a.put("views/resourcetype.html", '<!--<div id="header" ng-include="\'views/header.html\'"></div>\r\n\r\n<!-- Navigation \r\n<aside id="menu" ng-include="\'views/navigation.html\'"></aside>\r\n<div id="wrapper">--> <div class="modal-dialog modal-lg"> <div class="normalheader transition animated fadeIn"> <div class="hpanel"> <div class="panel-body"> <div class="pull-right"> <a ng-click="closemodal()"> <i class="pe-7s-close fa-2x"></i></a> </div> </div> <div class="panel-body"> <div class="pull-right m-t-lg" id="hbreadcrumb"> <ol class="hbreadcrumb breadcrumb"> <li><a ng-href="#/main">Dashboard</a></li> <li class="active"> <span>Resource Type</span> </li> </ol> </div> <h2 class="font-light m-b-xs"> Resource Type </h2> <small></small> </div> </div> </div> <div class="resource"> <uib-alert ng-repeat="alert in alerts" class="display-alert" type="{{alert.type}}" close="closeAlerts($index)" ng-click="closeAlerts($index)" id="display-error-home">{{alert.msg}}</uib-alert> <uib-alert ng-repeat="error in errors" class="display-alert" type="{{alert.type}}" close="closeAlert($index)" ng-click="closeAlert($index)" id="display-error-home">{{error}}</uib-alert> <div class="content" animate-panel effect="zoomIn"> <div class="row"> <div class="col-lg-12"> <div class="hpanel"> <div class="panel-body"> <button class="btn btn-primary pull-right" ng-model="collapsed" ng-click="resourcesection()">Add New</button> <br> <div class="takadd" ng-show="collapsed"><br> <form name="resource"> <h2 class="font-light m-b-xs" ng-hide="update"> Add New Resource </h2><br> <h2 class="font-light m-b-xs" ng-show="update"> Add New Resource </h2><br> <div class="row"> <div class="col-md-4"> <div class="form-group required" ng-class="{\'has-error\': resource.rname.$touched && resource.rname.$error.required}"> <label class="control-label">Resource Type Name </label><br> <input name="rname" type="text" only-words class="form-control" placeholder="Resource Type Name" id="user-pass" ng-model="resourcename" ng-maxlength="20" ng-minlength="3" required> <span ng-show="resource.rname.$error.minlength" class="denger">Resource name is too short.</span> <span ng-show="resource.rname.$error.maxlength" class="has-error">Resource name is too long.</span> </div> </div> <div class="col-md-4"> <label class="control-label">Daily Cost </label><br> <div class="form-group required" ng-class="{\'has-error\': resource.dailycost.$touched && resource.dailycost.$error.required}"> <input name="dailycost" type="number" class="form-control" placeholder="Daily Cost" id="user-pass" ng-model="dailycost" ng-pattern="/^[0-9]+(\\.[0-9]{1,2})?$/" required> <p class="help-block" ng-show="resource.dailycost.$touched && resource.dailycost.$invalid">Invalid</p> </div> </div> </div> <div class="row"> <div class="col-md-4"> <div class="form-group required"> <label class="control-label">Source </label><br> <div class="dropdown"> <select class="form-control dropdown-toggle" type="button" data-toggle="dropdown" ng-model="source" ng-options="money.id as money.type for money in sources"> <span class="caret"></span></select> </div> </div> </div> <div class="col-md-4" ng-show="source == \'2\'"> <label class="control-label">Vendors </label><br> <div class="dropdown"> <select class="form-control dropdown-toggle" type="button" data-toggle="dropdown" ng-model="vendors" ng-options="money.vendor_id as money.displayname for money in vendorsdata"> <span class="caret"></span></select> </div> </div> <div class="col-md-3" ng-show="source == \'1\'"> <div class="form-group required" ng-class="{\'has-error\': resource.dailyprce.$touched  && resource.dailyprce.$error.required}"> <label class="control-label">Line of unit </label><br> <input name="unit" type="text" class="form-control" placeholder="Line of unit" id="user-pass" ng-model="unit" required> </div> </div> </div> <div class="row"> <div class="col-md-8"> <div class="form-group required" ng-class="{\'has-error\': resource.dailyprce.$touched && resource.dailyprce.$error.required}"> <label class="control-label">Daily Price </label><br> <input name="dailyprce" type="number" class="form-control" placeholder="Daily Price" id="user-pass" ng-model="dailyprice" ng-pattern="/^[0-9]+(\\.[0-9]{1,2})?$/" required> <p class="help-block" ng-show="resource.dailyprce.$touched && resource.dailyprce.$invalid">Invalid</p> </div> </div> </div> <div class="row"> <div class="col-md-12"> <button class="btn btn-primary" ng-click="insertresource()" ng-disabled="resource.$invalid" ng-hide="update">Save</button> <button class="btn btn-primary" ng-click="updateresourcedata()" ng-disabled="resource.$invalid" ng-show="update">Update</button> <button class="btn btn-primary" ng-click="closeresource()">Cancel</button> </div> </div><br> </form></div> </div> <br><br> <div class="panel-body pn"> <table datatable="ng" class="table table-striped table-bordered table-hover"> <thead> <tr> <th>Name</th> <th>Daily price</th> <th>Daily cost</th> <th>Created by</th> <th>Action</th> </tr> </thead> <tbody> <tr ng-repeat="detail in allresource"> <td>{{detail.resourcename}}</td> <td>{{detail.dailyprice}}</td> <td>{{detail.dailycost}}</td> <td>{{detail.created_users_email}}<br> {{detail.created_time}}</td> <td><a href="" title="Update" ng-click="updateresource(detail)" class="btn"><i class="glyphicon glyphicon-pencil"></i></a> <a href="" title="Delete" ng-click="deleteresource(detail)" class="btn"><i class="glyphicon glyphicon-trash"></i></a></td> </tr> </tbody> </table> </div> </div> </div> </div> </div> </div></div>'), a.put("views/resourcetype_old.html", '<div id="header" ng-include="\'views/header.html\'"></div> <!-- Navigation --> <aside id="menu" ng-include="\'views/navigation.html\'"></aside> <div id="wrapper"> <div class="normalheader transition animated fadeIn"> <div class="hpanel"> <div class="panel-body"> <div class="pull-right m-t-lg" id="hbreadcrumb"> <ol class="hbreadcrumb breadcrumb"> <li><a ng-href="#/main">Dashboard</a></li> <li class="active"> <span>Resource Type</span> </li> </ol> </div> <h2 class="font-light m-b-xs"> Resource Type </h2> <small></small> </div> </div> </div> <div class="resource"> <uib-alert ng-repeat="alert in alerts" class="display-alert" type="{{alert.type}}" close="closeAlerts($index)" ng-click="closeAlerts($index)" id="display-error-home">{{alert.msg}}</uib-alert> <uib-alert ng-repeat="error in errors" class="display-alert" type="{{alert.type}}" close="closeAlert($index)" ng-click="closeAlert($index)" id="display-error-home">{{error}}</uib-alert> <div class="content" animate-panel effect="zoomIn"> <div class="row"> <div class="col-lg-12"> <div class="hpanel"> <div class="panel-body"> <button class="btn btn-primary pull-right" ng-model="collapsed" ng-click="resourcesection()">New Resource</button> <br> <div class="takadd" ng-show="collapsed"><br> <form name="resource"> <div class="row"> <div class="col-md-4"> <div class="form-group required" ng-class="{\'has-error\': resource.rname.$touched && resource.rname.$error.required}"> <input name="rname" type="text" class="form-control" placeholder="Resource Type Name" id="user-pass" ng-model="resourcename" required> </div> </div> <div class="col-md-4"> <div class="form-group required" ng-class="{\'has-error\': resource.dailycost.$touched && resource.dailycost.$error.required}"> <input name="dailycost" type="text" class="form-control" placeholder="Daily Cost" id="user-pass" ng-model="dailycost" required> </div> </div> </div><br> <div class="row"> <div class="col-md-4"> <div class="dropdown"> <select class="form-control dropdown-toggle" type="button" data-toggle="dropdown" ng-model="vendors" ng-options="money.vendor_id as money.displayname for money in vendorsdata"> <span class="caret"></span></select> </div> </div> <div class="col-md-4"> <div class="dropdown"> <select class="form-control dropdown-toggle" type="button" data-toggle="dropdown" ng-model="source" ng-options="money.id as money.type for money in sources"> <span class="caret"></span></select> </div> </div> </div> <br> <div class="row"> <div class="col-md-8"> <div class="form-group required" ng-class="{\'has-error\': resource.dailyprce.$touched && resource.dailyprce.$error.required}"> <input name="dailyprce" type="text" class="form-control" placeholder="Daily Price" id="user-pass" ng-model="dailyprice" required> </div> </div> </div> <br> <div class="row"> <div class="col-md-12"> <button class="btn btn-primary" ng-click="insertresource()" ng-disabled="resource.$invalid" ng-hide="update">save</button> <button class="btn btn-primary" ng-click="updateresourcedata()" ng-disabled="resource.$invalid" ng-show="update">Update</button> <button class="btn btn-primary" ng-click="closeresource()">Close</button> </div> </div><br> </form></div> </div> <br><br> <div class="panel-body pn"> <table datatable="ng" class="table table-striped table-bordered table-hover"> <thead> <tr> <th>Name</th> <th>Daily price</th> <th>Daily cost</th> <th>Action</th> </tr> </thead> <tbody> <tr ng-repeat="detail in allresource"> <td>{{detail.resourcename}}</td> <td>{{detail.dailyprice}}</td> <td>{{detail.dailycost}}</td> <td><a href="" title="Update" ng-click="updateresource(detail)" class="btn"><i class="glyphicon glyphicon-pencil"></i></a> <a href="" title="Delete" ng-click="deleteresource(detail)" class="btn"><i class="glyphicon glyphicon-trash"></i></a></td> </tr> </tbody> </table> </div> </div> </div> </div> </div> </div></div>'), a.put("views/right_sidebar.html", '<div class="p-m"> <button id="sidebar-close" class="sidebar-button btn btn-default m-b-md" ng-click="$root.rightSidebar = false"><i class="pe pe-7s-close"></i> </button> </div> <div class="p-m bg-light border-bottom border-top"> <h3>Add New Proposal</h3> <div class="row"> <div class="col-xs-4"> <div class="form-group"> <input type="text" class="form-control" id="exampleInputEmail3" placeholder="Name of the proposal"> </div> </div> <div class="col-xs-4"> <div class="form-group"> <select class="form-control"> <option>Clients</option> </select> </div> </div> </div> <div class="row"> <div class="col-xs-6"> <p class="input-group"> <input type="text" class="form-control" uib-datepicker-popup="{{format}}" show-button-bar="false" ng-model="dt" is-open="opened" min-date="minDate" max-date="\'2019-06-22\'" datepicker-options="dateOptions" date-disabled="disabled(date, mode)" ng-required="true" close-text="Close"> <span class="input-group-btn"> <button type="button" class="btn btn-default" ng-click="open($event)"><i class="glyphicon glyphicon-calendar"></i></button> </span> </p> </div> </div> <div class="p-m"> </div></div>'), a.put("views/settingpage.html", '<div id="header" ng-include="\'views/header.html\'"></div> <!-- Navigation --> <aside id="menu" ng-include="\'views/navigation.html\'"></aside> <div id="right-sidebar" ng-include="\'views/companysetting.html\'" class="sidebar-open" ng-show="rightSidebar"></div> <div id="wrapper"> <div class="content animate-panel"> <div class="row"> <div class="col-md-2"> <!--<div class="font-bold m-b-sm text-center">\r\n                    Settings\r\n                </div>--> <div class="row"> <div class="col-md-12"> <div class="hpanel zerobottom"> <div class="panel-body navy-blue text-center"> <!-- <img alt="logo" class="img-circle img-small" src="images/a1.cfc46f77.jpg">--> <a ng-click="opencompany()"> <i class="pe-7s-config icon-lg"></i> <div class="m-t-sm"> <strong>Company</strong> </div> </a> </div> </div> <div class="hpanel zerobottom"> <div class="panel-body text-center"> <a ng-click="opentask()"> <i class="pe-7s-config icon-lg"></i> <div class="m-t-sm"> <strong>Task Categories</strong> </div> </a> </div> </div> <div class="hpanel zerobottom"> <div class="panel-body text-center"> <a ng-click="openprojecttask()"> <i class="pe-7s-config icon-lg"></i> <div class="m-t-sm"> <strong>Project Tasks</strong> </div> </a> </div> </div> <div class="hpanel zerobottom"> <div class="panel-body text-center"> <a ng-click="openprice()"> <i class="pe-7s-config icon-lg"></i> <div class="m-t-sm"> <strong>Pricing</strong> </div> </a> </div> </div> <div class="hpanel zerobottom"> <div class="panel-body text-center"> <a ng-click="openvendor()"> <i class="pe-7s-config icon-lg"></i> <div class="m-t-sm"> <strong>Vendors</strong> </div> </a> </div> </div> <div class="hpanel zerobottom"> <div class="panel-body text-center"> <a ng-click="openresource()"> <i class="pe-7s-config icon-lg"></i> <div class="m-t-sm"> <strong>Resource Types</strong> </div> </a> </div> </div> <div class="hpanel zerobottom"> <div class="panel-body text-center"> <a ng-click="openclient()"> <i class="pe-7s-config icon-lg"></i> <div class="m-t-sm"> <strong>Clients</strong> </div> </a> </div> </div> <div class="hpanel zerobottom"> <div class="panel-body text-center"> <a ng-click="openstyle()"> <i class="pe-7s-config icon-lg"></i> <div class="m-t-sm"> <strong>Styles</strong> </div> </a> </div> </div> <div class="hpanel zerobottom"> <div class="panel-body text-center"> <a ng-click="openpage()"> <i class="pe-7s-config icon-lg"></i> <div class="m-t-sm"> <strong>Pages</strong> </div> </a> </div> </div> <div class="hpanel zerobottom"> <div class="panel-body text-center"> <a ng-click="opentemplate()"> <i class="pe-7s-config icon-lg"></i> <div class="m-t-sm"> <strong>Template</strong> </div> </a> </div> </div> </div> </div> </div> <!--<div class="col-md-10">\r\n\r\n                <div class="font-bold m-b-sm">\r\n                    Project details\r\n                </div>\r\n\r\n                <div class="hpanel">\r\n                    <div class="panel-body">\r\n\r\n                        <div class="pull-right">\r\n                            <button class="btn btn-success btn-xs">  Active</button>\r\n                            <button class="btn btn-default btn-xs"> <i class="fa fa-pencil"></i> Edit</button>\r\n                        </div>\r\n                        <h2 class="m-t-none">Common project </h2>\r\n                        <small>\r\n                            A wonderful serenity has taken possession of my entire soul, like these sweet mornings of\r\n                            spring which I enjoy with my whole heart.\r\n                            I am alone, and feel the charm of existence in this spot, which was created for the bliss of\r\n                            souls like mine.\r\n                        </small>\r\n                        <div class="small m-t-xs">\r\n                            <strong>Create by:</strong> Anthony Novic<br/>\r\n                            <strong>Client:</strong> Nordic Company Walking\r\n                        </div>\r\n\r\n\r\n\r\n                        <div class="m-t-md">\r\n                            <canvas id="lineOptions" height="60"></canvas>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n\r\n            </div>--> </div> </div> </div>'), a.put("views/sign-up.html", '<div class="panel-body"> <uib-alert ng-repeat="alert in alerts" class="display-alert" type="{{alert.type}}" close="closeAlerts($index)" ng-click="closeAlerts($index)" id="display-error-home">{{alert.msg}}</uib-alert> <uib-alert ng-repeat="error in errors" class="display-alert" type="{{alert.type}}" close="closeAlert($index)" ng-click="closeAlert($index)" id="display-error-home">{{error}}</uib-alert> <!--<form name="loginForm" role="form" ng-submit="loginSubmit()">--> <label for="sender-email" class="control-label">Select User Type:</label><br> <button class="btn btn-primary" ng-model="collapsed" type="button" ng-click="collapsed()"> <i class="fa fa-group"></i> <br> New Tenancy Users </button> <button class="btn btn-primary" type="button" ng-model="collapsed1" type="button" ng-click="collapsed1()"> <i class="fa fa-group"></i> <br> Existing Tenancy Users </button> <!--New--> <div class="takadd" ng-show="collapsedold"> <form name="etuser"> <div class="form-group required" ng-class="{\'has-error\': etuser.companyname.$touched && etuser.companyname.$error.required}"> <label for="sender-email" class="control-label">Company Name:</label> <div class="input-icon"> <i class="fa fa-user"></i> <input name="companyname" id="sender-companyname" type="text" ng-blur="check()" placeholder="Organisation Name" class="form-control email" ng-model="signup.orgname" ng-trim="false" required> </div> </div> <div class="form-group required" ng-class="{\'has-error\': etuser.Tenancy.$touched && etuser.Tenancy.$error.required}"> <label for="sender-email" class="control-label">Tenancy ID </label> <div class="input-icon"> <i class="fa fa-phone"></i> <input name="Tenancy" id="sender-Tenancy" type="text" placeholder="Tenancy ID " class="form-control email" ng-model="signup.tenancy" ng-blur="checkcode()" ng-trim="false" required> <!--<a ng-click="company"><span>don\'t have Tenancy ID?<span></a>--> </div> </div> <div class="form-group required" ng-class="{\'has-error\': etuser.username.$touched && etuser.username.$error.required}"> <label for="sender-email" class="control-label">First Name:</label> <div class="input-icon"> <i class="fa fa-user"></i> <input name="username" only-words id="sender-name" ng-minlength="3" ng-maxlength="20" type="text" placeholder="First Name" class="form-control" ng-model="signup.fname" required> </div> <p ng-show="etuser.username.$error.minlength">First name is too short.</p> <p ng-show="etuser.username.$error.maxlength">First name is too long.</p> </div> <div class="form-group required" ng-class="{\'has-error\': etuser.userlname.$touched && etuser.userlname.$error.required}"> <label for="sender-email" class="control-label">Last Name:</label> <div class="input-icon"> <i class="fa fa-user"></i> <input name="userlname" only-words ng-minlength="3" ng-maxlength="20" id="sender-userlname" type="text" placeholder="Last Name" class="form-control Name" ng-model="signup.lname" required> </div> <p ng-show="etuser.userlname.$error.minlength" class="danger">Last name is too short.</p> <p ng-show="etuser.userlname.$error.maxlength" class="danger">Last name is too long.</p> </div> <div class="form-group required" ng-class="{\'has-error\': etuser.email.$touched && etuser.email.$error.required}"> <label for="sender-email" class="control-label">Email:</label> <div class="input-icon"> <i class="fa fa-user"></i> <input name="useremail" id="sender-email" type="text" placeholder="Email" ng-pattern="emailFormat" class="form-control email" ng-model="signup.email" required> </div> </div> </form> <div class="form-group"> <button class="btn btn-success" type="button" ng-click="signup()" ng-disabled="etuser.$invalid"><strong>Sign Up !</strong></button> </div> </div> <!--Existing user--> <div ng-show="collapsednew"> <form name="ntuser"> <div class="form-group required" ng-class="{\'has-error\': ntuser.Tenancy.$touched && ntuser.Tenancy.$error.required}"> <label for="sender-email" class="control-label">Tenancy ID </label> <div class="input-icon"> <i class="fa fa-phone"></i> <input name="Tenancy" id="sender-Tenancy" type="text" placeholder="Tenancy ID " class="form-control email" ng-model="signup.tenancycode" ng-blur="checkid()" required> <!--<a ng-click="company"><span>don\'t have Tenancy ID?<span></a>--> </div> </div> <div class="form-group required" ng-class="{\'has-error\': ntuser.companyname.$touched && ntuser.companyname.$error.required}"> <label for="sender-email" class="control-label">Company Name:</label> <div class="input-icon"> <i class="fa fa-user"></i> <input name="companyname" id="sender-companyname" type="text" placeholder="Organisation Name" class="form-control email" ng-model="signup.orgname" ng-chnage="check()" required> </div> </div> <div class="form-group required" ng-class="{\'has-error\': ntuser.ntuser.$touched && ntuser.ntuser.$error.required}"> <label for="sender-email" class="control-label">First Name:</label> <div class="input-icon"> <i class="fa fa-user"></i> <input name="username" id="sender-name" only-words type="text" placeholder="First Name" ng-minlength="3" ng-maxlength="20" class="form-control email" ng-model="signup.nfname" required> </div> <p ng-show="ntuser.username.$error.minlength" class="denger">First name is too short.</p> <p ng-show="ntuser.username.$error.maxlength" class="denger">First name is too long.</p> </div> <div class="form-group required" ng-class="{\'has-error\': ntuser.userlname.$touched && ntuser.userlname.$error.required}"> <label for="sender-email" class="control-label">Last Name:</label> <div class="input-icon"> <i class="fa fa-user"></i> <input name="userlname" id="sender-userlname" only-words type="text" ng-minlength="3" ng-maxlength="20" placeholder="Last Name" class="form-control Name" ng-model="signup.nlname" required> </div> <p ng-show="ntuser.userlname.$error.minlength" class="denger">Last name is too short.</p> <p ng-show="ntuser.userlname.$error.maxlength" class="denger">Last name is too long.</p> </div> <div class="form-group required" ng-class="{\'has-error\': ntuser.useremail.$touched && ntuser.useremail.$error.required}"> <label for="sender-email" class="control-label">Email:</label> <div class="input-icon"> <i class="fa fa-user"></i> <input name="useremail" id="sender-email" type="text" placeholder="Email" ng-pattern="emailFormat" class="form-control email" ng-model="signup.nemail" required> </div> </div> </form> <div class="form-group"> <button class="btn btn-success" type="button" ng-click="signupnew()" ng-disabled="ntuser.$invalid"><strong>Sign Up !</strong></button> </div> </div>  </div>'), a.put("views/signature.html", '<!--<div id="header" ng-include="\'views/header.html\'"></div>\r\n<!-- Navigation \r\n<aside id="menu" ng-include="\'views/navigation.html\'"></aside>\r\n<div id="wrapper">--> <div class="modal-dialog modal-lg"> <uib-alert ng-repeat="alert in errors" class="display-alert" type="{{alert.type}}" close="closeAlert($index)" ng-click="closeAlert($index)" id="display-error-home">{{alert}}</uib-alert> <uib-alert ng-repeat="alert in alerts" class="display-alert" type="{{alert.type}}" close="closeAlerts($index)" ng-click="closeAlert($index)" id="display-error-home">{{alert.msg}}</uib-alert> <div class="color-line"></div> <div class="modal-header"> <h4 class="modal-title"> Add your signature <span class="pull-right"><a data-dismiss="modal"> <i class="pe-7s-close fa-2x"></i></a> </span></h4> </div> <div class="modal-body"> <div class="row"> <div> <img style="margin-bottom:5px; border: 5px solid #e0e1e7" height="210" width="250" ng-src="{{imageptah}}"> <img ngf-thumbnail="files"> </div> <input type="file" ng-model="files" name="files" multiple accept="image/*, .zip" maxsize="500" required base-sixty-four-input> <span ng-show="logovalidate.files.$error.maxsize">Files must not exceed 500 KB</span><br> <button class="btn btn-primary" ng-click="send()">Upload</button> </div> </div> <div class="modal-footer"> <!--<button type="button" class="btn btn-default" data-dismiss="modal">Close</button>--> <button type="button" class="btn btn-primary" ng-click="approvep()">Approve</button> </div> </div>'), a.put("views/socialsignup.html", '<div class="panel-body"> <uib-alert ng-repeat="alert in alerts" class="display-alert" type="{{alert.type}}" close="closeAlerts($index)" ng-click="closeAlert($index)" id="display-error-home">{{alert.msg}}</uib-alert> <uib-alert ng-repeat="error in errors" class="display-alert" type="{{alert.type}}" close="closeAlert($index)" ng-click="closeAlert($index)" id="display-error-home">{{error}}</uib-alert> <!--<form name="loginForm" role="form" ng-submit="loginSubmit()">--> <label for="sender-email" class="control-label">Select User Type:</label><br> <button class="btn btn-primary" ng-model="collapsed" type="button" ng-click="collapsed()"> <i class="fa fa-group"></i> <br> New Tenancy Users </button> <button class="btn btn-success" type="button" ng-model="collapsed1" type="button" ng-click="collapsed1()"> <i class="fa fa-group"></i> <br> Existing Tenancy Users </button> <!--New--> <div class="takadd" ng-show="collapsedold"> <form name="etuser"> <div class="form-group required" ng-class="{\'has-error\': etuser.companyname.$touched && etuser.companyname.$error.required}"> <label for="sender-email" class="control-label">Company Name:</label> <div class="input-icon"> <i class="fa fa-user"></i> <input name="companyname" id="sender-companyname" type="text" ng-blur="check()" placeholder="Organisation Name" class="form-control email" ng-model="orgname" required> </div> </div> <div class="form-group required" ng-class="{\'has-error\': etuser.Tenancy.$touched && etuser.Tenancy.$error.required}"> <label for="sender-email" class="control-label">Tenancy ID </label> <div class="input-icon"> <i class="fa fa-phone"></i> <input name="Tenancy" id="sender-Tenancy" type="text" placeholder="Tenancy ID " class="form-control email" ng-model="tenancy" ng-blur="checkcode()" required> <!--<a ng-click="company"><span>don\'t have Tenancy ID?<span></a>--> </div> </div> <div class="form-group required" ng-class="{\'has-error\': etuser.username.$touched && etuser.userphone.$error.required}"> <label for="sender-email" class="control-label">First Name:</label> <div class="input-icon"> <i class="fa fa-user"></i> <input name="username" id="sender-name" type="text" placeholder="First Name" class="form-control email" ng-model="fname" required> </div> </div> <div class="form-group required" ng-class="{\'has-error\': etuser.userlname.$touched && etuser.userlname.$error.required}"> <label for="sender-email" class="control-label">Last Name:</label> <div class="input-icon"> <i class="fa fa-user"></i> <input name="userlname" id="sender-userlname" type="text" placeholder="Last Name" class="form-control Name" ng-model="lname" required> </div> </div> <div class="form-group required"> <label for="sender-email" class="control-label">Email:</label> <div class="input-icon"> <label for="sender-email" class="control-label">{{semail}}</label> </div> </div> </form> <div class="form-group"> <button class="btn btn-success" type="button" ng-click="socialsignup()" ng-disabled="etuser.$invalid"><strong>Sign Up !</strong></button> </div> </div> <!--Existing user--> <div ng-show="collapsednew"> <form name="ntuser"> <div class="form-group required" ng-class="{\'has-error\': ntuser.Tenancy.$touched && ntuser.Tenancy.$error.required}"> <label for="sender-email" class="control-label">Tenancy ID </label> <div class="input-icon"> <i class="fa fa-phone"></i> <input name="Tenancy" id="sender-Tenancy" type="text" placeholder="Tenancy ID " class="form-control email" ng-model="tenancycode" ng-blur="checkid()" required> <!--<a ng-click="company"><span>don\'t have Tenancy ID?<span></a>--> </div> </div> <div class="form-group required" ng-class="{\'has-error\': ntuser.companyname.$touched && ntuser.companyname.$error.required}"> <label for="sender-email" class="control-label">Company Name:</label> <div class="input-icon"> <i class="fa fa-user"></i> <input name="companyname" id="sender-companyname" type="text" placeholder="Organisation Name" class="form-control email" ng-model="orgname" ng-chnage="check()" required> </div> </div> <div class="form-group required" ng-class="{\'has-error\': ntuser.ntuser.$touched && ntuser.ntuser.$error.required}"> <label for="sender-email" class="control-label">First Name:</label> <div class="input-icon"> <i class="fa fa-user"></i> <input name="username" id="sender-name" type="text" placeholder="First Name" class="form-control email" ng-model="fname" required> </div> </div> <div class="form-group required" ng-class="{\'has-error\': ntuser.userlname.$touched && ntuser.userlname.$error.required}"> <label for="sender-email" class="control-label">Last Name:</label> <div class="input-icon"> <i class="fa fa-user"></i> <input name="userlname" id="sender-userlname" type="text" placeholder="Last Name" class="form-control Name" ng-model="lname" required> </div> </div> <div class="form-group required"> <label for="sender-email" class="control-label">Email:</label> <div class="input-icon"> <label for="sender-email" class="control-label">{{semail}}</label> </div> </div> </form> <div class="form-group"> <button class="btn btn-success" type="button" ng-click="socialsignupnew()" ng-disabled="ntuser.$invalid"><strong>Sign Up !</strong></button> </div> </div>  </div>'), a.put("views/styles.html", '<!--<div id="header" ng-include="\'views/header.html\'"></div>\r\n<!-- Navigation \r\n<aside id="menu" ng-include="\'views/navigation.html\'"></aside>\r\n<div id="wrapper">--><!--<div class="modal modalnew animated fadeInRight"  id="myModal5" tabindex="-1" role="dialog"  aria-hidden="true">--> <div class="modal-dialog modal-lg"> <div class="modal-content"> <div class="color-line"></div> <div class="panel-body"> <div class="pull-right"> <a ng-click="closemodal()"> <i class="pe-7s-close fa-2x"></i></a> </div> </div> <div class="modal-header"> <h4 class="modal-title">Add New Style<span class="pull-right"> </span></h4> </div> <div class="modal-body"> <div class="row"> <button type="button" class="btn btn-primary" ng-click="show=!show">New Style</button><br><br> <div ng-show="show"> <div class="col-md-6"> <div class="form-group required"> <input name="name" type="text" class="form-control" ng-maxlength="50" placeholder="Name of Proposal" ng-model="stylename" maxlength="20" minlength="3" required> </div> </div> <button type="button" class="btn btn-primary" ng-click="create()">Create</button> </div> <!--<div class="col-md-6">\r\n                                        <div class="form-group required" >\r\n                                            <input name="client_name" type="text" class="form-control" ng-maxlength="50" placeholder="Client Name " required>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class="col-md-6">\r\n                                        <div class="form-group required" >\r\n                                            <input name="date" type="text" class="form-control" ng-maxlength="50" placeholder="DD/MM/YYYY" required>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class="col-md-6">\r\n                                        <div class="form-group required" >\r\n                                            <input name="collebrators" type="text" class="form-control" ng-maxlength="50" placeholder="Multiple Collebrators" required>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class="col-md-3">\r\n                                        <div class="hpanel" style="border:1px dotted #434E6E">\r\n                                            <div class="panel-body">\r\n                                                <div class="text-center">\r\n                                                    <img src="images/portrait.0fa6f2b9.png">\r\n                                                </div>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class="col-md-4">\r\n                                        <div class="hpanel" style="border:1px dotted #434E6E">\r\n                                            <div class="panel-body">\r\n                                                <div class="text-center">\r\n                                                   <img src="images/ladscape.6e30e7b6.png">\r\n                                                </div>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class="col-md-4">\r\n                                        <div class="hpanel hbggreen">\r\n                                            <div class="panel-body">\r\n                                                <div class="text-center">\r\n                                                <br>\r\n                                                    <i class="pe-7s-note fa-4x"></i><br>\r\n                                                    <small>Create Proposal</small>\r\n                                                    <br><br>\r\n                                                </div>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>--> </div> <br><br><br> <div class="row"> <div class="col-md-12"> <strong> Select a Styles from the gallery</strong> <hr> </div> </div> <div class="row"> <div class="col-md-3" style="" ng-repeat="styles in sdata" ng-click="updatestyle(styles)"> <div class="hpanel hnavyblue"> <div class="panel-body"> <div class="text-center"> <i class="pe-7s-config icon-lg"></i><br> <small>{{styles.StyleName}}</small> </div> </div> </div> </div> <!--<div class="col-md-3" style="">\r\n                                        <div class="hpanel hbgblue">\r\n                                            <div class="panel-body">\r\n                                                <div class="text-center">\r\n                                                    <i class="pe-7s-config icon-lg"></i><br>\r\n                                                    <small>IT Infrastructure and Delivery</small>\r\n                                                </div>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class="col-md-3" style="">\r\n                                        <div class="hpanel hbgyellow">\r\n                                            <div class="panel-body">\r\n                                                <div class="text-center">\r\n                                                    <i class="pe-7s-config icon-lg"></i><br>\r\n                                                    <small>Application Development</small>\r\n                                                </div>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class="col-md-3" style="">\r\n                                        <div class="hpanel hbgred">\r\n                                            <div class="panel-body">\r\n                                                <div class="text-center">\r\n                                                    <i class="pe-7s-config icon-lg"></i><br>\r\n                                                    <small>Hardware/Software License quote</small>\r\n                                                </div>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>--> </div> </div> <!-- <div class="modal-footer">\r\n                                    <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>\r\n                                    <button type="button" class="btn btn-primary">Save changes</button>\r\n                                </div>--> </div> </div> <!--  </div>--> '),
            a.put("views/subscription.html", '<div id="header" ng-include="\'views/header.html\'"></div> <!-- Navigation --> <aside id="menu" ng-include="\'views/navigation.html\'"></aside> <div id="wrapper"> <div class="normalheader transition ng-scope" small-header=""> <div class="content"> <div class="ng-scope" animate-panel="" ui-view=""> <div class="row ng-scope"> <div class="col-lg-12" style=""> <div class="col-sm-3" style="" ng-repeat="info in packagedata.packages"> <div class="hpanel plan-box hgreen active"> <div class="panel-heading hbuilt text-center"> <h4 class="font-bold">{{info.name}}</h4> </div> <div class="panel-body"> <p class="text-muted"> </p> <!--<table class="table">\r\n\t\t\t\t\t\t\t<thead>\r\n\t\t\t\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t\t\t\t<td>Charges</td>\r\n\t\t\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t\t</thead>\r\n\t\t\t\t\t\t\t<tbody>\r\n\t\t\t\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t\t\t\t<td>\r\n\t\t\t\t\t\t\t\t\t\t<i class="fa fa-check-square-o"></i>\r\n\t\t\t\t\t\t\t\t\t\t{{info.monthly_charge}}\r\n\t\t\t\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t\t\t\t<td>\r\n\t\t\t\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t\t\t\t\t<td>\r\n\t\t\t\t\t\t\t\t\t\t\t<i class="fa fa-square-o"></i>\r\n\t\t\t\t\t\t\t\t\t\t\tSupport\r\n\t\t\t\t\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t\t\t</tbody>-->  <p class="text-muted">{{info.description}} </p> <h3 class="font-bold"> ${{info.monthly_charge}}/month </h3> <a class="btn btn-success btn-sm m-t-xs" href="#">Select plan</a> </div> </div> </div> </div> </div> </div> </div> </div> </div>'), a.put("views/task.html", '<div class="modal-dialog modal-lg"> <div class="normalheader transition animated fadeIn"> <div class="hpanel"> <div class="panel-body"> <div class="pull-right"> <a ng-click="closemodal()"> <i class="pe-7s-close fa-2x"></i></a> </div> </div> <div class="panel-body"> <div class="pull-right m-t-lg" id="hbreadcrumb"> <ol class="hbreadcrumb breadcrumb"> <li><a ng-href="#/main">Dashboard</a></li> <li class="active"> <span>Task Categories</span> </li> </ol> </div> <h2 class="font-light m-b-xs"> Task Categories </h2> <small></small> </div> </div> </div> <uib-alert ng-repeat="error in errors" class="display-alert" type="{{alert.type}}" close="closeAlert($index)" ng-click="closeAlert($index)" id="display-error-home">{{error}}</uib-alert> <uib-alert ng-repeat="alert in alerts" class="display-alert" type="{{alert.type}}" close="closeAlerts($index)" ng-click="closeAlerts($index)" id="display-error-home">{{alert.msg}}</uib-alert> <div class="content animate-panel" effect="zoomIn"> <div class="row"> <div class="col-lg-12"> <div class="hpanel"> <div class="panel-body"> <button class="btn btn-primary pull-right" ng-model="collapsed" ng-click="tasksection()" ng-hide="collapsed">Add New</button> <div class="takadd" ng-show="collapsed"><br> <form name="taskForm"> <h3 class="font-light m-b-xs" ng-hide="update"> Add Task Category </h3><br> <h3 class="font-light m-b-xs" ng-show="update"> Update Task Category </h3><br> <div class="form-group required" ng-class="{\'has-error\': taskForm.Taskcategory.$touched && taskForm.Taskcategory.$error.required}"> <label class="control-label">Task Name</label> <input name="Taskcategory" type="text" class="form-control" placeholder="Task Name" id="user-pass" ng-model="taskname" required> </div> </form> <button class="btn btn-primary" ng-click="insert()" ng-disabled="taskForm.$invalid" ng-hide="update">Save</button> <button class="btn btn-primary" ng-click="updatetaskdata()" ng-disabled="taskForm.$invalid" ng-show="update">Update</button> <button class="btn btn-primary" ng-click="closetask()">Cancel</button> </div> </div> <br><br> <div class="panel-body pn"> <table datatable="ng" class="table table-striped table-bordered table-hover"> <thead> <tr> <th>Name</th> <th>Created By</th> <th>Action</th> </tr> </thead> <tbody> <tr ng-repeat="detail in gettasks"> <td>{{detail.categoryname}}</td> <td>{{detail.email}}<br> {{detail.created_time}}</td> <td><a href="" title="Update" ng-click="updatetask(detail)" class="btn"><i class="glyphicon glyphicon-pencil"></i></a> <a href="" title="Delete" ng-click="deletetask(detail)" class="btn"><i class="glyphicon glyphicon-trash"></i></a></td> </tr> </tbody> </table> </div> </div> </div> </div> </div> <!--<div ui-grid="gridOptions"  ui-grid-edit ui-grid-row-edit ui-grid-cellNav ui-grid-pagination class="grid"></div>--> </div>'), a.put("views/taskcategory-box.html", '<div class="panel-body"> <p>Are You Shore Want To Delete??</p><p> <button class="btn btn-primary" type="button" ng-model="collapsed1" type="button" ng-click="delete()">Yes</button> <button class="btn btn-primary" type="button" ng-model="collapsed1" type="button" ng-click="closealeart()">NO</button> </p></div>'), a.put("views/template.html", '<!--<div id="header" ng-include="\'views/header.html\'"></div>\r\n<!-- Navigation \r\n<aside id="menu" ng-include="\'views/navigation.html\'"></aside>\r\n<div id="wrapper">--><!--<div class="modal modalnew animated fadeInRight"  id="myModal5" tabindex="-1" role="dialog"  aria-hidden="true">--> <div class="modal-dialog modal-lg"> <uib-alert ng-repeat="alert in errors" class="display-alert" type="{{alert.type}}" close="closeAlert($index)" ng-click="closeAlert($index)" id="display-error-home">{{alert}}</uib-alert> <uib-alert ng-repeat="alert in alerts" class="display-alert" type="{{alert.type}}" close="closeAlerts($index)" ng-click="closeAlert($index)" id="display-error-home">{{alert.msg}}</uib-alert> <div class="modal-content"> <div class="color-line"></div> <div class="panel-body"> <div class="pull-right"> <a ng-click="closemodal()"> <i class="pe-7s-close fa-2x"></i></a> </div> </div> <div class="modal-header"> <h4 class="modal-title">Add New Template</h4> </div> <div class="modal-body"> <div class="row"> <button type="button" class="btn btn-primary" ng-click="show=!show">New Template</button><br><br> <div ng-show="show"> <div class="col-md-6"> <div class="form-group required"> <input name="name" type="text" class="form-control" ng-maxlength="50" placeholder="Template Name" ng-model="tempname" maxlength="20" minlength="3" required> </div> </div> <div class="col-md-6"> <div class="form-group required"> <div class="dropdown"> <select class="selectpicker form-control" multiple data-toggle="dropdown" ng-options=" page.Page_id as page.PageName for page in pdata" ng-model="pagedata"> <span class="caret"></span>Select</select><br> </div> </div> </div> <button type="button" class="btn btn-primary" ng-hide="update" ng-click="create()">Create</button> <button type="button" class="btn btn-primary" ng-show="update" ng-click="updatetemp()">Update</button> </div> <!--<div class="col-md-6">\r\n                                        <div class="form-group required" >\r\n                                            <input name="date" type="text" class="form-control" ng-maxlength="50" placeholder="DD/MM/YYYY" required>\r\n                                        </div>\r\n                                    </div>\r\n                                    <!--<div class="col-md-6">\r\n                                        <div class="form-group required" >\r\n                                            <input name="collebrators" type="text" class="form-control" ng-maxlength="50" placeholder="Multiple Collebrators" required>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class="col-md-3">\r\n                                        <div class="hpanel" style="border:1px dotted #434E6E">\r\n                                            <div class="panel-body">\r\n                                                <div class="text-center">\r\n                                                    <img src="images/portrait.0fa6f2b9.png">\r\n                                                </div>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class="col-md-4">\r\n                                        <div class="hpanel" style="border:1px dotted #434E6E">\r\n                                            <div class="panel-body">\r\n                                                <div class="text-center">\r\n                                                   <img src="images/ladscape.6e30e7b6.png">\r\n                                                </div>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class="col-md-4">\r\n                                        <div class="hpanel hbggreen">\r\n                                            <div class="panel-body">\r\n                                                <div class="text-center">\r\n                                                <br>\r\n                                                    <i class="pe-7s-note fa-4x"></i><br>\r\n                                                    <small>Create Proposal</small>\r\n                                                    <br><br>\r\n                                                </div>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>--> </div> <br><br><br> <div class="row"> <div class="col-md-12"> <strong> Select a Template from the gallery</strong> <hr> </div> </div> <div class="row"> <div class="col-md-3" style="" ng-repeat="temp in p" ng-click="updatetemplate(temp)"> <div class="hpanel hnavyblue"> <div class="panel-body"> <div class="text-center"> <i class="pe-7s-config icon-lg"></i><br> <small>{{temp.template.template_name}}</small> </div> </div> </div> </div> <!--<div class="col-md-3" style="">\r\n                                        <div class="hpanel hbgblue">\r\n                                            <div class="panel-body">\r\n                                                <div class="text-center">\r\n                                                    <i class="pe-7s-config icon-lg"></i><br>\r\n                                                    <small>IT Infrastructure and Delivery</small>\r\n                                                </div>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class="col-md-3" style="">\r\n                                        <div class="hpanel hbgyellow">\r\n                                            <div class="panel-body">\r\n                                                <div class="text-center">\r\n                                                    <i class="pe-7s-config icon-lg"></i><br>\r\n                                                    <small>Application Development</small>\r\n                                                </div>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class="col-md-3" style="">\r\n                                        <div class="hpanel hbgred">\r\n                                            <div class="panel-body">\r\n                                                <div class="text-center">\r\n                                                    <i class="pe-7s-config icon-lg"></i><br>\r\n                                                    <small>Hardware/Software License quote</small>\r\n                                                </div>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>--> </div> </div> <!-- <div class="modal-footer">\r\n                                    <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>\r\n                                    <button type="button" class="btn btn-primary">Save changes</button>\r\n                                </div>--> </div> </div> <!--  </div>--> '), a.put("views/todos.html", '<div id="header" ng-include="\'views/header.html\'"></div> <!-- Navigation --> <aside id="menu" ng-include="\'views/navigation.html\'"></aside> <div id="wrapper"> <div class="content animate-panel"> <uib-alert ng-repeat="alert in alerts" class="display-alert" type="{{alert.type}}" close="closeAlerts($index)" ng-click="closeAlert($index)" id="display-error-home">{{alert.msg}}</uib-alert> <uib-alert ng-repeat="error in errors" class="display-alert" type="{{alert.type}}" close="closeAlert($index)" ng-click="closeAlert($index)" id="display-error-home">{{error}}</uib-alert> <div class="row"> <!--<div class="col-md-3" style="">\r\n\t\t<div class="hpanel panel-group">\r\n\t\t\t<div class="panel-body">\r\n\t\t\t\t\r\n\t\t\t\t\r\n\t\t\t\t<div class="text-center text-muted font-bold">All Task</div>\r\n\t\t\t\t\r\n\t\t\t\t\r\n\t\t\t\t\t\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class="panel-section"ng-repeat = "detail in todos">\r\n\t\t\t\t\t\t<div class="input-group">\r\n\t\t\t\t\t\r\n\t\t\t\t\t\t\t<span class="input-group-btn">\r\n\t\t\t\t\t\t\r\n\t\t\t\t\t\t<button class="btn-sm visible-xs visible-sm collapsed btn-default btn btn-block m-t-sm" data-target="#notes" data-toggle="collapse" type="button">\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div id="notes">\r\n\t\t\t\t\t\t<div class="panel-body note-link">\r\n\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t<div class="panel-body note-link">\r\n\t\t\t\t\t\t\t\t<a ng-click="getnotesdata(detail)">{{detail.TaskName}}<a/>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t\t\r\n\t\t\t\r\n\t\t\t\t<div class="col-md-3" style="">\r\n\t\t\t\t\t\r\n\t\t\t\t\t<div class="hpanel panel-group">\r\n\t\t\t\t\t\t<div class="panel-body">\r\n\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t<div class="text-center text-muted font-bold" >Activated</div>\r\n\t\t\t\t\t\t\t<button class="btn btn-default" type="button" ng-click="addnote()">\r\n\t\t\t\t\t\t\t<input id=\'box\' type = "checkbox" ng-change="alltaskfinish()" ng-model="alltask" >Mark all as completed</input>\r\n\t\t\t\t\t\t\t</button>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class="panel-section">\r\n\t\t\t\t\t\t\t<div class="input-group">\r\n\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t<span class="input-group-btn">\r\n\t\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t\t<button class="btn-sm visible-xs visible-sm collapsed btn-default btn btn-block m-t-sm" data-target="#notes" data-toggle="collapse" type="button">\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div id="notes">\r\n\t\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t\t<div class="panel-body note-link"  ng-repeat = "info in todos | filter: { IsActive: \'1\' }" ng-model="activetsk" >\r\n\t\t\t\t\t\t\t\t\t\t<div class="panel-body note-link">\r\n\t\t\t\t\t\t\t\t\t\t\t<input id=\'box\' type = "checkbox" ng-change="gettask(info)" ng-model="task"><a>{{info.TaskName}}<a/></input>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class="col-md-3" style="">\r\n\t\t\t\t\r\n\t\t\t\t<div class="hpanel panel-group">\r\n\t\t\t\t\t<div class="panel-body">\r\n\t\t\t\t\t\t\r\n\t\t\t\t\t\t<div class="text-center text-muted font-bold" >Completed</div>\r\n\t\t\t\t\t\t\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class="panel-section">\r\n\t\t\t\t\t\t<div class="input-group">\r\n\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t<span class="input-group-btn">\r\n\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t<button class="btn-sm visible-xs visible-sm collapsed btn-default btn btn-block m-t-sm" data-target="#notes" data-toggle="collapse" type="button">\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div id="notes">\r\n\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t<div class="panel-body note-link"  ng-repeat = "info in todos | filter: { IsActive: \'0\' }" >\r\n\t\t\t\t\t\t\t\t\t<div class="panel-body note-link">\r\n\t\t\t\t\t\t\t\t\t\t<input type="checkbox" ng-change="opentask(info)" ng-model="completetask" checked><a ng-click="getnotesdata(info)">{{info.TaskName}}<a/></input>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class="col-md-9" ng-init="note = \'note1\'" style="" >\r\n\t\t\t\t\t<div class="hpanel">\r\n\t\t\t\t\t\t<div class="panel-body">\r\n\t\t\t\t\t\t\t<div class="text-center hidden"> We couldn\'t find any notes for you. </div>\r\n\t\t\t\t\t\t\t<div>\r\n\t\t\t\t\t\t\t\t<div class="" style="">\r\n\t\t\t\t\t\t\t\t\t<div class="pull-right text-muted m-l-lg">{{date}}</div>\r\n\t\t\t\t\t\t\t\t\t<h3>Add New Task </h3>\r\n\t\t\t\t\t\t\t\t\t<input  class="form-control" placeholder="Task Name" ng-model="newnotename"> </input>\r\n\t\t\t\t\t\t\t\t\t<hr>\r\n\t\t\t\t\t\t\t\t\t<div class="note-content">\r\n\t\t\t\t\t\t\t\t\t\t<textarea class="form-control" placeholder="Task Discription" ng-model="taskdiscription"> </textarea>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t<div class="btn-group">\r\n\t\t\t\t\t\t\t\t\t\t<button class="btn btn-sm btn-default" ng-click="submittask()">\r\n\t\t\t\t\t\t\t\t\t\t<i class="fa fa-thumbs-o-up"></i>\r\n\t\t\t\t\t\t\t\t\t\tAdd\r\n\t\t\t\t\t\t\t\t\t\t</button>\r\n\t\t\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>--> <!--<div class="col-md-9" ng-init="note = \'note1\'" style="" ng-show="display">\r\n\t\t\t\t\t\t<div class="hpanel">\r\n\t\t\t\t\t\t\t\t<div class="panel-body">\r\n\t\t\t\t\t\t\t\t\t\t<div class="text-center hidden"> We couldn\'t find any notes for you. </div>\r\n\t\t\t\t\t\t\t\t\t\t<div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class="" style="">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class="pull-right text-muted m-l-lg"></div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<h3>Publishing packages</h3>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input  class="form-control" ng-model="taskdiscription"> </input>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<hr>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class="note-content">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<textarea class="form-control" ng-model="taskdiscription"> </textarea>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class="btn-group">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<button class="btn btn-sm btn-default" >\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i class="fa fa-thumbs-o-up"></i>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tSave\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</button>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<button class="btn btn-sm btn-default">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i class="fa fa-trash"></i>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tRemove\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</button>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t</div>--> <div class="col-lg-12"> <h3>ToDo List</h3><br> <button class="btn w-xs btn-primary" type="button" ng-click="alltodos()" ng-style="all">All</button> <button class="btn w-xs btn-primary" type="button" ng-click="activatedtodos()" ng-style="active">Active</button> <button class="btn w-xs btn-primary" type="button" ng-click="completedtodos()" ng-style="complete">Completed</button> <br> <br> </div> </div> <div class="row"> <div class="col-lg-12"> <div class="form-group"><textarea class="form-control" placeholder="What needs to be done? Start writing your task in this text field" name="message" rows="3" ng-model="newnotename"></textarea></div> </div> <div class="col-lg-12"> <button class="btn w-xs btn-primary pull-right" ng-click="submittask()" ng-hide="update"> Save </button> <button class="btn w-xs btn-primary pull-right" ng-click="updatetask()" ng-show="update"> update </button> </div> <div class="col-lg-12"> <br> <div class="hpanel forum-box" ng-repeat="detail in todos" ng-show="showalltask"> <div class="panel-body"> <div class="row"> <div class="col-md-11 forum-heading border-right"> <div class="form-group"> <div> <label> <h4>{{detail.TaskName}}</h4> </label> </div> </div> </div> <div class="col-md-1"> <div class="form-group" style="margin-top:15px"> <span> <!--<i class="fa fa-edit" ng-click="edittodo(detail)"></i>Edit</span>--> </span></div> </div> </div> </div> </div> <div class="hpanel forum-box" ng-repeat="info in todos | filter: { IsActive: \'1\' }" ng-model="activetsk" ng-show="showActivatedtask"> <div class="panel-body"> <div class="row"> <div class="col-md-11 forum-heading border-right"> <div class="form-group"> <div class="checkbox"> <label> <input type="checkbox" ng-change="gettask(info)" ng-model="task" class="i-checks"> <h4>{{info.TaskName}}</h4> </label> </div> </div> </div> <div class="col-md-1"> <div class="form-group" style="margin-top:15px"> <button ng-click="edittodo(info)">Edit</button> </div> </div> </div> </div> </div> <div class="hpanel forum-box" ng-repeat="info in todos | filter: { IsActive: \'0\' }" ng-show="showcompeletedtask"> <div class="panel-body"> <div class="row"> <div class="col-md-11 forum-heading border-right"> <div class="form-group"> <div class="checkbox"> <label> <input type="checkbox" ng-change="opentask(info)" ng-model="completetask" class="i-checks"> <h4>{{info.TaskName}}</h4> </label> </div> </div> </div> <div class="col-md-1"> <div class="form-group" style="margin-top:15px"> <!--<button ng-click="edittodo(info)" >Edit</button>--> </div> </div> </div> </div> </div> <div class="hpanel forum-box"> <div class="panel-body" ng-show="showActivatedtask"> <div class="row"> <div class="col-md-11 forum-heading border-right"> <div class="form-group"> <div class="checkbox"> <label> <input type="checkbox" class="i-checks" ng-change="alltaskfinish()" ng-model="alltask"> <h4> Mark all as completed</h4> </label> </div> </div> </div> <div class="col-md-1"> <div class="form-group" style="margin-top:15px"> </div> </div> </div> </div> </div> </div> </div> <br><br><br><br><br><br><br><br> </div> </div> '), a.put("views/users.html", '<div id="header" ng-include="\'views/header.html\'"></div> <!-- Navigation --> <aside id="menu" ng-include="\'views/navigation.html\'"></aside> <style type="text/css">.m-t-xl{margin-top:15px;}\r\n.newbtn{border-radius: 0; padding:54.4% 0px;}</style> <div id="wrapper"> <div class="normalheader transition animated fadeIn"> <div class="hpanel"> <div class="panel-body"> <div class="pull-right m-t-lg" id="hbreadcrumb"> <ol class="hbreadcrumb breadcrumb"> <li><a href="index.html">Dashboard</a></li> <li class="active"> <span>Users</span> </li> </ol> </div> <h2 class="font-light m-b-xs"> Users </h2> <small></small> </div> </div> </div> <div class="content" animate-panel effect="zoomIn"> <div class="row"> <div class="col-lg-12"> <div class="hpanel"> <div class="panel-body"> <uib-alert ng-repeat="alert in alerts" class="display-alert" type="{{alert.type}}" close="closeAlerts($index)" ng-click="closeAlerts($index)" id="display-error-home">{{alert.msg}}</uib-alert> <uib-alert ng-repeat="error in errors" class="display-alert" type="{{alert.type}}" close="closeAlert($index)" ng-click="closeAlert($index)" id="display-error-home">{{error}}</uib-alert> <button class="btn btn-primary pull-right" ng-model="collapsed" ng-click="collapsed=!collapsed" ng-hide="hideadd" ng-disabled="!isAdmin">Add New</button> <div class="takadd" ng-show="collapsed"> <form name="resource"> <h3 ng-hide="update">New user</h3> <h3 ng-show="update">Update user</h3> <a id="top"></a> <div class="row"> <div class="col-md-4"> <div class="form-group required" ng-class="{\'has-error\': resource.rname.$touched && resource.rname.$error.required}"> <label class="control-label">First Name</label><br> <input name="rname" type="text" class="form-control" placeholder="First Name" id="user-pass" ng-model="fname" only-words ng-maxlength="20" ng-minlength="3" required> <span ng-show="resource.rname.$error.minlength" class="denger">First name is too short.</span> <span ng-show="resource.rname.$error.maxlength" class="has-error">First name is too long.</span> </div> </div> <div class="col-md-4"> <div class="form-group required" ng-class="{\'has-error\': resource.ltname.$touched && resource.ltname.$error.required}"> <label class="control-label">Last Name</label><br> <input name="ltname" type="text" only-words ng-maxlength="20" ng-minlength="3" class="form-control" placeholder="Last Name" id="user-pass" ng-model="lname" required> <span ng-show="resource.ltname.$error.minlength" class="denger">Last name is too short.</span> <span ng-show="resource.ltname.$error.maxlength" class="has-error">Last name is too long.</span> </div> </div> </div> <div class="row"> <div class="col-md-4"> <label class="control-label">User Email</label><br> <div class="form-group required" ng-class="{\'has-error\': resource.email.$touched && resource.email.$error.required}"> <input name="email" ng-hide="update" type="text" class="form-control" placeholder="Email" id="user-pass" ng-model="email" required ng-pattern="/^[a-z]+[a-z0-9._]+@[a-z]+\\.[a-z.]{2,5}$/"> <span ng-show="resource.email.$touched && resource.email.$invalid" class="denger">Invalid Email</span> <p ng-show="update">{{email}}</p> </div> </div> <div class="col-md-4"> <div class="dropdown"> <label class="control-label">Roles</label><br> <select class="form-control dropdown-toggle" type="button" data-toggle="dropdown" ng-model="utype" ng-options="user.id as user.type for user in usertype"> <p>Select</p></select> </div> </div> </div> <div class="row"> <div class="col-md-8" ng-hide="update"> <div class="form-group required" ng-class="{\'has-error\': resource.dailyprce.$touched && resource.dailyprce.$error.required}"> <label class="control-label">Welcome Message</label><br> <textarea class="form-control" rows="5" id="comment" placeholder="Welcome Message For user" ng-model="message"></textarea> </div> </div> </div> <div class="row"> <div class="col-md-12"> <button class="btn btn-primary" ng-click="insertuser()" ng-disabled="resource.$invalid" ng-hide="update">save</button> <button class="btn btn-primary" ng-click="updateuser()" ng-disabled="resource.$invalid" ng-show="update">Update</button> <button class="btn btn-primary" ng-click="closeuser()">Cancel</button> </div> </div> </form></div> </div> </div> </div> </div> <div class="row"> <div class="col-md-12"> <div class="col-md-6"> <div class="row" ng-repeat="info in userdata.users"> <div class="col-sm-11" style="padding:0px"> <div class="hpanel"> <div class="panel-body"> <div class="row"> <div class="col-sm-12"> <div class="row"> <div class="col-sm-12"> <div class="col-sm-6 border-right"> <div class="row"> <!--<div class="col-sm-4" >\r\n                              <!--<img class="img-circle" src="images/a1.cfc46f77.jpg" alt="logo">\r\n                            </div>--> <div class="col-sm-8"> <div class="m-t-sm"> <strong>{{info.first_name}}</strong> <p class="small" ng-if="info.is_tenant_admin == 1"><i class="fa fa-user"></i> &nbsp; Admin</p> </div> </div> </div> </div> <div class="col-sm-6"> <div class="row"> <div class="col-sm-12"> <div class="m-t-sm"> <p class="small">{{info.email}}</p> </div> </div> </div> </div> </div> <div class="col-sm-12"> <hr> </div> <div class="col-sm-12"> <div class="row"> <div class="col-sm-3 border-right"> <div class="m-t-sm"><strong>Proposals</strong></div> <h2 class="text-info">{{info.proposals_submitted}}</h2> </div> <div class="col-sm-5 border-right"> <div class="m-t-sm"><strong>Value</strong></div> <h2 class="text-info">{{info.proposals_value}}</h2> </div> <div class="col-sm-4"> <div class="m-t-sm"><strong>Win/Loss Ratio</strong></div> <h2 class="text-info">{{info.proposals_ratio}}%</h2> </div> </div> </div> </div> </div> </div> </div> </div> </div> <div class="col-sm-1" style="padding:0px"> <div class="hpanel"> <div class="panel-body no-padding"> <div class="col-sm-12 no-padding"><a class="btn btn-info btn-block newbtn"> <i class="fa fa-user"></i></a></div> <div class="col-sm-12 no-padding"><a class="btn btn-info btn-block newbtn" ng-click="edituser(info)"> <i class="fa fa-edit"></i></a></div> <div class="col-sm-12 no-padding"><a class="btn btn-info btn-block newbtn" ng-click="deleteuser(info)"> <i class="fa fa-close"></i></a></div> </div> </div> </div> </div> </div> </div> </div> </div> </div> <!--<div class="normalheader transition ng-scope" small-header="">\r\n  <div class="content">\r\n    <div class="ng-scope" animate-panel="" ui-view="">\r\n      <div class="row ng-scope">\r\n        <div class="col-lg-3" style="">\r\n          <div class="hpanel hgreen contact-panel"  ng-repeat="info in userdata.users">\r\n            <div class="panel-body"> \r\n              <div>\r\n              <a ng-show="isAdmin" ng-click="edituser(info)" style="float: right;"><i class="glyphicon glyphicon-pencil"></i></a><br>\r\n              <a ng-show="isAdmin" ng-click="deleteuser(info)"   style="float: left;"><i class="glyphicon glyphicon-trash"></i></a><br>\r\n            </div>\r\n              <span  class="label label-success pull-right" ng-if="info.is_tenant_admin == 1">Admin</span>\r\n              \r\n              <h3>\r\n              <a href="">{{info.first_name}}</a>\r\n              </h3>\r\n              <div class="text-muted font-bold m-b-xs">{{info.email}}</div>\r\n              <p></p>\r\n            </div>\r\n            <div class="panel-footer contact-footer">\r\n              \r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n\r\n\r\n</div>--> <div class="content" animate-panel effect="zoomIn"> </div>'), a.put("views/users_old.html", '<div id="header" ng-include="\'views/header.html\'"></div> <!-- Navigation --> <aside id="menu" ng-include="\'views/navigation.html\'"></aside> <div id="wrapper"> <div class="normalheader transition animated fadeIn"> <div class="hpanel"> <div class="panel-body"> <div class="pull-right m-t-lg" id="hbreadcrumb"> <ol class="hbreadcrumb breadcrumb"> <li><a ng-href="#/main">Dashboard</a></li> <li class="active"> <span>Users</span> </li> </ol> </div> <h2 class="font-light m-b-xs"> Users </h2> <small></small> </div> </div> </div> <div class="content" animate-panel effect="zoomIn"> <uib-alert ng-repeat="alert in alerts" class="display-alert" type="{{alert.type}}" close="closeAlerts($index)" ng-click="closeAlerts($index)" id="display-error-home">{{alert.msg}}</uib-alert> <uib-alert ng-repeat="error in errors" class="display-alert" type="{{alert.type}}" close="closeAlert($index)" ng-click="closeAlert($index)" id="display-error-home">{{error}}</uib-alert> <div class="row"> <div class="col-lg-12"> <div class="hpanel"> <div class="panel-body"> <button class="btn btn-primary pull-right" ng-model="collapsed" ng-click="collapsed=!collapsed" ng-disabled="!isAdmin" ng-hide="hideadd">New User</button> <div class="takadd" ng-show="collapsed"> <form name="resource"> <div class="row"> <div class="col-md-4"> <div class="form-group required" ng-class="{\'has-error\': resource.rname.$touched && resource.rname.$error.required}"> <input name="rname" type="text" class="form-control" placeholder="First Name" id="user-pass" ng-model="fname" required> </div> </div> <div class="col-md-4"> <div class="form-group required" ng-class="{\'has-error\': resource.dailycost.$touched && resource.dailycost.$error.required}"> <input name="dailycost" type="text" class="form-control" placeholder="Last Name" id="user-pass" ng-model="lname" required> </div> </div><br> </div><br> <div class="row"> <div class="col-md-4"> <div class="dropdown"> <input name="dailycost" ng-hide="update" type="text" class="form-control" placeholder="email" id="user-pass" ng-model="email" required> <p ng-show="update">{{email}}</p> </div> </div> <div class="col-md-4"> <div class="dropdown"> <select class="form-control dropdown-toggle" type="button" data-toggle="dropdown" ng-model="utype" ng-options="user.id as user.type for user in usertype"> <p>Select</p></select> </div> </div> </div> <br> <div class="row"> <div class="col-md-8"> <div class="form-group required" ng-class="{\'has-error\': resource.dailyprce.$touched && resource.dailyprce.$error.required}"> <textarea ng-hide="update" class="form-control" rows="5" id="comment" placeholder="Welcome Message For user" ng-model="message"></textarea> </div> </div> </div><br> <div class="row"> <div class="col-md-12"> <button class="btn btn-primary" ng-click="insertuser()" ng-disabled="resource.$invalid" ng-hide="update">save</button> <button class="btn btn-primary" ng-click="updateuser()" ng-disabled="resource.$invalid" ng-show="update">Update</button> <button class="btn btn-primary" ng-click="closeuser()">Close</button> </div> </div> </form></div> </div> </div> </div> </div> </div> <div class="normalheader transition ng-scope" small-header=""> <div class="content"> <div class="ng-scope" animate-panel="" ui-view=""> <div class="row ng-scope"> <div class="col-lg-3" style=""> <div class="hpanel hgreen contact-panel" ng-repeat="info in userdata.users"> <div class="panel-body"> <div> <a ng-show="isAdmin" ng-click="edituser(info)" style="float: right"><i class="glyphicon glyphicon-pencil"></i></a><br> <a ng-show="isAdmin" ng-click="deleteuser(info)" style="float: left"><i class="glyphicon glyphicon-trash"></i></a><br> </div> <span class="label label-success pull-right" ng-if="info.is_tenant_admin == 1">Admin</span> <h3> <a href="">{{info.first_name}}</a> </h3> <div class="text-muted font-bold m-b-xs">{{info.email}}</div> <p></p> </div> <div class="panel-footer contact-footer"> </div> </div> </div> </div> </div> </div> </div></div>'),
            a.put("views/vendors.html", '<!--<div id="header" ng-include="\'views/header.html\'"></div>\r\n<!-- Navigation \r\n<aside id="menu" ng-include="\'views/navigation.html\'"></aside>\r\n<div id="wrapper">--> <div class="modal-dialog modal-lg"> <div class="normalheader transition animated fadeIn"> <div class="hpanel"> <div class="panel-body"> <div class="pull-right"> <a ng-click="closemodal()"> <i class="pe-7s-close fa-2x"></i></a> </div> </div> <div class="panel-body"> <div class="pull-right m-t-lg" id="hbreadcrumb"> <ol class="hbreadcrumb breadcrumb"> <li><a ng-href="#/main">Dashboard</a></li> <li class="active"> <span>Vendor</span> </li> </ol> </div> <h2 class="font-light m-b-xs"> Vendor </h2> <small></small> </div> </div> </div> <div class="setting"> <uib-alert ng-repeat="alert in alerts" class="display-alert" type="{{alert.type}}" close="closeAlerts($index)" ng-click="closeAlerts($index)" id="display-error-home">{{alert.msg}}</uib-alert> <uib-alert ng-repeat="error in errors" class="display-alert" type="{{alert.type}}" close="closeAlert($index)" ng-click="closeAlert($index)" id="display-error-home">{{error}}</uib-alert> <div class="content" animate-panel effect="zoomIn"> <div class="row"> <div class="col-lg-12"> <div class="hpanel"> <div class="panel-body"> <button class="btn btn-primary pull-right" ng-model="collapsed" ng-click="vendorsection()" ng-hide="collapsed">Add New</button><br> <div class="takadd" ng-show="collapsed"><br> <h3 class="font-light m-b-xs" ng-hide="hidesubmit"> Add New Vendor </h3><br> <h3 class="font-light m-b-xs" ng-show="hidesubmit"> Update Vendor </h3><br> <form name="vendor"> <div class="row"> <div class="col-md-4"> <div class="form-group required" ng-class="{\'has-error\': vendor.ftname.$touched && vendor.ftname.$error.required}"> <label class="control-label">First Name </label><br> <input name="ftname" type="text" only-words ng-maxlength="20" ng-minlength="3" class="form-control" placeholder="First name" id="user-pass" ng-model="fname" required> <span ng-show="vendor.ftname.$error.minlength" class="denger">First name is too short.</span> <span ng-show="vendor.ftname.$error.maxlength" class="has-error">First name is too long.</span> </div> </div> <div class="col-md-4"> <div class="form-group required" ng-class="{\'has-error\': vendor.ltname.$touched && vendor.ltname.$error.required}"> <label class="control-label">Last Name </label><br> <input name="ltname" type="text" only-words class="form-control" placeholder="Last name" id="user-pass" ng-model="lname" required> <span ng-show="vendor.ltname.$error.minlength" class="denger">Last name is too short.</span> <span ng-show="vendor.ltname.$error.maxlength" class="has-error">Last name is too long.</span> </div> </div> </div> <div class="row"> <div class="col-md-4"> <div class="form-group required" ng-class="{\'has-error\': vendor.email.$touched && vendor.email.$error.required}"> <label class="control-label">Email </label><br> <input name="email" type="text" class="form-control" placeholder="Email" id="user-pass" ng-model="email" required ng-pattern="/^[a-z]+[a-z0-9._]+@[a-z]+\\.[a-z.]{2,5}$/"> <span ng-show="vendor.email.$touched && vendor.email.$invalid" class="denger">Invalid Email</span> </div> </div> <div class="col-md-4"> <div class="form-group required" ng-class="{\'has-error\': vendor.vname.$touched && vendor.vname.$error.required}"> <label class="control-label">Vendor Name </label><br> <input name="vname" type="text" only-words class="form-control" placeholder="Vendor name" id="user-pass" ng-model="vendorname" ng-maxlength="20" ng-minlength="3" required> <span ng-show="vendor.ltname.$error.minlength" class="denger">Vendor name is too short.</span> <span ng-show="vendor.ltname.$error.maxlength" class="has-error">Vendor name is too long.</span> </div> </div> </div> <div class="row"> <div class="col-md-4"> <div class="form-group required" ng-class="{\'has-error\': vendor.dname.$touched && vendor.dname.$error.required}"> <label class="control-label">Display Name </label><br> <input name="dname" type="text" only-words class="form-control" placeholder="Display name" id="user-pass" ng-model="displayname" ng-maxlength="20" ng-minlength="3" required> <span ng-show="vendor.dname.$error.minlength" class="denger">Display name is too short.</span> <span ng-show="vendor.dname.$error.maxlength" class="has-error">Display name is too long.</span> </div> </div> <div class="col-md-4"> <div class="form-group required" ng-class="{\'has-error\': vendor.vid.$touched && vendor.vid.$error.required}"> <label class="control-label">Vendor Code </label><br> <input name="vid" type="text" class="form-control" placeholder="Vendor Code" id="user-pass" ng-model="vendorid" required> </div> </div> </div> <div class="row"> <div class="col-md-4"> <div class="form-group required" ng-class="{\'has-error\': vendor.phn.$touched && vendor.phn.$error.required}"> <label class="control-label">Phone Number </label><br> <input name="phn" type="text" class="form-control" placeholder="Phone number" id="user-pass" ng-model="phone" ng-maxlength="20" ng-minlength="8" ng-pattern="ph_numbr" required> <span ng-show="vendor.phn.$touched && vendor.phn.$invalid" class="denger">Phone number is invalid.</span> <span ng-show="vendor.phn.$error.minlength" class="denger">Phone number is too short.</span> <span ng-show="vendor.phn.$error.maxlength" class="has-error">Phone number is too long.</span> </div> </div> <div class="col-md-4"> <div class="form-group required" ng-class="{\'has-error\': vendor.mnumber.$touched && vendor.mnumber.$error.required}"> <label class="control-label">Mobile Number </label><br> <input name="mnumber" type="text" ng-maxlength="20" ng-minlength="8" class="form-control" placeholder="Mobile number" id="user-pass" ng-model="mobile" ng-pattern="ph_numbr" required> <span ng-show="vendor.mnumber.$touched && vendor.mnumber.$invalid" class="denger">Mobile number is invalid.</span> <span ng-show="vendor.mnumber.$error.minlength" class="denger">Mobile number is too short.</span> <span ng-show="vendor.mnumber.$error.maxlength" class="has-error">Mobile number is too long.</span> </div> </div> </div> <div class="row"> <div class="col-md-4"> <div class="form-group required" ng-class="{\'has-error\': vendor.site.$touched && vendor.site.$error.required}"> <label class="control-label">Website Url </label> <input name="site" type="url" class="form-control" placeholder="Website url" id="user-pass" ng-model="url" required> <span class="error" ng-show="vendor.site.$error.url"> Not valid url!</span> </div> </div> <div class="col-md-4"> <div class="form-group required" ng-class="{\'has-error\': vendor.addressdetail.$touched && vendor.addressdetail.$error.required}"> <label class="control-label">Street address </label> <input name="addressdetail" type="text" class="form-control" placeholder="Street address" id="user-pass" ng-model="addressdetail" required> </div> </div> </div> <div class="row"> <div class="col-md-4"><label class="control-label">Country </label><br> <div class="dropdown"> <select class="form-control dropdown-toggle" type="button" data-toggle="dropdown" ng-options="value.countryid as value.countryname for value in allProducts" ng-model="country"> <span class="caret"></span>Country:{{orgdata[0].country_id}}</select> </div> </div> <div class="col-md-4"><label class="control-label">State </label><br> <div class="dropdown"> <select class="form-control dropdown-toggle" type="button" data-toggle="dropdown" ng-options="value.stateid as value.statename for value in allstates | filter: { countryid:country }" ng-model="state" ng-init="state = allstates[0]"> <span class="caret"></span></select> </div> </div> </div><br> <div class="row"> <div class="col-md-4"> <div class="form-group required" ng-class="{\'has-error\': vendor.city.$touched && vendor.city.$error.required}"> <label class="control-label">City </label><br> <input name="city" type="text" only-words class="form-control" placeholder="City" id="user-pass" ng-model="city" required> </div> </div> <div class="col-md-4"> <div class="form-group required" ng-class="{\'has-error\': vendor.pcode.$touched && vendor.pcode.$error.required}"> <label class="control-label">Postal Code </label><br> <input name="pcode" type="text" class="form-control" placeholder="Postal code" id="user-pass" ng-model="pcode" required ng-minlength="4"> <span ng-show="clientform.pcode.$error.minlength" class="denger">Postal Code is too short.</span> </div> </div> </div> <div class="row"> <div class="col-md-8"> <div class="form-group required" ng-class="{\'has-error\': vendor.smry.$touched && vendor.smry.$error.required}"> <label class="control-label">Detailed Summary </label><br> <textarea class="form-control smry" rows="5" id="comment" placeholder="Detailed Summary" ng-model="summary"></textarea> </div> </div> </div> </form> <button class="btn btn-primary" ng-model="collapsed" ng-click="submitvendor()" ng-hide="hidesubmit" ng-disabled="vendor.$invalid">Save</button> <button class="btn btn-primary" ng-model="collapsed" ng-click="updatevendorblock()" ng-show="hidesubmit" ng-disabled="vendor.$invalid">Update</button> <button class="btn btn-primary" ng-click="closevendor()">Cancel</button> </div> </div> <br><br> <div class="panel-body pn"> <table datatable="ng" class="table table-striped table-bordered table-hover"> <thead> <tr> <th>Name</th> <th>Mobile Number</th> <th>Created by</th> <th>Action</th> </tr> </thead> <tbody> <tr ng-repeat="detail in vendorsdata"> <td>{{detail.displayname}}</td> <td>{{detail.mobile}}</td> <td>{{detail.created_users_email}}<br> {{detail.created_time}}</td> <td><a href="" title="Delete Category" ng-click="updatevendor(detail)" class="btn"><i class="glyphicon glyphicon-pencil"></i></a> <a href="" title="Delete Category" ng-click="deletevendor(detail)" class="btn"><i class="glyphicon glyphicon-trash"></i></a></td> </tr> </tbody> </table> </div> </div> </div> </div> </div> </div></div>'), a.put("views/vendors_old.html", '<div id="header" ng-include="\'views/header.html\'"></div> <!-- Navigation --> <aside id="menu" ng-include="\'views/navigation.html\'"></aside> <div id="wrapper"> <div class="normalheader transition animated fadeIn"> <div class="hpanel"> <div class="panel-body"> <div class="pull-right m-t-lg" id="hbreadcrumb"> <ol class="hbreadcrumb breadcrumb"> <li><a ng-href="#/main">Dashboard</a></li> <li class="active"> <span>Vendor</span> </li> </ol> </div> <h2 class="font-light m-b-xs"> Vendor </h2> <small></small> </div> </div> </div> <div class="setting"> <uib-alert ng-repeat="alert in alerts" class="display-alert" type="{{alert.type}}" close="closeAlerts($index)" ng-click="closeAlerts($index)" id="display-error-home">{{alert.msg}}</uib-alert> <uib-alert ng-repeat="error in errors" class="display-alert" type="{{alert.type}}" close="closeAlert($index)" ng-click="closeAlert($index)" id="display-error-home">{{error}}</uib-alert> <div class="content" animate-panel effect="zoomIn"> <div class="row"> <div class="col-lg-12"> <div class="hpanel"> <div class="panel-body"> <button class="btn btn-primary pull-right" ng-model="collapsed" ng-click="vendorsection()">New Vendor</button><br> <div class="takadd" ng-show="collapsed"><br> <form name="vendor"> <div class="row"> <div class="col-md-4"> <div class="form-group required" ng-class="{\'has-error\': vendor.ftname.$touched && vendor.ftname.$error.required}"> <input name="ftname" type="text" class="form-control" placeholder="First name" id="user-pass" ng-model="fname" required> </div> </div> <div class="col-md-4"> <div class="form-group required" ng-class="{\'has-error\': vendor.ltname.$touched && vendor.ltname.$error.required}"> <input name="ltname" type="text" class="form-control" placeholder="Last name" id="user-pass" ng-model="lname" required> </div> </div> </div><br> <div class="row"> <div class="col-md-4"> <div class="form-group required" ng-class="{\'has-error\': vendor.email.$touched && vendor.email.$error.required}"> <input name="email" type="text" class="form-control" placeholder="Email" id="user-pass" ng-model="email" required> </div> </div> <div class="col-md-4"> <div class="form-group required" ng-class="{\'has-error\': vendor.vname.$touched && vendor.vname.$error.required}"> <input name="vname" type="text" class="form-control" placeholder="Vendor name" id="user-pass" ng-model="vendorname" required> </div> </div> </div><br> <div class="row"> <div class="col-md-4"> <div class="form-group required" ng-class="{\'has-error\': vendor.dname.$touched && vendor.dname.$error.required}"> <input name="dname" type="text" class="form-control" placeholder="Display name" id="user-pass" ng-model="displayname" required> </div> </div> <div class="col-md-4"> <div class="form-group required" ng-class="{\'has-error\': vendor.vid.$touched && vendor.vid.$error.required}"> <input name="vid" type="text" class="form-control" placeholder="Vendor Code" id="user-pass" ng-model="vendorid" required> </div> </div> </div><br> <div class="row"> <div class="col-md-4"> <div class="form-group required" ng-class="{\'has-error\': vendor.phn.$touched && vendor.phn.$error.required}"> <input name="phn" type="text" class="form-control" placeholder="Phone number" id="user-pass" ng-model="phone" required> </div> </div> <div class="col-md-4"> <div class="form-group required" ng-class="{\'has-error\': vendor.mnumber.$touched && vendor.mnumber.$error.required}"> <input name="mnumber" type="text" class="form-control" placeholder="Mobile number" id="user-pass" ng-model="mobile" required> </div> </div><br> </div><br> <div class="row"> <div class="col-md-4"> <div class="form-group required" ng-class="{\'has-error\': vendor.site.$touched && vendor.site.$error.required}"> <input name="site" type="text" class="form-control" placeholder="Website url" id="user-pass" ng-model="url" required> </div> </div> <div class="col-md-4"> <div class="form-group required" ng-class="{\'has-error\': vendor.addressdetail.$touched && vendor.addressdetail.$error.required}"> <input name="addressdetail" type="text" class="form-control" placeholder="Street address" id="user-pass" ng-model="addressdetail" required> </div> </div> </div><br> <div class="row"> <div class="col-md-4"> <div class="dropdown"> <select class="form-control dropdown-toggle" type="button" data-toggle="dropdown" ng-options="value.countryid as value.countryname for value in allProducts" ng-model="country"> <span class="caret"></span>Country:{{orgdata[0].country_id}}</select> </div> </div> <div class="col-md-4"> <div class="dropdown"> <select class="form-control dropdown-toggle" type="button" data-toggle="dropdown" ng-options="value.countryid as value.statename for value in allstates | filter: { countryid:country }" ng-model="state" ng-init="state = allstates[0]"> <span class="caret"></span></select> </div> </div> </div><br> <div class="row"> <div class="col-md-4"> <div class="form-group required" ng-class="{\'has-error\': vendor.city.$touched && vendor.city.$error.required}"> <input name="city" type="text" class="form-control" placeholder="City" id="user-pass" ng-model="city" required> </div> </div> <div class="col-md-4"> <div class="form-group required" ng-class="{\'has-error\': vendor.pcode.$touched && vendor.pcode.$error.required}"> <input name="pcode" type="text" class="form-control" placeholder="Postal code" id="user-pass" ng-model="pcode" required> </div> </div> </div><br> <div class="row"> <div class="col-md-8"> <div class="form-group required" ng-class="{\'has-error\': vendor.smry.$touched && vendor.smry.$error.required}"> <textarea class="form-control smry" rows="5" id="comment" placeholder="Detailed Summary" ng-model="summary"></textarea> </div> </div> </div><br> </form> <button class="btn btn-primary" ng-model="collapsed" ng-click="submitvendor()" ng-hide="hidesubmit" ng-disabled="vendor.$invalid">Add</button> <button class="btn btn-primary" ng-model="collapsed" ng-click="updatevendorblock()" ng-show="hidesubmit" ng-disabled="vendor.$invalid">Update</button> <button class="btn btn-primary" ng-click="closevendor()">Close</button> </div> </div> <br><br> <div class="panel-body pn"> <table datatable="ng" class="table table-striped table-bordered table-hover"> <thead> <tr> <th>Name</th> <th>Action</th> </tr> </thead> <tbody> <tr ng-repeat="detail in vendorsdata"> <td>{{detail.displayname}}</td> <td><a href="" title="Delete Category" ng-click="updatevendor(detail)" class="btn"><i class="glyphicon glyphicon-pencil"></i></a> <a href="" title="Delete Category" ng-click="deletevendor(detail)" class="btn"><i class="glyphicon glyphicon-trash"></i></a></td> </tr> </tbody> </table> </div> </div> </div> </div> </div> </div></div>')
    }]);