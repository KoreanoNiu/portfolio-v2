import React, { Component } from 'react'
import Knowledge from './Knowledge';
import KnowledgesJSON from './knowledges.json';

interface IProps {

}

interface IState {
    knowledgesData: Array<any>,
    type: string,
    fronted?: boolean,
    backed?: boolean,
    all?: boolean,
    plus?: boolean,
}

export default class Knowledges extends Component<IProps, IState> {
    constructor(props: IProps){
        super(props);
        this.state = {
            knowledgesData: KnowledgesJSON,
            type: 'FRONTEND',
            fronted: true,
        }
        
        this.handleFrontendPicker = this.handleFrontendPicker.bind(this);
        this.handleBackendPicker = this.handleBackendPicker.bind(this);
        this.handlePlusPicker = this.handlePlusPicker.bind(this);
        this.handleAllPicker = this.handleAllPicker.bind(this);
    }
    handleFrontendPicker() {
        this.setState({
            type: 'FRONTEND',
            fronted: true,
            backed: false,
            all: false,
            plus: false,
        })
    }
    handleBackendPicker() {
        this.setState({
            type: 'BACKEND',
            fronted: false,
            backed: true,
            all: false,
            plus: false,
        })
    }
    handleAllPicker() {
        this.setState({
            type: '',
            fronted: false,
            backed: false,
            all: true,
            plus: false,
        })
    }
    handlePlusPicker() {
        this.setState({
            type: 'EXTRAS',
            fronted: false,
            backed: false,
            all: false,
            plus: true,
        })
    }

    render() {
        const { knowledgesData } = this.state;
        let fileredKnowledges = knowledgesData;
        if (this.state.type === ''){
            fileredKnowledges = knowledgesData.filter((knowledge) => knowledge.type !== this.state.type);
        }else if (this.state.type === 'EXTRAS'){
            fileredKnowledges = knowledgesData.filter((knowledge) => knowledge.type === this.state.type);
        }
        else{
            fileredKnowledges = knowledgesData.filter((knowledge) => knowledge.type === this.state.type || knowledge.type === 'FRONTEND BACKEND');
        }
        return (
            <div className="uk-section uk-section-secondary uk-text-center" id="Knowledge" data-uk-scrollspy="cls: uk-animation-slide-top-small; target: .uk-card; repeat: true" style={{backgroundColor: '#121212'}}>
                <div className="uk-container uk-container-xlarge">

                    <h2 className="uk-margin-bottom">CONOCIMIENTOS</h2>
                    <div>
                        <ul className="uk-subnav uk-subnav-pill uk-subnav-divider uk-flex uk-flex-center uk-flex-middle" data-uk-margin>
                            <li className={this.state.all ? 'uk-active' : ''}><a onClick={this.handleAllPicker}>Todas</a></li>
                            <li className={this.state.fronted ? 'uk-active' : ''}><a onClick={this.handleFrontendPicker}>Frontend</a></li>
                            <li className={this.state.backed ? 'uk-active uk-margin-small' : 'uk-margin-small'}><a onClick={this.handleBackendPicker}>Backend</a></li>
                            <li className={this.state.plus ? 'uk-active uk-margin-small-top' : 'uk-margin-small-top'}><a onClick={this.handlePlusPicker}>Extras</a></li>
                        </ul>
                    </div>
                    <div className='uk-child-width-1-4@m uk-grid-small uk-grid-match uk-flex uk-flex-center uk-grid' data-uk-grid>
                            {
                                fileredKnowledges.map((knowledge, id) => {
                                    return(
                                        <Knowledge
                                            image={knowledge.image}
                                            title={knowledge.title}
                                            preferido={knowledge.preferido}
                                            key={id}
                                        >
                                        </Knowledge>
                                    )
                                })
                            }    
                    </div>
                </div>
                <span id="Projects"></span>
            </div>
        )
    }
}
