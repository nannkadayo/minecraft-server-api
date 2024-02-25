#!/bin/bash
WAIT=5

STARTSCRIPT=./start.sh

SCREEN_NAME='minecraft'



screen -p 0 -S ${SCREEN_NAME} -X eval 'stuff "say '${WAIT}'秒後にサーバーを停止します\015"'

sleep $WAIT
screen -p 0 -S ${SCREEN_NAME} -X eval 'stuff "stop\015"'

