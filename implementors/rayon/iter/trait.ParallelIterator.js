(function() {var implementors = {};
implementors["hibitset"] = ["impl&lt;T&gt; <a class=\"trait\" href=\"rayon/iter/trait.ParallelIterator.html\" title=\"trait rayon::iter::ParallelIterator\">ParallelIterator</a> for <a class=\"struct\" href=\"hibitset/struct.BitParIter.html\" title=\"struct hibitset::BitParIter\">BitParIter</a>&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"hibitset/trait.BitSetLike.html\" title=\"trait hibitset::BitSetLike\">BitSetLike</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a>,&nbsp;</span>",];
implementors["rayon"] = [];
implementors["specs"] = ["impl&lt;T&gt; <a class=\"trait\" href=\"rayon/iter/trait.ParallelIterator.html\" title=\"trait rayon::iter::ParallelIterator\">ParallelIterator</a> for <a class=\"struct\" href=\"hibitset/iter/parallel/struct.BitParIter.html\" title=\"struct hibitset::iter::parallel::BitParIter\">BitParIter</a>&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"hibitset/trait.BitSetLike.html\" title=\"trait hibitset::BitSetLike\">BitSetLike</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a>,&nbsp;</span>","impl&lt;J&gt; <a class=\"trait\" href=\"rayon/iter/trait.ParallelIterator.html\" title=\"trait rayon::iter::ParallelIterator\">ParallelIterator</a> for <a class=\"struct\" href=\"specs/struct.JoinParIter.html\" title=\"struct specs::JoinParIter\">JoinParIter</a>&lt;J&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;J: <a class=\"trait\" href=\"specs/prelude/trait.Join.html\" title=\"trait specs::prelude::Join\">Join</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;J::<a class=\"trait\" href=\"specs/prelude/trait.Join.html\" title=\"trait specs::prelude::Join\">Mask</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;J::<a class=\"trait\" href=\"specs/prelude/trait.Join.html\" title=\"trait specs::prelude::Join\">Type</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;J::<a class=\"trait\" href=\"specs/prelude/trait.Join.html\" title=\"trait specs::prelude::Join\">Value</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a>,&nbsp;</span>",];

            if (window.register_implementors) {
                window.register_implementors(implementors);
            } else {
                window.pending_implementors = implementors;
            }
        
})()
