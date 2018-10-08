## Usage
First, generate an html file of the current resume.  You should see some output of the html file created.
`npm run build`

Then use `html-pdf` to generate a pdf from the html file.  (You may need to install it)
```bash
# If installation required
npm install -g html-pdf

# test1.html is the input file and resume.pdf is output file
html-pdf output/test1.html output/pdf/resume.pdf
```

If you'd like to change the content of the resume, edit one of the configuration files.  For example `resume-app/src/config/Distil.js`

## Issues
[x] Need to use Auto prefixer for `html-pdf` to understand flex styles. - See https://autoprefixer.github.io/  

[x] Rendered content in PDF is too big.  Use Zoom 0.55 in css as workaround  
[x] Icons zoom differently than text