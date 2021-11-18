
class Panel extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            emailList: Array(),
            appId: '',
            appToken: '',
            unsubEmail: '',
            curPage: Array(),
            pagination: 4,
            search: '',
        }
        this.handleAppId = this.handleAppId.bind(this);
        this.handleAppToken = this.handleAppToken.bind(this);
        this.handleInsert = this.handleInsert.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleSearch = this.handleSearch.bind(this);
    }

    handleAppId(event) {
        this.setState({appId: event.target.value});
    }

    handleAppToken(event) {
        this.setState({appToken: event.target.value});
    }

    handleInsert(event) {
        this.setState({unsubEmail: event.target.value});
    }

    handleSearch(event) {
        this.setState({search: event.target.value});
    }

    handleSubmit(event) {
        const unsubEmail = this.state.unsubEmail;
        const appId = this.state.appId;
        const token = 'Token ' + this.state.appToken;
        if (unsubEmail !== '') {
            console.log('insert new unsub email.' + unsubEmail);
            //implement insert 
        }

        this.setState({
            emailList: Array(),
        });
        event.preventDefault();
        const http = new XMLHttpRequest();
        const url = 'https://api.qgraph.io/api/v3/users/?unsubscribed=true';
        http.open("GET", url);
        http.setRequestHeader('appid', appId);
        http.setRequestHeader('authorization', token);
        http.onreadystatechange = () => {
            if(http.readyState == 4 && http.status == 200) {
                const searchTerm = this.state.search;
                let response = JSON.parse(http.responseText)['emails'];
                if (searchTerm !== '') {
                    response = response.filter((str) => { return str.includes(searchTerm);});
                }
                if (response.length > 0) {
                    const length = response.length;
                    const curList = this.state.emailList;
                    const pagination = Math.ceil(length / this.state.pagination);
                    const curPage = Array(pagination).fill(null);
                    curPage[0] = true;

                    this.setState({
                        emailList: curList.concat(response),
                        curPage: curPage,
                    });
                } else {
                    alert('Find no emails.');
                }
            }
        } 
        http.onError = () => {
            alert('Something')
        }
        http.send();
    }

    handleDelete(idx) {
        // need implement delete
        const page = this.state.curPage.indexOf(true);
        const curList = this.state.emailList;
        curList.splice(idx, 1);
        const length = curList.length;
        console.log(length);
        const pagination = Math.ceil(length / this.state.pagination);
        const curPage = Array(pagination).fill(null);
        if(page > length - 1) {
            curPage[0] = true;
        } else {
            curPage[page] = true;    
        }
        this.setState({
            emailList: curList,
            curPage: curPage,
        });
    } 

    swicthPage(selectPage) {
        console.log(selectPage);
        const newCurPage = Array(this.state.curPage.length).fill(null);
        newCurPage[selectPage] = true;

        this.setState({
            curPage: newCurPage,
        });
    }

    render() {
        const curPage = this.state.curPage;
        const pagination = this.state.pagination;
        const displayEmail = this.state.emailList.slice(curPage.indexOf(true) * pagination, curPage.indexOf(true) * pagination + pagination);
        const starter = curPage.indexOf(true) * pagination;

        // console.log('total page: ' + curPage.length);

        const pages = curPage.map((focus, i) => {
            const page = i + 1;
            if (focus) {
                return (
                    <li key={i}>{page}</li>
                );
            } else {
                return (
                    <li className="notFocused" key={i} onClick={() => this.swicthPage(i)}>{page}</li>
                );
            }  
        });

        return (
            <div className="container">
                <div className="row">
                    <h1>Email Management</h1>
                    <div className="mx-auto">
                        <form onSubmit={this.handleSubmit}>
                            <div className="form-group">
                                <label htmlFor="appid" className="form-label">App Id:
                                    <input type="text" value={this.state.appId} onChange={this.handleAppId} className="form-control" id="appId"/>
                                </label>
                            </div>
                            <div className="form-group">
                                <label htmlFor="appToken" className="form-label">App Token:
                                    <input type="text" value={this.state.appToken} onChange={this.handleAppToken} className="form-control" id="appToken"/>
                                </label>
                            </div>
                            <div className="form-group">
                                <label htmlFor="insertEmail" className="form-label">Add unsub email:
                                    <input type="email" value={this.state.unsubEmail} onChange={this.handleInsert} className="form-control" id="unsubEmail"/>
                                </label>
                            </div>
                            <div className="form-group">
                                <label htmlFor="serch" className="form-label">Add search email:
                                    <input type="text" value={this.state.search} onChange={this.handleSearch} className="form-control" id="unsubEmail"/>
                                </label>
                            </div>
                            <div className="form-group">
                                <input className="btn btn-primary" type="submit" value="Submit" />
                            </div>
                        </form>
                    </div>
                    <div>
                        <List
                            emailList={displayEmail} 
                            starter={starter}
                            onClick={(i) => this.handleDelete(i)}
                        />
                    </div>
                </div>
                <div className="row pagination">
                    <ul className="pagination">
                        {pages}
                    </ul>
                </div>
            </div>
        );
    }
}

class List extends React.Component {

    render() {
        const emailList = this.props.emailList;
        const rows = emailList.map((email, i) => {
            i = i + this.props.starter;
            return (
                <tr key={i}>
                    <th scope="row">{i}</th>
                    <td>{email}</td>
                    <td>
                       <li className="option" onClick={() => this.props.onClick(i)}>delete</li> 
                    </td>
                </tr>
            );
        });

        return (
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">email</th>
                        <th scope="col">action</th>
                    </tr>
                </thead>
                <tbody>
                    {rows}
                </tbody>
            </table>
        );
    }
}


// ========================================

const domContainer = document.querySelector('#manage_panel');
ReactDOM.render(<Panel />, domContainer);