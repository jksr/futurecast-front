import React,{Component} from 'react'
import { Row, Col} from 'antd';
import { connect } from "react-redux";
import MolViewer from './Molviewer';
import ControlPanel from './ControlPanel'
import GeneralInfo from './GeneralInfo'
import MeasurePanel from './MeasurePanel';
import FeaturePanel from "./FeaturePanel";
import SequencePanel from './SequencePanel';
import ResultNotFound from './ResultNotFound';


class ResultContent extends Component{
    constructor(props){
        super(props);
        this.generalref = React.createRef();
        this.measureref = React.createRef();
        this.seqref = React.createRef();
        this.featref = React.createRef();
    }
    render = ()=>{
        console.log('RC')
        return (
            <div>
                <Row type='flex' justify='space-around'>
                    <Col span={11}>
                        <GeneralInfo ref={this.generalref} />
                    </Col>
                    <Col span={12}>
                        <MolViewer searchid={this.props.searchid} />
                    </Col>
                </Row>

                <Row type='flex' justify='space-around'>
                    <Col span={23}>
                        <MeasurePanel ref={this.measureref} /> 
                    </Col>
                </Row>

                <br/>
                <Row type='flex' justify='space-around'>
                    <Col span={23}>
                        <SequencePanel ref={this.seqref} />
                    </Col>
                </Row>

                <br/>
                <Row type='flex' justify='space-around'>
                    <Col span={23}>
                        <FeaturePanel ref={this.featref} />
                    </Col>
                </Row>

                <ControlPanel refs={[
                    this.generalref,
                    this.measureref, 
                    this.seqref, 
                    this.featref
                ]}/>{/**TODO change controlpanel to be automatic */}
                <ResultNotFound />
            </div>
        )
    }
}

const mapStateToProps = state => ({
    searchid: state.router.location.search.slice(1),
});

export default connect(mapStateToProps)(ResultContent);