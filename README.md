# cloudfront-to-combined-log-format

> Transform CloudFront logs to Combined Log Format

- [Combined Log Format](https://en.wikipedia.org/wiki/Common_Log_Format) with referrer and user-agent appended
- Stream-based interface

```shell
./cli.js < /path/to/cloudfront-logs-file
aws s3 cp s3://cloudfront-logs/by-date/2022/05/01/ABCDEFGHIJKLM.2022-05-01-23.bb142fea.gz - | gunzip | ./cli.js
```
