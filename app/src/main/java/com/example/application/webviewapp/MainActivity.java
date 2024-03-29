package com.example.application.webviewapp;

import androidx.appcompat.app.AppCompatActivity;


import android.os.Bundle;
import android.webkit.WebSettings;
import android.webkit.WebView;
import android.webkit.WebViewClient;

public class MainActivity extends AppCompatActivity {
    private WebView webView;
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        // webview
        webView = (WebView)findViewById(R.id.webview);
        webView.setWebViewClient(new WebViewClient());
        webView.loadUrl("https://embershan.github.io/mdp_website/");

        // enable zoom and pinch controls
        WebSettings webSettings = webView.getSettings();
        webSettings.setBuiltInZoomControls(true);
        webSettings.setDisplayZoomControls(false); //hide the zoom buttons
        // must enable javascript for the react website
        webSettings.setJavaScriptEnabled(true);

    }


}