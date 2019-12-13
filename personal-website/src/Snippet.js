import React from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { rainbow } from 'react-syntax-highlighter/dist/esm/styles/hljs';

class Sample extends React.Component {
    render() {
        const codeString = '// Get recommended songs based on params passed in from <Events/> async getSongs(token){\n await axios({\n method:get\n url:URL\n params:{\n  limit: this.props.limit,\n  seed_generes: this.props.genres,\n  min_danceability: this.props.min_danceability,\n  max_energy: this.props.max_energy,\n });\n}';
        return (
            <div id="code">
                <div id="codeInner">
                    <h3 className="mt-0 pt-0 text-light font-weight-light">Party Picker</h3>
                    <div className="text-left" id="codeFront">
                        <SyntaxHighlighter language="javascript" style={rainbow}>
                            {codeString}
                        </SyntaxHighlighter>
                    </div>
                    <div id="codeBack">
                        <a href="https://github.com/eBork1/party-picker"><button className="btn-block btn-info">Check it and other projects out on my github</button></a><br/>
                    </div>
                </div>
            </div>

        )
    }
}

export default Sample;