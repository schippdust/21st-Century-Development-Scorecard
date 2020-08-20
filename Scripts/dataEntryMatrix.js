//////////////////////////////////////////////////////////////////////////////////
"///////THIS IS MY TEMPLATE FOR CREATING 'QUICK' D3 CLASSES////////"
//////////////////////////////////////////////////////////////////////////////////

class DataEntryMatrix{
    constructor(_data,_div,_width,_height){
        //////////////////////////////////////////////////////////////////////////////////
        "///////ADDING THE INITIAL PARAMETERS BASED ON USER INPUT////////"
        //////////////////////////////////////////////////////////////////////////////////
        this.width = _width;
        this.height = _height;
        this.centerX = _width/2;
        this.centerY = _height/2;
        this.container = _div;
        this.data = this.buildChartData(_data);
        //////////////////////////////////////////////////////////////////////////////////
        "///////ANY GRAPHIC SPECIFIC DATA SHAPING SHOULD HAPPEN HERE////////"
        //////////////////////////////////////////////////////////////////////////////////

        //////////////////////////////////////////////////////////////////////////////////
        "///////BACK END CONTROLS FOR EDITING THE GRAPHIC////////"
        //////////////////////////////////////////////////////////////////////////////////

        //////////////////////////////////////////////////////////////////////////////////
        "///////CREATING AN SVG OBJECT TO DRAW TO////////"
        //////////////////////////////////////////////////////////////////////////////////
        var _svg = d3.select(_div).append("svg")
            .attr("width",_width)
            .attr("height",_height);
        this.svg = _svg;
        this.svgGroup = _svg.append("g").attr("class","svgGroup")
        //////////////////////////////////////////////////////////////////////////////////
        "///////ADD GROUPS TO THE SVG FOR ORGANIZING DATA////////"
        //////////////////////////////////////////////////////////////////////////////////
        this.programNames = this.svgGroup.append("g").attr("class","programShapes");
        this.intersectionCells = this.svgGroup.append("g").attr("class","programAnnotation");

        return
    };

    buildChartData(_data){
        //////////////////////////////////////////////////////////////////////////////////
        "///////ANY GRAPHIC SPECIFIC DATA SHAPING SHOULD HAPPEN HERE////////"
        //////////////////////////////////////////////////////////////////////////////////

        return _data

    };


    resize(_width,_height){
        //////////////////////////////////////////////////////////////////////////////////
        "///////CALL THIS FUNCTION TO RESIZE THE GRAPHIC////////"
        //////////////////////////////////////////////////////////////////////////////////
        this.width = _width;
        this.height = _height;
        this.centerX = _width/2;
        this.centerY = _height/2;

        this.svg.attr("width", this.width)
        this.svg.attr("height", this.height)

        this.drawUpdate()
        return
    };

    updateData(_data,_levelName){
        var updatedData = this.buildChartData(_data)
        this.drawUpdate()
    };

    drawUpdate(){
        //////////////////////////////////////////////////////////////////////////////////
        "///////THIS FUNCTION DOES THE HEAVY LIFTING FOR CREATING GRAPHICS////////"
        //////////////////////////////////////////////////////////////////////////////////
        var _thisClass = this
        var _data = this.data
        var _height = this.height
        var _width = this.width
        var _centerX = this.centerX
        var _centerY = this.centerY

        var _div = this.container
        var _svg = this.svg
        var _svgGroup = this.svgGroup
        
    };
};