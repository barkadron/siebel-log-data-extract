requirejs(['jquery', 'handlebars'], function($, Handlebars) {
    var source = $("#hbs-body-template").html();

    var template = Handlebars.compile(source);

    var html = template({
        title: 'Siebel Log Info Extract',
        tabs: [{
                classValue: "mdl-layout__tab is-active",
                hrefValue: "#fixed-tab-1",
                text: "OM Log File Info Extract"
            },
            {
                classValue: "mdl-layout__tab",
                hrefValue: "#fixed-tab-2",
                text: "Performance"
            },
            {
                classValue: "mdl-layout__tab",
                hrefValue: "#fixed-tab-3",
                text: "FDR"
            }
        ],
        sections: [{
                sectionId: "fixed-tab-1",
                pageContentId: "file-upload-card",
                pageContentTitle: "Please upload a log file:",
                filesId: "files",
                cancel: "Cancel read",
                progressBarId: "progress_bar",
                someInfoId: "some_info",
                someInfoValue: "File Content:",
                fileContentId: "file_content",
                fileContentValue: "None at the moment ... No uploads...",
                buttons: [{
                        classValue: "mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect",
                        idValue: "check_js",
                        text: "Check JavaScripts"
                    },
                    {
                        classValue: "mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect",
                        idValue: "check_ev",
                        text: "Check Event Contexts"
                    },
                    {
                        classValue: "mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect",
                        idValue: "check_sbl",
                        text: "Check SBLs"
                    },
                    {
                        classValue: "mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect",
                        idValue: "check_sbl_desc",
                        text: "Check SBLs with description"
                    },
                    {
                        classValue: "mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect",
                        idValue: "check_ev_sbl",
                        text: "Check Event Contexts with SBLs"
                    },
                    {
                        classValue: "mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect",
                        idValue: "check_errors",
                        text: "Check for errors"
                    }
                ],
                outputCardId: "output-card",
                opText: "Output:",
                resultsOutputId: "results_output",
                ccId: "copy-button",
                ccText: "Copy to clipboard"
            },
            {
                sectionId: "fixed-tab-2",
                pageContentId: "performance-upload-card",
                pageContentTitle: "Please upload a log file: ",
                filesId: "files-performance",
                cancel: "Cancel read",
                progressBarId: "progress_bar_performance",
                someInfoId: "some_info_performance",
                someInfoValue: "File Content:",
                fileContentId: "file_content_performance",
                fileContentValue: "None at the moment ... No uploads...",
                buttons: [{
                        classValue: "mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect",
                        idValue: "lines_with_bad_sql",
                        text: "Get lines with high SQL execution"
                    },
                    {
                        classValue: "mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect",
                        idValue: "lines_with_bad_bs",
                        text: "Get lines with high BS execution"
                    }
                ],
                outputCardId: "output-card-performance",
                opText: "Output:",
                resultsOutputId: "results_output_performance",
                ccId: "copy-button-performance",
                ccText: "Copy to clipboard"
            },
            {
                sectionId: "fixed-tab-3",
                pageContentId: "fdr-upload-card",
                pageContentTitle: "Please upload a FDR file:",
                filesId: "files-fdr",
                cancel: "Cancel read",
                progressBarId: "progress_bar_fdr",
                someInfoId: "some_info_fdr",
                someInfoValue: "File Content:",
                fileContentId: "file_content_fdr",
                fileContentValue: "None at the moment ... No uploads ...",
                buttons: [{
                    classValue: "mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect",
                    idValue: "lines_before_crash",
                    text: "Get last lines before"
                }],
                outputCardId: "output-card-fdr",
                opText: "Output:",
                resultsOutputId: "results_output_fdr",
                ccId: "copy-button-fdr",
                ccText: "Copy to clipboard"
            }
        ],
        footerLink: 'https://github.com/stefanciprian/SiebelLogInfoExtract',
        footerText: 'Siebel Log Info Extract'
    });

    $('.hbs-body-container').append(html);
});