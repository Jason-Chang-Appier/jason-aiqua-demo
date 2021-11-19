var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Panel = function (_React$Component) {
    _inherits(Panel, _React$Component);

    function Panel(props) {
        _classCallCheck(this, Panel);

        var _this = _possibleConstructorReturn(this, (Panel.__proto__ || Object.getPrototypeOf(Panel)).call(this, props));

        _this.state = {
            emailList: Array(),
            appId: '',
            appToken: '',
            unsubEmail: '',
            curPage: Array(),
            pagination: 25,
            search: '',
            sendgridCred: ''
        };
        _this.handleAppId = _this.handleAppId.bind(_this);
        _this.handleAppToken = _this.handleAppToken.bind(_this);
        _this.handleInsert = _this.handleInsert.bind(_this);
        _this.handleSubmit = _this.handleSubmit.bind(_this);
        _this.handleSearch = _this.handleSearch.bind(_this);
        _this.handleSendgridCred = _this.handleSendgridCred.bind(_this);
        return _this;
    }

    _createClass(Panel, [{
        key: 'handleAppId',
        value: function handleAppId(event) {
            this.setState({ appId: event.target.value });
        }
    }, {
        key: 'handleAppToken',
        value: function handleAppToken(event) {
            this.setState({ appToken: event.target.value });
        }
    }, {
        key: 'handleInsert',
        value: function handleInsert(event) {
            this.setState({ unsubEmail: event.target.value });
        }
    }, {
        key: 'handleSearch',
        value: function handleSearch(event) {
            this.setState({ search: event.target.value });
        }
    }, {
        key: 'handleSendgridCred',
        value: function handleSendgridCred(event) {
            this.setState({ sendgridCred: event.target.value });
        }
    }, {
        key: 'handleSubmit',
        value: function handleSubmit(event) {
            var _this2 = this;

            var unsubEmail = this.state.unsubEmail;
            var appId = this.state.appId;
            var token = 'Token ' + this.state.appToken;
            if (unsubEmail !== '') {
                console.log('insert new unsub email.' + unsubEmail);
                var insertHttp = new XMLHttpRequest();
                var insertURL = 'https://api.qgraph.io/api/v3/users/unsubscribe';
                insertHttp.open('POST', insertURL, false);
                insertHttp.setRequestHeader('appid', appId);
                insertHttp.setRequestHeader('authorization', token);
                var data = Object();
                data['emails'] = [this.state.unsubEmail];
                insertHttp.send(JSON.stringify(data));

                this.setState({
                    'unsubEmail': ''
                });
            }

            this.setState({
                emailList: Array()
            });
            event.preventDefault();
            var http = new XMLHttpRequest();
            var url = 'https://api.qgraph.io/api/v3/users/?unsubscribed=true';
            http.open("GET", url);
            http.setRequestHeader('appid', appId);
            http.setRequestHeader('authorization', token);
            http.onreadystatechange = function () {
                if (http.readyState == 4 && http.status == 200) {
                    var searchTerm = _this2.state.search;
                    var response = JSON.parse(http.responseText)['emails'];
                    if (searchTerm !== '') {
                        response = response.filter(function (str) {
                            return str.includes(searchTerm);
                        });
                    }
                    if (response.length > 0) {
                        var length = response.length;
                        var curList = _this2.state.emailList;
                        var pagination = Math.ceil(length / _this2.state.pagination);
                        var curPage = Array(pagination).fill(null);
                        curPage[0] = true;

                        _this2.setState({
                            emailList: curList.concat(response),
                            curPage: curPage
                        });
                    } else {
                        alert('Find no emails.');
                    }
                }
            };
            http.onError = function () {
                alert('Something');
            };
            http.send();
        }
    }, {
        key: 'handleDelete',
        value: function handleDelete(idx) {
            var appId = this.state.appId;
            var token = 'Token ' + this.state.appToken;
            var delHttp = new XMLHttpRequest();
            var delUrl = 'https://api.qgraph.io/api/v3/users/subscribe';
            delHttp.open('POST', delUrl, false);
            delHttp.setRequestHeader('appid', appId);
            delHttp.setRequestHeader('authorization', token);
            var data = Object();
            data['emails'] = [this.state.emailList[idx]];
            delHttp.send(JSON.stringify(data));

            // if sendgrid cred is provided, also re-sub the email in sendgrid
            var sendgridCred = this.state.sendgridCred;
            if (sendgridCred !== '') {
                var delSendgridHttp = new XMLHttpRequest();
                var delSendgridUrl = 'https://api.sendgrid.com/v3/asm/suppressions/global/' + this.state.emailList[idx];
                delSendgridHttp.open('DELETE', delSendgridUrl, false);
                delSendgridHttp.setRequestHeader('Authorization', 'Bearer ' + sendgridCred);
                delSendgridHttp.send();
                delSendgridHttp.onError = function () {
                    return alert('Something went wrong when re-sub sendgrid.');
                };
            }

            var page = this.state.curPage.indexOf(true);
            var curList = this.state.emailList;
            curList.splice(idx, 1);
            var length = curList.length;
            var pagination = Math.ceil(length / this.state.pagination);
            var curPage = Array(pagination).fill(null);
            if (page > length - 1) {
                curPage[0] = true;
            } else {
                curPage[page] = true;
            }
            this.setState({
                emailList: curList,
                curPage: curPage
            });
        }
    }, {
        key: 'swicthPage',
        value: function swicthPage(selectPage) {
            var newCurPage = Array(this.state.curPage.length).fill(null);
            newCurPage[selectPage] = true;

            this.setState({
                curPage: newCurPage
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var _this3 = this;

            var curPage = this.state.curPage;
            var pagination = this.state.pagination;
            var displayEmail = this.state.emailList.slice(curPage.indexOf(true) * pagination, curPage.indexOf(true) * pagination + pagination);
            var starter = curPage.indexOf(true) * pagination;

            // console.log('total page: ' + curPage.length);

            var pages = curPage.map(function (focus, i) {
                var page = i + 1;
                if (focus) {
                    return React.createElement(
                        'li',
                        { key: i },
                        page
                    );
                } else {
                    return React.createElement(
                        'li',
                        { className: 'notFocused', key: i, onClick: function onClick() {
                                return _this3.swicthPage(i);
                            } },
                        page
                    );
                }
            });

            return React.createElement(
                'div',
                { className: 'container' },
                React.createElement(
                    'div',
                    { className: 'row' },
                    React.createElement(
                        'h1',
                        null,
                        'Email Management'
                    ),
                    React.createElement(
                        'div',
                        { className: 'mx-auto' },
                        React.createElement(
                            'form',
                            { onSubmit: this.handleSubmit },
                            React.createElement(
                                'div',
                                { className: 'form-group' },
                                React.createElement(
                                    'label',
                                    { htmlFor: 'appid', className: 'form-label' },
                                    'App Id',
                                    React.createElement('input', { type: 'text', value: this.state.appId, onChange: this.handleAppId, className: 'form-control', id: 'appId' })
                                )
                            ),
                            React.createElement(
                                'div',
                                { className: 'form-group' },
                                React.createElement(
                                    'label',
                                    { htmlFor: 'appToken', className: 'form-label' },
                                    'App Token',
                                    React.createElement('input', { type: 'text', value: this.state.appToken, onChange: this.handleAppToken, className: 'form-control', id: 'appToken' })
                                )
                            ),
                            React.createElement(
                                'div',
                                { className: 'form-group' },
                                React.createElement(
                                    'label',
                                    { htmlFor: 'sendgridCred', className: 'form-label' },
                                    'Sendgrid Token (Only add it when you want to resub in sendgrid as well)',
                                    React.createElement('input', { type: 'text', value: this.state.sendgridCred, onChange: this.handleSendgridCred, className: 'form-control', id: 'sendgridCred' })
                                )
                            ),
                            React.createElement(
                                'div',
                                { className: 'form-group' },
                                React.createElement(
                                    'label',
                                    { htmlFor: 'insertEmail', className: 'form-label' },
                                    'Add unsub email',
                                    React.createElement('input', { type: 'email', value: this.state.unsubEmail, onChange: this.handleInsert, className: 'form-control', id: 'unsubEmail' })
                                )
                            ),
                            React.createElement(
                                'div',
                                { className: 'form-group' },
                                React.createElement(
                                    'label',
                                    { htmlFor: 'serch', className: 'form-label' },
                                    'Search email',
                                    React.createElement('input', { type: 'text', value: this.state.search, onChange: this.handleSearch, className: 'form-control', id: 'unsubEmail' })
                                )
                            ),
                            React.createElement(
                                'div',
                                { className: 'form-group' },
                                React.createElement('input', { className: 'btn btn-primary', type: 'submit', value: 'Submit' })
                            )
                        )
                    ),
                    React.createElement(
                        'div',
                        null,
                        React.createElement(List, {
                            emailList: displayEmail,
                            starter: starter,
                            onClick: function onClick(i) {
                                return _this3.handleDelete(i);
                            }
                        })
                    )
                ),
                React.createElement(
                    'div',
                    { className: 'row pagination' },
                    React.createElement(
                        'ul',
                        { className: 'pagination' },
                        pages
                    )
                )
            );
        }
    }]);

    return Panel;
}(React.Component);

var List = function (_React$Component2) {
    _inherits(List, _React$Component2);

    function List() {
        _classCallCheck(this, List);

        return _possibleConstructorReturn(this, (List.__proto__ || Object.getPrototypeOf(List)).apply(this, arguments));
    }

    _createClass(List, [{
        key: 'render',
        value: function render() {
            var _this5 = this;

            var emailList = this.props.emailList;
            var rows = emailList.map(function (email, i) {
                i = i + _this5.props.starter;
                return React.createElement(
                    'tr',
                    { key: i },
                    React.createElement(
                        'th',
                        { scope: 'row' },
                        i
                    ),
                    React.createElement(
                        'td',
                        null,
                        email
                    ),
                    React.createElement(
                        'td',
                        null,
                        React.createElement(
                            'li',
                            { className: 'option', onClick: function onClick() {
                                    return _this5.props.onClick(i);
                                } },
                            'delete'
                        )
                    )
                );
            });

            return React.createElement(
                'table',
                { className: 'table' },
                React.createElement(
                    'thead',
                    null,
                    React.createElement(
                        'tr',
                        null,
                        React.createElement(
                            'th',
                            { scope: 'col' },
                            '#'
                        ),
                        React.createElement(
                            'th',
                            { scope: 'col' },
                            'email'
                        ),
                        React.createElement(
                            'th',
                            { scope: 'col' },
                            'action'
                        )
                    )
                ),
                React.createElement(
                    'tbody',
                    null,
                    rows
                )
            );
        }
    }]);

    return List;
}(React.Component);

// ========================================

var domContainer = document.querySelector('#manage_panel');
ReactDOM.render(React.createElement(Panel, null), domContainer);