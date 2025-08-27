package com.ak.smapi.restController;

import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ak.smapi.model.IndexPerformance;
import com.ak.smapi.model.MostActiveEquity;
import com.ak.smapi.model.VolumeGainer;
import com.ak.smapi.model.Week52High;
import com.ak.smapi.model.Week52Low;
import com.ak.smapi.service.IndexPerformanceService;
import com.ak.smapi.service.MostActiveService;
import com.ak.smapi.service.VolumeGainerService;
import com.ak.smapi.service.Week52HighService;
import com.ak.smapi.service.Week52LowService;

@RestController
@RequestMapping("/api")
public class RestApiController {

    private final IndexPerformanceService service;
    private final MostActiveService mostActiveService;
    private final VolumeGainerService volumeGainerService;
    private final Week52HighService week52HighService;
    private final Week52LowService week52LowService;

    RestApiController(IndexPerformanceService service, MostActiveService mostActiveService,
            VolumeGainerService volumeGainerService, Week52HighService week52HighService,
            Week52LowService week52LowService) {
        this.service = service;
        this.mostActiveService = mostActiveService;
        this.volumeGainerService = volumeGainerService;
        this.week52HighService = week52HighService;
        this.week52LowService = week52LowService;
    }

    @GetMapping(value = "/index-performance")
    public List<IndexPerformance> getAllIndexPerformances() {
        return service.getAllIndexPerformances();
    }

    @GetMapping(value = "/most-active-equity")
    public List<MostActiveEquity> getMostActiveEquity() {
        return mostActiveService.getAllMostActiveEquities();
    }

    @GetMapping(value = "/volume-gainer")
    public List<VolumeGainer> getVolumeGainer() {
        return volumeGainerService.getAllVolumeGainers();
    }

    @GetMapping(value = "/week-52-high")
    public List<Week52High> getWeek52High() {
        return week52HighService.getAllWeek52Highs();
    }

    @GetMapping(value = "/week-52-low")
    public List<Week52Low> getWeek52Low() {
        return week52LowService.getAllWeek52Low();
    }

}
