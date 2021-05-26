import React, { Component } from 'react';
import { Card, Table, Icon, Tooltip } from 'antd';
import { connect } from 'react-redux';


class FeaturePanel extends Component {

    render = ()=>{
        const featTip =
            <p className='tip'>
                Annotations from <a target='_blank' rel="noopener noreferrer" href='https://www.uniprot.org/'>UniProtKB/Swiss-Prot</a> database
            </p>;

        const featTitle = <span> Features <Tooltip title={featTip} arrowPointAtCenter={true} placement='right'> <Icon type="question-circle" /> </Tooltip> </span>;
        const columns = [
            { title: 'Feauture', dataIndex: 'ft', key: 'ft', align:'center'},//, width:'30%'},
            { title: 'Chain', dataIndex: 'ch', key: 'ch', align:'center'},//, width:'15%' },
            { title: 'Position(s)', dataIndex: 'pos', key: 'pos', align:'center'},//, width:'15%' },
            { title: 'Description', dataIndex: 'dscr', key: 'aa', align:'center'},//, width:'20%' },
            { title: 'Reference', dataIndex: 'spid', key: 'spid', align:'center',//, width:'20%',
                render:spid=><a target="_blank" rel="noopener noreferrer" href={`http://www.uniprot.org/uniprot/${spid}`}>{spid}</a>
            },
        ];
        const dataSource = ()=>{
            if(this.props.featInfo!==undefined && this.props.featInfo.fulfilled){
                return this.props.featInfo.value;
            }
            else{
                return (null);
            }
        }
        return (
            <Card title={featTitle}>
                <Table
                    columns={columns}
                    dataSource={dataSource()}
                    //pagination={{ pageSize: 20 }}
                    //scroll={{ y: 280 }}    
                    onRow={(record) => {
                        return {
                            onClick: () => { 
                                let chain = record.ch;
                                let seqid = record.seqid || record.pos
                                this.props.viewer.zoomTo( { within: { distance: 8, sel: { chain:chain, resi: seqid } } } );
                            },
                            onMouseEnter: () => {
                                document.body.style.cursor = "pointer";
                            },
                            onMouseLeave: () => {
                                document.body.style.cursor = "default";
                            },
                        };
                    }}
                />
            </Card>
        );
    }
}



const mapStateToProps = state => ({
    searchid: state.router.location.search.slice(1),
    featInfo: state.repository.feat,
    viewer: state.viewer.viewer,
});

export default connect(mapStateToProps)(FeaturePanel);
