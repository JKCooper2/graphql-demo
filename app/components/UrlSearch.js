import React, { Component } from 'react';
import { Input, Button } from 'semantic-ui-react';

type State = {
    url: string
}

type Props = {
    searchInProgress: boolean,
    searchByUrl: (url: string) => mixed
}

class URLSearch extends Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            url: ''
        };
    }

    onInputChange = (input) => {
        this.setState({ url: input.target.value });
    }

    handleKeyPress = (e) => {
        if (e.charCode === 13) {
            e.preventDefault();
            this.search();
        }
    }

    search = () => this.props.searchByUrl(this.state.url);

    render() {
        return (
            <div>
                <Input
                    loading={this.props.searchInProgress}
                    fluid
                    size="huge"
                    onChange={this.onInputChange}
                    onKeyPress={this.handleKeyPress}
                    placeholder="Enter a url to an image..."
                    action
                >
                    <input />
                    <Button
                        type="submit"
                        icon="search"
                        content="Search"
                        onClick={this.search}
                    />
                </Input>
            </div>
        );
    }
}

export default URLSearch;
