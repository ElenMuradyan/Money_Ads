package com.example.app;

import androidx.appcompat.app.AppCompatActivity;

import android.os.Bundle;
import com.getcapacitor.BridgeActivity;
import com.getcapacitor.community.admob.AdMob; 
import com.getcapacitor.community.admob.AdMobConfig; 

public class MainActivity extends BridgeActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);

        AdMobConfig config = new AdMobConfig();
        config.setAppId("ca-app-pub-4052131431424102~5673792257");
        AdMob.initialize(config);
    }
}