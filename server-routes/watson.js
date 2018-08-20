var ConversationV1 = require('watson-developer-cloud/conversation/v1');

var conversation = new ConversationV1({
    username: process.env.CONVERSATION_USERNAME || '<conversation_username>',
    password: process.env.CONVERSATION_PASSWORD || '<conversation_password>',
    version: '2018-07-10'
});

var watson = function (req, res) {
    var workspace = process.env.WORKSPACE_ID || '<workspace-id>';
    if (!workspace || workspace === '<workspace-id>') {
        return res.json({
            'output': {
                'text': 'The app has not been configured with a <b>WORKSPACE_ID</b> environment variable. Please refer to the ' + '<a href="https://github.com/watson-developer-cloud/assistant-simple">README</a> documentation on how to set this variable. <br>' + 'Once a workspace has been defined the intents may be imported from ' + '<a href="https://github.com/watson-developer-cloud/assistant-simple/blob/master/training/car_workspace.json">here</a> in order to get a working application.'
            }
        });
    }

    var payload = {
        workspace_id: workspace,
        context: req.body.context || {},
        input: req.body.input || {}
    };

    conversation.message(payload, function (err, data) {
        if(err){
            return res.status(err.code || 500).json(err);
        }
        return res.send(data);
    });
}

module.exports = watson;