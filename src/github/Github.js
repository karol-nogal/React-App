import React from 'react';
import { List } from 'semantic-ui-react'
import PageWrapper from '../components/PageWrapper';

export default class Github extends React.Component {
    state = {
        commits: [],
        loading: true,
        error: null
    };

    componentDidMount() {
        fetch('data.json')
            .then(res => res.json())
            .then(data => this.setState({ commits: data }))
            .catch(error => this.setState({ error }))
            .finally(() => this.setState({ loading: false }))
    }

    render() {
        if (this.state.loading) {
            return <h1>Loading ...</h1>;
        }

        if (this.state.error) {
            return <h1>An error occurred.</h1>;
        }

        return <div>
            <PageWrapper>
                <div>
            <h1>Github component</h1>
            <List divided relaxed>
                {
                    this.state.commits.map(commit => (
                        <List.Item>
                            <List.Icon name='github' size='large' verticalAlign='middle' />
                            <List.Content>
                                <List.Header as='a'>{commit.author.login}</List.Header>
                                <List.Description as='a'>{commit.commit.message}</List.Description>
                            </List.Content>
                        </List.Item>
                    ))
                }
            </List>
                </div>
            </PageWrapper>
           
        </div>
    }
}