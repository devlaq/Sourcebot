class Captcha {

    public minSize: number;
    public maxSize: number;

    public imageWidth: number;
    public imageHeight: number;

    public numbersOnly: boolean;
    public charsOnly: boolean;

    public constructor(minSize: number, maxSize = minSize, imageWidth: number, imageHeight: number, numbersOnly = false, charsOnly = false) {
        this.minSize = minSize;
        this.maxSize = maxSize;
        this.imageWidth = imageWidth;
        this.imageHeight = imageHeight;
        this.numbersOnly = numbersOnly;
        this.charsOnly = charsOnly;
    }

    public generate() {
        
    }

}