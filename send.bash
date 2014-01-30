#!/bin/bash
sleep 2
echo HELO local.domain.name
sleep 1
echo "MAIL FROM: <mail@domain.ext>"
sleep 1
echo "RCPT TO: <mail@otherdomain.ext>"
sleep 1
echo DATA
echo Subject: Test email
echo
echo
echo This is the body of the email
echo
echo "."
echo
sleep 5
echo QUIT
