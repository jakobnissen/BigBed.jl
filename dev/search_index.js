var documenterSearchIndex = {"docs":
[{"location":"#BigBed.jl-1","page":"Home","title":"BigBed.jl","text":"","category":"section"},{"location":"#","page":"Home","title":"Home","text":"(Image: Project Status: Active – The project has reached a stable, usable state and is being actively developed.) (Image: Latest Release) (Image: MIT license) (Image: Stable documentation) (Image: Latest documentation) (Image: Join the chat at https://gitter.im/BioJulia/BigBed.jl)","category":"page"},{"location":"#","page":"Home","title":"Home","text":"This project follows the semver pro forma and uses the git-flow branching model.","category":"page"},{"location":"#Description-1","page":"Home","title":"Description","text":"","category":"section"},{"location":"#","page":"Home","title":"Home","text":"This BigBed package provides data representation and IO tools for the bigBed file format. The bigBed binary file format is for representing genomic annotations. It is indexed to fetch specific regions quickly and is often created from BED files.","category":"page"},{"location":"#Installation-1","page":"Home","title":"Installation","text":"","category":"section"},{"location":"#","page":"Home","title":"Home","text":"You can install the BigBed package from the Julia REPL. Press ] to enter pkg mode, then enter the following command:","category":"page"},{"location":"#","page":"Home","title":"Home","text":"add BigBed","category":"page"},{"location":"#","page":"Home","title":"Home","text":"If you are interested in the cutting edge of the development, please check out the develop branch to try new features before release.","category":"page"},{"location":"#Testing-1","page":"Home","title":"Testing","text":"","category":"section"},{"location":"#","page":"Home","title":"Home","text":"BigBed is tested against Julia 1.X on Linux, OS X, and Windows.","category":"page"},{"location":"#","page":"Home","title":"Home","text":"Latest build status:","category":"page"},{"location":"#","page":"Home","title":"Home","text":"(Image: Unit tests) (Image: Documentation) (Image: codecov)","category":"page"},{"location":"#Contributing-1","page":"Home","title":"Contributing","text":"","category":"section"},{"location":"#","page":"Home","title":"Home","text":"We appreciate contributions from users including reporting bugs, fixing issues, improving performance and adding new features.","category":"page"},{"location":"#","page":"Home","title":"Home","text":"Take a look at the contributing files detailed contributor and maintainer guidelines, and code of conduct.","category":"page"},{"location":"#Financial-contributions-1","page":"Home","title":"Financial contributions","text":"","category":"section"},{"location":"#","page":"Home","title":"Home","text":"We also welcome financial contributions in full transparency on our open collective. Anyone can file an expense. If the expense makes sense for the development the core contributors and the person who filed the expense will be reimbursed.","category":"page"},{"location":"#Backers-and-Sponsors-1","page":"Home","title":"Backers & Sponsors","text":"","category":"section"},{"location":"#","page":"Home","title":"Home","text":"Thank you to all our backers and sponsors!","category":"page"},{"location":"#","page":"Home","title":"Home","text":"Love our work and community? Become a backer.","category":"page"},{"location":"#","page":"Home","title":"Home","text":"(Image: backers)","category":"page"},{"location":"#","page":"Home","title":"Home","text":"Does your company use BioJulia? Help keep BioJulia feature rich and healthy by sponsoring the project. Your logo will show up here with a link to your website.","category":"page"},{"location":"#","page":"Home","title":"Home","text":"(Image: ) (Image: ) (Image: ) (Image: ) (Image: ) (Image: ) (Image: ) (Image: ) (Image: ) (Image: )","category":"page"},{"location":"#Questions?-1","page":"Home","title":"Questions?","text":"","category":"section"},{"location":"#","page":"Home","title":"Home","text":"If you have a question about contributing or using BioJulia software, come on over and chat to us on Gitter, or you can try the Bio category of the Julia discourse site.","category":"page"},{"location":"man/api/#API-Reference-1","page":"API Reference","title":"API Reference","text":"","category":"section"},{"location":"man/api/#Public-1","page":"API Reference","title":"Public","text":"","category":"section"},{"location":"man/api/#","page":"API Reference","title":"API Reference","text":"Modules = [BigBed]\nPrivate = false","category":"page"},{"location":"man/api/#Internal-1","page":"API Reference","title":"Internal","text":"","category":"section"},{"location":"man/api/#","page":"API Reference","title":"API Reference","text":"Modules = [BigBed]\nPublic = false","category":"page"},{"location":"man/api/#BigBed.Reader-Tuple{IO}","page":"API Reference","title":"BigBed.Reader","text":"BigBed.Reader(input::IO)\n\nCreate a reader for bigBed file format.\n\nNote that input must be seekable.\n\n\n\n\n\n","category":"method"},{"location":"man/api/#BigBed.Record-Tuple{}","page":"API Reference","title":"BigBed.Record","text":"BigBed.Record()\n\nCreate an unfilled bigBed record.\n\n\n\n\n\n","category":"method"},{"location":"man/api/#BigBed.Writer-Tuple{IO,Union{AbstractDict, AbstractArray{T,1} where T}}","page":"API Reference","title":"BigBed.Writer","text":"BigBed.Writer(output::IO, chromlist; binsize=64)\n\nCreate a data writer of the bigBed file format.\n\nArguments\n\noutput: data sink\nchromlist: chromosome list with length\nbinsize=64: size of a zoom with the highest resolution\n\nExamples\n\noutput = open(\"data.bb\", \"w\")\nwriter = BigBed.Writer(output, [(\"chr1\", 12345), (\"chr2\", 9100)])\nwrite(writer, (\"chr1\", 101, 150, \"gene 1\"))\nwrite(writer, (\"chr2\", 211, 250, \"gene 2\"))\nclose(writer)\n\n\n\n\n\n","category":"method"},{"location":"man/api/#BigBed.blockcount-Tuple{BigBed.Record}","page":"API Reference","title":"BigBed.blockcount","text":"blockcount(record::Record)::Int\n\nGet the number of blocks (exons) in record.\n\n\n\n\n\n","category":"method"},{"location":"man/api/#BigBed.blocksizes-Tuple{BigBed.Record}","page":"API Reference","title":"BigBed.blocksizes","text":"blocksizes(record::Record)::Vector{Int}\n\nGet the block (exon) sizes of record.\n\n\n\n\n\n","category":"method"},{"location":"man/api/#BigBed.blockstarts-Tuple{BigBed.Record}","page":"API Reference","title":"BigBed.blockstarts","text":"blockstarts(record::Record)::Vector{Int}\n\nGet the block (exon) starts of record.\n\nNote that the first base is numbered 1.\n\n\n\n\n\n","category":"method"},{"location":"man/api/#BigBed.chrom-Tuple{BigBed.Record}","page":"API Reference","title":"BigBed.chrom","text":"chrom(record::Record)::String\n\nGet the chromosome name of record.\n\n\n\n\n\n","category":"method"},{"location":"man/api/#BigBed.chromend-Tuple{BigBed.Record}","page":"API Reference","title":"BigBed.chromend","text":"chromend(record::Record)::Int\n\nGet the end position of record.\n\n\n\n\n\n","category":"method"},{"location":"man/api/#BigBed.chromid-Tuple{BigBed.Record}","page":"API Reference","title":"BigBed.chromid","text":"chromid(record::Record)::UInt32\n\nGet the chromosome ID of record.\n\n\n\n\n\n","category":"method"},{"location":"man/api/#BigBed.chromlist-Tuple{BigBed.Reader}","page":"API Reference","title":"BigBed.chromlist","text":"chromlist(reader::BigBed.Reader)::Vector{Tuple{String,Int}}\n\nGet the (name, length) pairs of chromosomes/contigs.\n\n\n\n\n\n","category":"method"},{"location":"man/api/#BigBed.chromstart-Tuple{BigBed.Record}","page":"API Reference","title":"BigBed.chromstart","text":"chromstart(record::Record)::Int\n\nGet the start position of record.\n\n\n\n\n\n","category":"method"},{"location":"man/api/#BigBed.itemrgb-Tuple{BigBed.Record}","page":"API Reference","title":"BigBed.itemrgb","text":"itemrgb(record::Record)::ColorTypes.RGB\n\nGet the RGB value of record.\n\nThe return type is defined in ColorTypes.jl.\n\n\n\n\n\n","category":"method"},{"location":"man/api/#BigBed.name-Tuple{BigBed.Record}","page":"API Reference","title":"BigBed.name","text":"name(record::Record)::String\n\nGet the name of record.\n\n\n\n\n\n","category":"method"},{"location":"man/api/#BigBed.optionals-Tuple{BigBed.Record}","page":"API Reference","title":"BigBed.optionals","text":"optionals(record::Record)::Vector{String}\n\nGet optional fields as strings.\n\n\n\n\n\n","category":"method"},{"location":"man/api/#BigBed.score-Tuple{BigBed.Record}","page":"API Reference","title":"BigBed.score","text":"score(record::Record)::Int\n\nGet the score between 0 and 1000.\n\n\n\n\n\n","category":"method"},{"location":"man/api/#BigBed.strand-Tuple{BigBed.Record}","page":"API Reference","title":"BigBed.strand","text":"strand(record::Record)::GenomicFeatures.Strand\n\nGet the strand of record.\n\n\n\n\n\n","category":"method"},{"location":"man/api/#BigBed.thickend-Tuple{BigBed.Record}","page":"API Reference","title":"BigBed.thickend","text":"thickend(record::Record)::Int\n\nGet the end position at which record is drawn thickly.\n\n\n\n\n\n","category":"method"},{"location":"man/api/#BigBed.thickstart-Tuple{BigBed.Record}","page":"API Reference","title":"BigBed.thickstart","text":"thickstart(record::Record)::Int\n\nGet the starting position at which record is drawn thickly.\n\nNote that the first base is numbered 1.\n\n\n\n\n\n","category":"method"},{"location":"man/bigbed/#BigBed-1","page":"BigBed","title":"BigBed","text":"","category":"section"},{"location":"man/bigbed/#","page":"BigBed","title":"BigBed","text":"I/O tools for bigBed are provided by the BigBed module, which exports following three types:","category":"page"},{"location":"man/bigbed/#","page":"BigBed","title":"BigBed","text":"Reader type: BigBed.Reader\nWriter type: BigBed.Writer\nElement type: BigBed.Record","category":"page"},{"location":"man/bigbed/#Examples-1","page":"BigBed","title":"Examples","text":"","category":"section"},{"location":"man/bigbed/#","page":"BigBed","title":"BigBed","text":"A common workflow is to open a file, iterate over records, and close the file:","category":"page"},{"location":"man/bigbed/#","page":"BigBed","title":"BigBed","text":"# Import the BigBed module.\nusing GenomicFeatures\n\n# Open a bigBed file.\nreader = open(BigBed.Reader, \"data.bb\")\n\n# Iterate over records overlapping with a query interval.\nfor record in eachoverlap(reader, Interval(\"Chr2\", 5001, 6000))\n    # Extract the start position, end position and value of the record,\n    startpos = BigBed.chromstart(record)\n    endpos = BigBed.chromend(record)\n    value = BigBed.value(record)\n    # and do something...\nend\n\n# Finally, close the reader.\nclose(reader)","category":"page"},{"location":"man/bigbed/#","page":"BigBed","title":"BigBed","text":"Iterating over all records is also supported:","category":"page"},{"location":"man/bigbed/#","page":"BigBed","title":"BigBed","text":"reader = open(BigBed.Reader, \"data.bb\")\nfor record in reader\n    # ...\nend\nclose(reader)","category":"page"},{"location":"man/bigbed/#","page":"BigBed","title":"BigBed","text":"Creating a bigBed file can be done as follows. The write call takes a tuple of 3-12 elements (i.e. chromosome name, start position, end position, name, score, strand, thickstart, thickend, RGB color, blockcount, blocksizes and blockstarts). The first three are mandatory fields but others are optional.","category":"page"},{"location":"man/bigbed/#","page":"BigBed","title":"BigBed","text":"# Import RGB type.\nusing ColorTypes\nfile = open(\"data.bb\", \"w\")\nwriter = BigBed.Writer(file, [(\"chr1\", 1000)])\nwrite(writer, (\"chr1\", 1, 100, \"some name\", 100, '+', 10, 90, RGB(0.5, 0.1, 0.2), 2, [4, 10], [10, 20]))\nclose(writer)","category":"page"}]
}
