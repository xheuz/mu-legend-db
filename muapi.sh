#!/bin/sh
if [ $1 = "start" ]
    then
        if pgrep -x "node" > /dev/null
        then
            echo "API Client is already running!"
            exit 1;
        fi
    echo "Executing API client..."
    sudo -H -u [USER] bash -c ". [PATH_TO_ENV_FILE]/.env; nohup node ~/mu-legend-db/server >[PATH_TO_LOGS]/muapi.log 2>&1 &"
    echo "API client executed"
    exit 0;

elif [ $1 = "stop" ]
    then
       if pgrep -x "node" > /dev/null
        then
            echo "Stopping process.."
            sudo kill -- $(ps ax | grep node | fgrep -v grep | awk '{ print $1 }')
            echo "Process stopped"
            exit 0;
        else
            echo "API Client is already stopped!"
            exit 1;
        fi
else
    echo "Command not recognized, please try again"
fi